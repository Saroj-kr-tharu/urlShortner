const express = require("express");
const router = express.Router();

const {
    createControllers,
    getAllController,
    getController,
    deleteController,
    updateController,
    getAllByEmailController

} = require("../../Controllers/urlDb-controllers");

const {
    createRangesControllers,
    getAllRangesController,
    getRangesController,
    deleteRangesController,
    updateRangesController,

} = require("../../Controllers/urlRanges-controllers");


const {
    createShortUrlControllers,
    verifyShortUrlControllers
} = require('../../Controllers/urlShortner-controllers');

const { createValidator } = require("../../middlewares/urlShortnerValidtor");


// urlDbCrate
router.post('/createUrl', createControllers);
router.get('/Urls', getAllController);
router.get('/Url', getController);
router.delete('/delUrl', deleteController);
router.patch('/upUrl', updateController);

router.post('/Posts', getAllByEmailController);

// urlRanges
router.post('/createRanges', createRangesControllers);
router.get('/Ranges', getAllRangesController);
router.get('/Range', getRangesController);
router.delete('/delRanges', deleteRangesController);
router.patch('/upRanges', updateRangesController);




// createShortUrl 
// router.post('/create', createValidator, createShortUrlControllers);
router.post('/create',  createShortUrlControllers);
router.get('/:shortId', verifyShortUrlControllers);




module.exports = router;