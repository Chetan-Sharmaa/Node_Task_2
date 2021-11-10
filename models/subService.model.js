const SubService = require("../schema/subService");

class SubServiceModel {
  static async createSubService(postData) {
    try {
      const newSubService = new SubService({ ...postData });
      await newSubService.save();
      console.log("qwertyuiop123654789");
      return {
        code: 201,
        message: "Sub-Service Created Successfully",
        status: true,
        data: newSubService,
      };
    } catch (error) {
      console.log("error ---" + error);
      return {
        code: 500,
        message: "Internal server Error",
        status: false,
      };
    }
  }

  static async readSubService(readData) {
    try {
      const findSubService = await SubService.findById(readData._id);
      return {
        code: 200,
        message: "Sub-Service found",
        status: true,
        data: findSubService,
      };
    } catch (error) {
      return {
        code: 500,
        message: "Internal server Error",
        status: false,
      };
    }
  }

  static async updateSubService(updateData) {
    try {
      const updateSubService = await SubService.findByIdAndUpdate(
        updateData.sub_id,
        { ...updateData }
      );
      return {
        code: 200,
        message: "Sub-Service update successfully",
        status: true,
        data: updateSubService,
      };
    } catch (error) {
      return {
        code: 500,
        message: "Internal server Error",
        status: false,
      };
    }
  }

  static async deleteSubService(deleteData) {
    try {
      const removeSubService = await SubService.findByIdAndDelete(
        deleteData._id
      );
      return {
        code: 200,
        message: "Sub-Service removed successfully",
        status: true,
        data: removeSubService,
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

module.exports = SubServiceModel;
