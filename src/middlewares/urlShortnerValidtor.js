
const createValidator = (req, res, next) => {
  if (!req?.body?.Url ) {
    return res.status(400).json({
      message: "Url or Email Parameter is Missing",
      success: false,
      data: {},
      err: "Url or Email Parameter is Missing",
    });
  }

  next();
};

module.exports = {
  createValidator
};
