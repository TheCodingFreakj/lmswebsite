import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { errorMessage, status } from "../helpers/status";

dotenv.config();

/**
 * Verify Token
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {object|void} response object
 */

//put this as middleware when you want user to visit that route as authorized
//this middleware give the decoded user
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    errorMessage.error = "Token not provided";
    return res.status(status.bad).send(errorMessage);
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.persistent_user;
    req.user_status = decoded.isInstrutorStatus;
    next();
  } catch (error) {
    errorMessage.error = "Authentication Failed";
    return res.status(status.unauthorized).send(errorMessage);
  }
};

export default verifyToken;
