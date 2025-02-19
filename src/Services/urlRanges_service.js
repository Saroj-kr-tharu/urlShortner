

const MainService = require('./mainService');
const urlRangesRepo = require('../Repository/urlRanges-repository');
 

class UrlRangesService extends MainService {
    constructor() {
        super(urlRangesRepo)
    }
}


const urlRangesService = new UrlRangesService();

module.exports = urlRangesService;  