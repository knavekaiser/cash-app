const baseApiUrl = "";

const endpoints = {
  baseApiUrl,
  signUp: `${baseApiUrl}/api/users/signup`,
  signIn: `${baseApiUrl}/api/users/signin`,
  profile: `${baseApiUrl}/api/users/profile`,

  invoices: `${baseApiUrl}/api/invoices`,
  purchases: `${baseApiUrl}/api/purchases`,
  receipts: `${baseApiUrl}/api/receipts`,

  userConfig: `${baseApiUrl}/api/user-config`,
  logout: `${baseApiUrl}/api/users/logout`,
  forgotPassword: `${baseApiUrl}/api/users/forgot-password`,
  resetPassword: `${baseApiUrl}/api/users/reset-password`,
};

export default endpoints;
