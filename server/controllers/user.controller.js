const { google } = require("googleapis");
const axios = require("axios");
const User = require("../models/user.model");
const { generateToken } = require("../middlewares/auth");

const handleGoogleLogin = async (req, res, next) => {
  try {
    // Initialize OAuth2 client
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.REDIRECT_URL
    );

    const { code } = req.body;
    if (!code) {
      throw new IError("Code not found", 404);
    }

    // Get tokens from Google OAuth
    const { tokens } = await oauth2Client.getToken(code);
    const { access_token, refresh_token } = tokens;

    // Fetch user info using the access token
    const userInfo = await axios.get(
      "https://people.googleapis.com/v1/people/me?personFields=emailAddresses,photos,names",
      { headers: { Authorization: `Bearer ${access_token}` } }
    );

    const name = userInfo.data.names.find(
      (name) => name.metadata.primary === true
    )?.displayName;
    const profileImage = userInfo.data.photos.find(
      (photo) => photo.metadata.primary === true
    )?.url;
    const email = userInfo.data.emailAddresses.find(
      (email) => email.metadata.primary === true
    )?.value;

    // Validate email domain
    if (!email.endsWith("@iiitdwd.ac.in")) {
      return res.status(400).json({
        message:
          "Invalid Email ID. Use only institute email ID ending with @iiitdwd.ac.in",
      });
    }

    // Check if the email matches the student pattern (e.g., 12abcd345@iiitdwd.ac.in)
    const studentEmailPattern = /^[0-9]{2}[a-zA-Z]{3}[0-9]{3}@iiitdwd\.ac\.in$/;
    const isStudent = studentEmailPattern.test(email);

    // Determine the role based on email pattern
    const role = isStudent ? "student" : "professor";

    // Check if the user already exists in the database
    let user = await User.findOne({ email });
    if (!user) {
      // If user doesn't exist, create a new user
      user = new User({
        email,
        name,
        profilePicture: profileImage,
        access_token,
        refresh_token,
        role, // Assign the role based on email pattern
      });
      await user.save();
    } else {
      // If user exists, update the tokens
      user.access_token = access_token;
      user.refresh_token = refresh_token;
      await user.save();
    }

    // Generate a JWT token for the logged-in user
    const token = generateToken(user._id.toString(), user.email, role);

    // Send the response with user info and token
    return res.status(200).json({
      userId: user._id.toString(),
      token,
      role,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleGoogleLogin };
