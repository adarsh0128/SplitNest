const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName) {
    throw new Error("First Name is required.");
  } else if (!lastName) {
    throw new Error("Last Name is required.");
  } else if (!emailId) {
    throw new Error("Email ID is a required field");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Please enter a valid email address");
  } else if (!password) {
    throw new Error("Password is a required field");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error(
      "Password is too weak. It must be at least 8 characters long and include a mix of uppercase letters, lowercase letters, numbers, and special characters."
    );
  }
};

const validateLoginData = (req) => {
  const { emailId, password } = req.body;
  if (!emailId) {
    throw new Error("Email ID is a required field");
  } else if (!password) {
    throw new Error("Password is a required field");
  }
};

module.exports = {
  validateSignUpData,
  validateLoginData,
};
