

const MainService = require('./mainService');
const urlDbRepo = require('../Repository/urldb-repository');
 

class UrlDbService extends MainService {
    constructor() {
        super(urlDbRepo)
    }

    async findByShortUrlService(shortUrl) {
        try {
      
            const res = await urlDbRepo.findByShortUrlRepo(shortUrl);
            
            
            return res;
      
          } catch (error) {
            console.log("Something went wrong in service layer (getAllService) ");
            console.log(error);
            
            throw error;
          }
    }

    async getAllDataByEmaillService (email)  {
      try {
        
        const res = await urlDbRepo.getAllByEmail(email);
        return res;
  
      } catch (error) {
          console.log(
              "Something went wrong in service layer (geting all the data by email)"
          );
          throw error;
      }
  }

}


const urlDbService = new UrlDbService();

module.exports = urlDbService; 