export const checkValidDate = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
      password
    );

  // const isFullNameValid = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/.test(fullName);

  if (!isEmailValid) return "Email is not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  // if (!isFullNameValid) return "FullName is not Valid";

  return null;
};
