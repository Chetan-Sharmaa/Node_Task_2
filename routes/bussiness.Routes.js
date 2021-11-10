const bussinessController = require("../controller/bussiness.controller");
const ServiceController = require("../controller/service.controller");
const SubServiceController = require("../controller/subService.controller");

module.exports = (app) => {
  app.post("/create-bussiness", bussinessController.createBussiness);
  app.get("/read-bussiness", bussinessController.readBussiness);
  app.put("/update-bussiness", bussinessController.updateBussiness);
  app.delete("/delete-bussiness", bussinessController.deleteBussiness);
  // app.get("/agg_lookup", bussinessController.agg_lookup);
  app.post("/create-service", ServiceController.createService);
  app.get("/read-service", ServiceController.readService);
  app.put("/update-service", ServiceController.updateService);
  app.delete("/delete-service", ServiceController.deleteService);

  app.post("/create-Sub-Services", SubServiceController.createSubService);
  app.get("/read-Sub-Services", SubServiceController.readSubService);
  app.put("/update-Sub-Services", SubServiceController.updateSubService);
  app.delete("/delete-Sub-Services", SubServiceController.deleteSubService);
};
