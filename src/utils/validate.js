export const checkValidData = (email, password, fName) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  const isFullNameValid = /^[a-zA-ZÀ-ÿ]{2,}(?: [a-zA-ZÀ-ÿ]+)+$/.test(fName);

  if (!isEmailValid) return "Email id is not valid";
  if (!isPasswordValid) return "Password id is not valid";
  if (!isFullNameValid) return "Full name is not valid";

  return null;
};
