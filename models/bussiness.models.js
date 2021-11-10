const Bussiness = require("../schema/bussiness");

class BussinessModel {
  static async createBussiness(postData) {
    try {
      const newBussiness = new Bussiness({ ...postData });
      await newBussiness.save();

      return {
        code: 201,
        status: true,
        message: "Bussiness Created Successfuly",
        data: newBussiness,
      };
    } catch (error) {
      return {
        code: 500,
        message: "Internal server Error",
        status: false,
      };
    }
  }

  static async readBussiness(getData) {
    try {
      const findBussiness = await Bussiness.findById(getData._id);
      return {
        code: 200,
        status: true,
        message: "Bussiness listed Successfully",
        data: findBussiness,
      };
    } catch (error) {
      return {
        code: 500,
        message: "Internal server Error",
        status: false,
      };
    }
  }

  static async updateBussiness(putData) {
    try {
      const updateBussiness = await Bussiness.findByIdAndUpdate(
        putData.bussiness_id,
        {
          ...putData,
        }
      );
      console.log(updateBussiness + " getting");
      return {
        code: 200,
        message: "Bussiness Update Successfully",
        status: true,
        data: updateBussiness,
      };
    } catch (error) {
      return {
        code: 500,
        message: "Internal server Error",
        status: false,
      };
    }
  }

  static async deleteBussiness(deleteData) {
    try {
      const deleteBussiness = await Bussiness.findByIdAndDelete(deleteData._id);
      // const deleteBussiness = await Bussiness.findByIdAndDelete(
      // deleteData.business_name
      // );
      console.log(deleteData);
      return {
        code: 200,
        message: "Bussiness Delete Successfully",
        status: true,
        date: deleteBussiness,
      };
    } catch (error) {
      return {
        code: 500,
        message: "Internal server Error",
        status: false,
      };
    }
  }

  // static async agg_lookup() {
  //   try {
  //     var my_data = await Bussiness.aggregate([
  //       {
  //         $match: {},
  //       },
  //       {
  //         $lookup: {
  //           from: "bussinesses",
  //           localField: "_id",
  //           foreignField: "_id",
  //           as: "demo",
  //         },
  //       },
  //       {
  //         $project
  //       }
  //     ]);

  //     return {
  //       code: 200,
  //       message: "Bussiness Delete Successfully",
  //       status: true,
  //       date: my_data,
  //     };
  //   } catch (error) {
  //     return {
  //       code: 500,
  //       message: "Internal server Error",
  //       status: false,
  //     };
  //   }
  // }
}

module.exports = BussinessModel;
