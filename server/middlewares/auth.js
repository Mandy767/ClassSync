const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "your-secret-key";

function generateToken(userId, email, role) {
  const payload = { userId, email, role };
  const options = { expiresIn: "1d" };
  return jwt.sign(payload, JWT_SECRET_KEY, options);
}

function isStudent(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided." });

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    req.user = decoded;
    if (req.user.role !== "student")
      return res.status(403).json({ message: "Not a student." });
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token." });
  }
}

function isProfessor(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided." });

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    req.user = decoded;
    if (req.user.role !== "professor")
      return res.status(403).json({ message: "Not a professor." });
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token." });
  }
}

function isAuth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided." });

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token." });
  }
}

module.exports = { generateToken, isStudent, isProfessor, isAuth };
