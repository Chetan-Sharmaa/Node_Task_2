const ServiceModel = require("../models/service.models");

class ServiceController {
  static createService(req, res) {
    const postData = req.body;

    ServiceModel.createService(postData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }

  static readService(req, res) {
    const readData = req.query;

    ServiceModel.readService(readData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }

  static updateService(req, res) {
    const updateData = req.body;

    ServiceModel.updateService(updateData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }

  static deleteService(req, res) {
    const deleteData = req.query;

    ServiceModel.deleteService(deleteData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
}

module.exports = ServiceController;
