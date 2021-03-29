const ValidateInput = (validators, value) => {
  if (validators && validators.length) {
    for (let i of validators.length) {
      const error = validators[i].check(value, validators[i].message);
      if (error) {
        return error;
      }
    }
  }
  return false;
};

export default ValidateInput;
