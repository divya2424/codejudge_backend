const messages = require("../utility/message");
const Response = require("../utility/response");
const Lead = require("../models/leads");
var mongoose = require("mongoose");

exports.createLead = function (req, res) {
  let data = req.body;
  if (!data.mobile || !data.email) {
    return res.json(Response.faliureRes(messages.missing));
  }
  let lead = new Lead({
    first_name: data.first_name,
    last_name: data.last_name,
    mobile: data.mobile,
    email: data.email,
    location_type: data.location_type,
    location_string: data.location_string,
    status: "Created",
    updated_at: new Date(),
  });

  Lead.find({ mobile: data.mobile, email: data.email }, function (err, data) {
    if (err) {
      console.log("err", err);
      return res.json(Response.faliureRes(messages.error));
    } else if ((data || []).length === 0) {
      lead.save(function (leadErr, response) {
        if (leadErr) {
          //   console.log("err", leadErr.errmsg);
          return res.json(Response.faliureRes(messages.error));
        } else {
          return res.json(Response.successRes(messages.save, response, 201));
        }
      });
    } else {
      return res.json(Response.successRes(messages.existingData, data, 201));
    }
  });
};

exports.fetchLead = function (req, res) {
  let id = req.params.id || "";
  if (!id) {
    return res.json(Response.faliureRes(messages.missing));
  }
  Lead.find({ _id: mongoose.Types.ObjectId(id) }, function (err, data) {
    if (err) {
      console.log("err", err);
      return res.json(Response.faliureRes(messages.error));
    } else if ((data || []).length === 0) {
      return res.json(Response.faliureRes(messages.noData));
    } else {
      console.log("data", data);
      return res.json(Response.successRes(messages.success, data, 200));
    }
  });
};

exports.updateLead = function (req, res) {};
