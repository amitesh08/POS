const config = require("../config/config");

const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    status: statusCode,
    message: err.message,
    errorStack: config.nodeENV === "devlopment" ? err.stack : "", //to show error only in development not in production.
  });
};

module.exports = globalErrorHandler;
