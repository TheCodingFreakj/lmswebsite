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
  const { token } = req.headers;
  if (!token) {
    errorMessage.error = "Token not provided";
    return res.status(status.bad).send(errorMessage);
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      email: decoded.email,
      user_id: decoded.user_id,
      isInstrutor: decoded.isInstrutor,
      fname: decoded.first_name,
      lname: decoded.last_name,
      user_name: decoded.user_name,
      phone: decoded.phone,
    };
    next();
  } catch (error) {
    errorMessage.error = "Authentication Failed";
    return res.status(status.unauthorized).send(errorMessage);
  }
};

export default verifyToken;
