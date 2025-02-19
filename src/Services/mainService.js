const { RedisClient } = require('../config/RedisClient');
class MainService {

  constructor(CurdRepo) {
    this.CurdRepo = CurdRepo;
  }


  async createService(data) {
    try {
      // console.log('data => before server to server => ', data);

      const res = this.CurdRepo.create(data);
      return res;
    } catch (error) {
      console.log("Something went wrong in service layer (writeDBService)");
      console.log(error.message || error );
      
      throw error;

    }
  }

  async getAllService() {
    try {

      const res = await this.CurdRepo.getAll();


      return res;

    } catch (error) {
      console.log("Something went wrong in service layer (getAllService) ");
      throw error;
    }
  }

  async getByIdService(data) {
    try {

      const res = await this.CurdRepo.getById(data);
      return res;

    } catch (error) {
      console.log("Something went wrong in service layer (getByIdService) ");
      throw error;

    }
  }

  async deleteByIdService(data) {
    try {

      const res = await this.CurdRepo.delete(data);


      if (res) { await RedisClient.del(`ShortUrl:${res.dataValues.shortUrl}`) }
      return res;

    } catch (error) {
      console.log("Something went wrong in service layer (deleteByIdService) ");
      throw error;

    }
  }

  async updateByIdService(id, data) {
    try {
      const res = await this.CurdRepo.update(id, data);
      return res;

    } catch (error) {
      console.log("Something went wrong in service layer (updateByIdService) ");
      throw error;

    }
  }

}






module.exports = MainService; 