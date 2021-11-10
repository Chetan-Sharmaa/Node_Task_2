const SubServiceModel = require("../models/subService.model");

class SubServiceController {
  static createSubService(req, res) {
    const postData = req.body;

    SubServiceModel.createSubService(postData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }

  static readSubService(req, res) {
    const readData = req.query;

    SubServiceModel.readSubService(readData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }

  static updateSubService(req, res) {
    const updateData = req.body;

    SubServiceModel.updateSubService(updateData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }

  static deleteSubService(req, res) {
    const deleteData = req.query;

    SubServiceModel.deleteSubService(deleteData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }
}

module.exports = SubServiceController;
