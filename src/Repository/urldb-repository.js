const { UrlDb } = require("../models/index");

const CURDRepo = require('./CURD');

class UrlDbRepo extends CURDRepo {
  constructor() {
    super(UrlDb);
  }

  async findByShortUrlRepo(shortUrl) {
    try {

      const res = await UrlDb.findOne({ where: { shortUrl } });



      let data = {
        id: res.dataValues.id,
        originUrl: res.dataValues.originalUrl
      };

    
      

      return data;

    } catch (error) {
      console.log("Something went wrong in service layer (getAllService) ");
      throw error;
    }
  }

  async getAllByEmail(email) {
    try {

      const res = await UrlDb.findAll({ where: { email } });


     return res;

    } catch (error) {
      console.log("Something went wrong in service layer (getAllByEmail) ");
      throw error;
    }
  }

}

const urlDbRepo = new UrlDbRepo();

module.exports = urlDbRepo; 