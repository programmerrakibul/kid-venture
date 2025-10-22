const authErrorMessages = {
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/user-not-found": "No account found with this email address.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/invalid-credential":
    "Invalid login credentials. Please check your email and password.",
  "auth/email-already-in-use":
    "This email is already registered. Please use a different email or try logging in.",
  "auth/missing-email":
    "Please enter your email address to reset your password.",
  "auth/network-request-failed":
    "Network error. Please check your internet connection and try again.",
  "auth/too-many-requests": "Too many failed attempts. Please try again later.",
  default: "An unexpected error occurred. Please try again.",
};

const getAuthErrorMessage = (errorCode) => {
  return authErrorMessages[errorCode] || authErrorMessages.default;
};

export default getAuthErrorMessage;
