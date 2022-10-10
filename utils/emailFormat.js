const validateEmail = (email) => {
  //Case sensitive use lowercase
  const reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  return reg.test(email);
};

module.exports = validateEmail;
