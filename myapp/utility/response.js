exports.successRes = function (message, data, status_code) {
  let obj = {
    status_code: status_code,
    error: false,
    reason: message,
    data: data,
    status: "success",
  };
  return obj;
};

exports.faliureRes = function (message) {
  let obj = {
    status_code: 400,
    error: true,
    data: {},
    reason: message,
    status: "faliure",
  };
  return obj;
};
