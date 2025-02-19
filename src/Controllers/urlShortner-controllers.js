

const { ShortUrlGen, VerifyShortUrl, sendMessageToQueueService } = require('../Services/shortnerUrl-Service');


const createShortUrlControllers = async (req, res) => {
    try {
        const data = req?.body;

        const clientIp = req.headers['x-forwarded-for'];
        // console.log('Client IP:', clientIp);
        console.log('data:', data);
      
        
        
        const resdata = await ShortUrlGen(data);
        // console.log('resdata =>', resdata);

        return res.status(201).json({
            message: 'Successfully to write data in DB',
            success: true,
            data: resdata,
            err: {}
        });


    } catch (error) {
        console.log('Something went wrong in controller level (creating the short Url)');
        return res.status(500).json({
            message: 'Failed to create shortUrl ',
            success: false,
            data: {},
            err: error.message || error 
        });
    }
}


const verifyShortUrlControllers = async (req, res) => {
    try {

        const shortId = req.params.shortId;
        // console.log('short url from  => ',shortId);
        const data = await VerifyShortUrl(shortId);
        
        
        //  analytic value push to message Queue Before to redirect 
        if (data) {
           let result = {id:data.id, location:'Kohalpur' }
            sendMessageToQueueService(result);

        }

        res.redirect(data.originUrl);


    } catch (error) {
        console.log('Something went wrong in controller level (verifying the short Url)');
        return res.status(500).json({
            message: 'Invalid shortUrl  ',
            success: false,
            data: {},
            err: {}
        });
    }
}

module.exports = {
    createShortUrlControllers,
    verifyShortUrlControllers
}