const emailService = require("../services/emailService");

const sendNotification = (userEmail, message) => {
  emailService(userEmail, message);
};

module.exports = sendNotification;