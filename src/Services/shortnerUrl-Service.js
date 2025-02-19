
const { RedisClient } = require("../config/RedisClient");

const NumberToString = require('../utlis/BinaryToNumberAndString');
const encodeData = require('../utlis/EncodeData');
const RandomGenerator = require('../utlis/RandomRangeSelectors');
const urlRangesService = require("./urlRanges_service");
const urlDbService = require('./UrlDb_Service');

const { REMINDER_BINDING_KEY } = require('../config/serverConfig');

const { createChannel, publishMessage } = require('../utlis/messageQueue');


const ShortUrlGen = async (UserData) => {

    try {

        // 1. generate the section 
        let section = RandomGenerator(1, 4);
        // console.log('section => ', section);

        // 2. take a current number with section id 
        let data = await urlRangesService.getByIdService(section);
        const currentNumber = data.current;
        // console.log('current number => ', currentNumber);

        // 3. update a current number of  section id 
        await urlRangesService.updateByIdService(section, { current: currentNumber + 1 });

        // 4. encode the a cuurent number  and generate short url 

        let shortUrl = NumberToString(currentNumber, encodeData);
        // console.log('shortUrl => ', shortUrl);


        // 5. short url  save to urlDB
        console.log('user data in shortner url service => ', UserData);

        data = {
            email: UserData.email || null,
            originalUrl: UserData.Url,
            shortUrl
        };

        const res = await urlDbService.createService(data);


        // // 5.1 store in redis 

        // await RedisClient
        //     .multi()
        //     .set(cacheKey, JSON.stringify(
        //         {
        //             id: res.dataValues.id,
        //             originUrl
        //         }
        //     ))
        //     .expire(cacheKey, 3600)
        //     .exec();



        // 6. send back response
        shortUrl = `http://localhost:9000/urlshortner/${shortUrl}`;
        return shortUrl;


    } catch (error) {
        console.log(
            "Something went wrong in service layer (Create short url )"
        );
        throw error;
    }



}

const VerifyShortUrl = async (shortUrl) => {

    try {
        const cacheKey = `ShortUrl:${shortUrl}`;

        // 1. check in cache if available then return 
        let cacheValue = await RedisClient.get(cacheKey);


        if (cacheValue) {
            cacheValue = JSON.parse(cacheValue);
            // console.log('cache value => ', cacheValue);
            return cacheValue;

        };

        // 2. check database
        const data = await urlDbService.findByShortUrlService(shortUrl);

        // console.log(' veiryf => ', data);
        if (!data) return null;

        // 3. Found in db .. update in cache and return 
        await RedisClient
            .multi()
            .set(cacheKey, JSON.stringify(data))
            .expire(cacheKey, 3600)
            .exec();


        // SET shortUrl:abc123 "https://www.original-long-url.com"

        return data;
    } catch (error) {
        console.log(
            "Something went wrong in service layer (verify short url )"
        );
        throw error;
    }


}


const sendMessageToQueueService = async (data) => {
    try {
        const channel = await createChannel();

        await publishMessage(channel, REMINDER_BINDING_KEY, JSON.stringify(data));


        return true;


    } catch (error) {
        console.log(
            "Something went wrong in service layer (publish Message to Queue)"
        );
        throw error;
    }
}




module.exports = { ShortUrlGen, VerifyShortUrl, sendMessageToQueueService };