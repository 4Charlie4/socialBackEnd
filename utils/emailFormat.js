const validateEmail = (email) => {
  const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/
   
  return reg.text(email);
};

module.exports = validateEmail;
