export function validateFormDetails(formData) {
  const { email, password, fullName } = formData;
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if (!isValidEmail) return "Please Enter Valid Email";
  if (!isValidPassword) return "Please Enter Valid Password";

  return null;
}
