import moment from "moment";
import bcrypt from "bcryptjs";
import dbQuery from "../db/dbQuery";
import jwt from "jsonwebtoken";
import {
  isValidEmail,
  validatePassword,
  isEmpty,
} from "../helpers/validations";

import { errorMessage, successMessage, status } from "../helpers/status";

const createUser = async (req, res) => {
  const { user_name, fname, lname, phone, email, password, isInstrutor } =
    req.body;
  console.log(req.body);
  const created_date = moment(new Date());
  const lastlogin_date = moment(new Date());

  //validations

  // if (user_name === ) {
  //   errorMessage.error = "This User already Exits";
  //   return res.status(status.error).send(errorMessage);
  // }
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
      bcrypt.hashSync(password, 8),
      created_date,
      lastlogin_date,
    ];

    results = await dbQuery.query(createInstructorsQuery, values);
    console.log(results); //this is an object
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
      bcrypt.hashSync(password, 8),
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
    console.log("success meafe", successMessage);
    return res.status(status.created).send(successMessage);
  } catch (error) {
    errorMessage.error =
      "There is some error in the registration process.Try Again Please";
    return res.status(status.error).send(errorMessage);
  }
};

const signin = async (req, res) => {
  // console.log(req.body);
  const { user_name, password, isInstrutor } = req.body;
  let retrived_user = "";
  if (isInstrutor === true) {
    const createInstructorQuery = `
    SELECT * FROM instructors WHERE user_name = $1
       
    `;
    let response = await dbQuery.query(createInstructorQuery, [user_name]);
    retrived_user = response.rows[0];
  } else if (isInstrutor === false) {
    const createUserQuery = `
    SELECT * FROM users WHERE user_name = $1   
    `;
    let response = await dbQuery.query(createUserQuery, [user_name]);
    retrived_user = response.rows[0];
  }

  try {
    if (!retrived_user) {
      errorMessage.error = "A user of this name dont exist..Register please";
      return res.status(status.error).send(errorMessage);
    }

    //match the password

    const isMatch = await bcrypt.compareSync(password, retrived_user.password);
    if (!isMatch) {
      errorMessage.error =
        "This passwords dont match any of the passwords in our system..Reset Password";
      return res.status(status.error).send(errorMessage);
    }

    isInstrutor ? true : false;
    const payload = {
      persistent_user: retrived_user,
      isInstrutorStatus: isInstrutor,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "5 days",
    });
    //save the token in the cookie as well
    res.cookie("token", token, { expiresIn: "1d" });
    successMessage.data = retrived_user;
    successMessage.data.user_status = isInstrutor;
    successMessage.data.token = token;
    console.log(successMessage);
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
const accessedauth = async (req, res) => {
  console.log(req);
  let response = "";
  let authenticatedUser = "";
  if (req.user_status === true) {
    const createInstructorQuery = `
    SELECT * FROM instructors WHERE user_name = $1
    `;

    response = await dbQuery.query(createInstructorQuery, [req.user.user_name]);
    authenticatedUser = response.rows[0];
  } else if (req.user_status === false) {
    const createUserQuery = `
      SELECT * FROM users WHERE user_name = $1
      `;
    response = await dbQuery.query(createUserQuery, [req.user.user_name]);
    authenticatedUser = response.rows[0];
  }
  try {
    successMessage.authenticatedUser = authenticatedUser;
    return res.status(status.created).send(successMessage);
  } catch (error) {
    errorMessage.error = "We are afraid you are not recognized in our sytem";
    return res.status(status.error).send(errorMessage);
  }
};

const fetchUsers = async (req, res) => {
  try {
    const createUQuery = `
    SELECT * FROM users 
    `;
    const response = await dbQuery.query(createUQuery);
    const all_users = response.rows;

    successMessage.allusers = all_users;

    return res.status(status.success).send(successMessage);
  } catch (error) {
    errorMessage.error = "We cant fetch your profile now";
    return res.status(status.error).send(errorMessage);
  }
};

const fetchInstructors = async (req, res) => {
  try {
    const createIQuery = `
    SELECT * FROM instructors    
    `;
    const response = await dbQuery.query(createIQuery);
    const all_Instructors = response.rows;
    successMessage.all_Instructors = all_Instructors;

    return res.status(status.success).send(successMessage);
  } catch (error) {
    errorMessage.error = "We cant fetch your profile now";
    return res.status(status.error).send(errorMessage);
  }
};

const fetchuserprofile = async (req, res) => {
  try {
  } catch (error) {
    errorMessage.error = "We cant fetch your profile now";
    return res.status(status.error).send(errorMessage);
  }
};

const updateuserprofile = async (req, res) => {
  try {
  } catch (error) {
    errorMessage.error = "We are uanble to update your profile";
    return res.status(status.error).send(errorMessage);
  }
};

const deleteuserprofile = async (req, res) => {
  try {
  } catch (error) {
    errorMessage.error = "Unable to delete..Are you sure";
    return res.status(status.error).send(errorMessage);
  }
};

const fetchinstructorprofile = async (req, res) => {
  try {
  } catch (error) {
    errorMessage.error = "We cant fetch your profile now";
    return res.status(status.error).send(errorMessage);
  }
};

const updateinstructorprofile = async (req, res) => {
  try {
  } catch (error) {
    errorMessage.error = "We are uanble to update your profile";
    return res.status(status.error).send(errorMessage);
  }
};

const deleteinstructorprofile = async (req, res) => {
  try {
  } catch (error) {
    errorMessage.error = "Unable to delete..Are you sure";
    return res.status(status.error).send(errorMessage);
  }
};

export {
  createUser,
  signin,
  accessedauth,
  Signout,
  fetchInstructors,
  fetchUsers,
  fetchuserprofile,
  updateuserprofile,
  deleteuserprofile,
  fetchinstructorprofile,
  updateinstructorprofile,
  deleteinstructorprofile,
};

//https://itnext.io/building-restful-api-with-node-js-express-js-and-postgresql-the-right-way-b2e718ad1c66?gi=41559beaa9dd
