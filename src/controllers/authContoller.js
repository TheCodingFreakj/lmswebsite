import moment from "moment";
import bcrypt from "bcrypt";
import dbQuery from "../db/dbQuery";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import {
  comparePassword,
  isValidEmail,
  validatePassword,
  isEmpty,
  generateUserToken,
} from "../helpers/validations";

import { errorMessage, successMessage, status } from "../helpers/status";
const createUser = async (req, res) => {
  const { user_name, fname, lname, phone, email, password, isInstrutor } =
    req.body;
  const created_date = moment(new Date());
  const lastlogin_date = moment(new Date());

  //validations
  if (
    isEmpty(email) ||
    isEmpty(fname) ||
    isEmpty(lname) ||
    isEmpty(phone) ||
    isEmpty(password)
  ) {
    errorMessage.error =
      "Email, password, first name and last name field cannot be empty";
    return res.status(status.bad).send(errorMessage);
  }
  if (!isValidEmail(email)) {
    errorMessage.error = "Please enter a valid Email";
    return res.status(status.bad).send(errorMessage);
  }
  if (!validatePassword(password)) {
    errorMessage.error = "Password must be more than five(5) characters";
    return res.status(status.bad).send(errorMessage);
  }

  let results = "";
  if (isInstrutor === true) {
    const createInstructorsQuery = `
    INSERT INTO instructors( user_name,phone,fname,lname,email,password,created_date,lastlogin_date)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        returning *
    `;

    const values = [
      user_name,
      phone,
      fname,
      lname,
      email,
      password,
      created_date,
      lastlogin_date,
    ];

    results = await dbQuery.query(createInstructorsQuery, values);
    // console.log(results); //this is an object
  } else if (isInstrutor === false) {
    const createUserQuery = `
    INSERT INTO users( user_name,phone,fname,lname,email,password,created_date,lastlogin_date)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        returning *
    `;

    const values = [
      user_name,
      phone,
      fname,
      lname,
      email,
      password,
      created_date,
      lastlogin_date,
    ];

    results = await dbQuery.query(createUserQuery, values);
    // console.log(results); //this is an object
  }

  try {
    const response = results.rows[0];
    const salt = await bcrypt.genSalt(10);
    response.password = await bcrypt.hash(password, salt);

    //the object has array fields which has array of object which are the values we insert
    //this object has row count and
    //rows which is an array of objects these objects are result of the query

    /**********Generate a tokem  */

    const payload = {
      user: {
        user_name: user_name, //this is the user we just saved
      },
    };
    const newtoken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    successMessage.data = response;
    successMessage.data.token = newtoken;
    return res.status(status.created).send(successMessage);
  } catch (error) {
    errorMessage.error =
      "There is some error in the registration process.Try Again Please";
    return res.status(status.error).send(errorMessage);
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user_name = await User.findOne({ user_name });
    if (!user_name) {
      errorMessage.error = "A user of this name dont exist..Register please";
      return res.status(status.error).send(errorMessage);
    }

    //match the password
    const isMatch = await bcrypt.compare(password, user_name.password);

    if (!isMatch) {
      errorMessage.error =
        "This passwords dont match any of the passwords in our system..Reset Password";
      return res.status(status.error).send(errorMessage);
    }

    const payload = {
      user_name: {
        user_name: user_name.email,
        user_name: user_name.user_name,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "5 days",
    });
    //save the token in the cookie as well
    res.cookie("token", token, { expiresIn: "1d" });
    successMessage.data = user_name;
    successMessage.data.token = token;
    return res.status(status.created).send(successMessage);
  } catch (error) {
    errorMessage.error =
      "There is some error in the login process.Make Sure your credentials are correct";
    return res.status(status.error).send(errorMessage);
  }
};

const Signout = async (req, res) => {
  //whhile signing out clear the cookie
  res.clearCookie("token");

  return res.status(status.success).send(successMessage);
};
const accessedauth = async (req, res) => {};
export { createUser, signin, accessedauth, Signout };

//https://itnext.io/building-restful-api-with-node-js-express-js-and-postgresql-the-right-way-b2e718ad1c66?gi=41559beaa9dd
