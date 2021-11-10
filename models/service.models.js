const Service = require("../schema/service");

class ServiceModel {
  static async createService(postData) {
    try {
      const newService = new Service({ ...postData });
      await newService.save();

      return {
        code: 201,
        status: true,
        message: "Service Created Successfuly",
        data: newService,
      };
    } catch (error) {
      return {
        code: 500,
        message: "Internal server Error",
        status: false,
      };
    }
  }

  static async readService(readData) {
    try {
      const findService = await Service.findById(readData._id);
      console.log("qwerty " + findService);
      return {
        code: 200,
        status: true,
        message: "Service listed Successfully",
        data: findService,
      };
    } catch (error) {
      return {
        code: 500,
        message: "Internal server Error",
        status: false,
      };
    }
  }

  static async updateService(updateData) {
    try {
      const updateService = await Service.findByIdAndUpdate(
        updateData.service_id,
        { ...updateData }
      );
      return {
        code: 200,
        message: "Service Update Successfully",
        status: true,
        data: updateService,
      };
    } catch (error) {
      return {
        code: 500,
        message: "Internal server Error",
        status: false,
      };
    }
  }

  static async deleteService(deleteData) {
    try {
      const deleteService = await Service.findByIdAndDelete(deleteData._id);
      return {
        code: 200,
        message: "Service Deleted Successfully",
        status: true,
        data: deleteService,
      };
    } catch (error) {
      return {
        code: 500,
        message: "Internal server Error",
        status: false,
      };
    }
  }
}

module.exports = ServiceModel;
