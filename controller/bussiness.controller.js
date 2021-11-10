const BussinessModel = require("../models/bussiness.models");

class BussinessController {
  static createBussiness(req, res) {
    const postData = req.body;

    BussinessModel.createBussiness(postData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }

  static readBussiness(req, res) {
    const getData = req.query;

    BussinessModel.readBussiness(getData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }

  static updateBussiness(req, res) {
    const putData = req.body;

    console.log(putData);

    BussinessModel.updateBussiness(putData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }

  static deleteBussiness(req, res) {
    const deleteData = req.query;
    // const deleteData = req.body;

    BussinessModel.deleteBussiness(deleteData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }

  // static agg_lookup(req, res) {
  //   BussinessModel.agg_lookup()
  //     .then((result) => res.status(result.code).json(result))
  //     .catch((err) => res.status(err.code).json(err));
  // }
}
module.exports = BussinessController;
