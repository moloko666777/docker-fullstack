require('dotenv').config()

import redis from 'redis';
import bluebird  from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

let client = redis.createClient(process.env.REDIS_CONTAINER_PORT, process.env.REDIS_HOST);

client.on('error', function (err) {
    console.log('Can not connect redis - ' + err);
});


export { client }