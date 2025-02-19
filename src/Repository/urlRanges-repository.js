const { UrlRanges } = require("../models/index");

const CURDRepo = require('./CURD');

class UrlRangesRepo extends CURDRepo {
    constructor() {
        super(UrlRanges);
    }

}

const urlRangesRepo = new UrlRangesRepo();

module.exports = urlRangesRepo; 