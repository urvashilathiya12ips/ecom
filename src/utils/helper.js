import { Slide } from "@mui/material";

const isValidEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};
const isValidPassword = (password) => {
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

  if (password.length < 10) {
    return false;
  }
  if (!uppercaseRegex.test(password)) {
    return false;
  }

  if (!numberRegex.test(password)) {
    return false;
  }
  if (!specialCharRegex.test(password)) {
    return false;
  }
  if (!lowercaseRegex.test(password)) {
    return false;
  }
  return true;
};

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

export { isValidEmail, isValidPassword, TransitionRight };
