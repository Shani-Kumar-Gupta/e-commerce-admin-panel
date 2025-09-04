import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "ecom_xyz#@_admin_%$#@_panel";

const authMiddleware = async (req, res, next) => {
  try {
    const token = await req.headers.authorization;
    if(!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
}

export default authMiddleware;