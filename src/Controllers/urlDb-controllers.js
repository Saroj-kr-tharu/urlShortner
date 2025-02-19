

const urlDbService = require('../Services/UrlDb_Service');

const createControllers = (req, res) => {
    try {
        const data = req.body;
       
         
        const resdata = urlDbService.createService(data);
       

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

const getAllController = async (req, res) => {
    try {

        
        const response = await urlDbService.getAllService();
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

const getController = async (req, res) => {
    try {
        const id = req.query.id;


        const response = await urlDbService.getByIdService(id);
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

const deleteController = async (req, res) => {
    try {
        const id = req.query.id;

        const response = await urlDbService.deleteByIdService(id);
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


const updateController = async (req, res) => {
    try {
        console.log('update url ');
        
        const id = req?.query?.id;
        const data = req.body;

        console.log("controller ", id, data);

        const response = await urlDbService.updateByIdService(id, data);
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

const getAllByEmailController = async (req, res) => {
    try {
       
        
        
        const data = req?.body?.email;
        console.log('controller => ', data);

      

        const response = await urlDbService.getAllDataByEmaillService(data);
        return res.status(200).json({
            message: `Successfully get all data by Email`,
            success: true,
            err: {},
            data: response
        })

    } catch (error) {
        console.log("Something Went wrong in Controller part");

        return res.status(500).json({
            message: "Failed to get all  data by email ",
            success: false,
            err: error.message || error,
            data: {}
        });

    }
}



module.exports = {
    createControllers,
    getAllController,
    getController,
    deleteController,
    updateController,
    getAllByEmailController
}

