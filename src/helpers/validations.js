
/**
 * isValidEmail helper method
 * @param {string} email
 * @returns {Boolean} True or False
 */
const isValidEmail = (email) => {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
};

/**
 * validatePassword helper method
 * @param {string} password
 * @returns {Boolean} True or False
 */
const validatePassword = (password) => {
  if (password.length <= 5 || password === "") {
    return false;
  }
  return true;
};
/**
 * isEmpty helper method
 * @param {string, integer} input
 * @returns {Boolean} True or False
 */
const isEmpty = (input) => {
  if (input === undefined || input === "") {
    return true;
  }
  if (input.replace(/\s/g, "").length) {
    return false;
  }
  return true;
};

/**
 * empty helper method
 * @param {string, integer} input
 * @returns {Boolean} True or False
 */
const empty = (input) => {
  if (input === undefined || input === "") {
    return true;
  }
};

const generateUserToken = (
  email,
  fname,
  lname,
  user_name,
  phone,
  isInstrutor
) => {
  const newToken = jwt.sign(
    {
      email,
      fname,
      lname,
      user_name,
      phone,
      isInstrutor,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
  console.log(newToken);
  // return newToken;
};

export { isValidEmail, validatePassword, isEmpty, empty, generateUserToken };
