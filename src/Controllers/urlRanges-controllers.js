

const urlRangesService = require('../Services/urlRanges_service');

const createRangesControllers = (req, res) => {
    try {
        const data = req.body;
        const resdata = urlRangesService.createService(data);
        console.log(data);

        return res.status(201).json({
            message: 'Successfully to write data in DB',
            success: true,
            data: resdata,
            err: {}
        });


    } catch (error) {
        console.log('Something went wrong in controller level (writeDB)');
        return res.status(500).json({
            message: 'Failed to write data in DB',
            success: false,
            data: {},
            err: {}
        });
    }
}

const getAllRangesController = async (req, res) => {
    try {

        
        const response = await urlRangesService.getAllService();
        return res.status(200).json({
            message: "Successfully Fetched all data",
            success: true,
            err: {},
            data: response
        })

    } catch (error) {
        console.log("Something Went wrong in Controller part");

        return res.status(500).json({
            message: "Failed to fetch data ",
            success: false,
            err: error.message,
            data: {}
        });

    }
}

const getRangesController = async (req, res) => {
    try {
        const id = req.query.id;


        const response = await urlRangesService.getByIdService(id);
        return res.status(200).json({
            message: "Successfully Fetched  data",
            success: true,
            err: {},
            data: response
        })

    } catch (error) {
        console.log("Something Went wrong in Controller part");

        return res.status(500).json({
            message: "Failed to fetch data ",
            success: false,
            err: error.message,
            data: {}
        });

    }
}

const deleteRangesController = async (req, res) => {
    try {
        const id = req.query.id;

        const response = await urlRangesService.deleteByIdService(id);
        return res.status(200).json({
            message: `Successfully delete  todo id ${id}`,
            success: true,
            err: {},
            data: response
        })

    } catch (error) {
        console.log("Something Went wrong in Controller part");

        return res.status(500).json({
            message: "Failed to fetch data ",
            success: false,
            err: error.message,
            data: {}
        });

    }
}


const updateRangesController = async (req, res) => {
    try {
        console.log('update url ');
        
        const id = req?.query?.id;
        const data = req.body;

        console.log("controller ", id, data);

        const response = await urlRangesService.updateByIdService(id, data);
        return res.status(200).json({
            message: `Successfully update  todo id ${id}`,
            success: true,
            err: {},
            data: response
        })

    } catch (error) {
        console.log("Something Went wrong in Controller part");

        return res.status(500).json({
            message: "Failed to update data ",
            success: false,
            err: error.message || error,
            data: {}
        });

    }
}



module.exports = {
    createRangesControllers,
    getAllRangesController,
    getRangesController,
    deleteRangesController,
    updateRangesController,

}

