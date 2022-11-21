const cron = require('node-cron')
const { resolve } = require('path')
const { v4: uuidv4 } = require('uuid');

module.exports = {
    initCrons: (config) => {
        Object.keys(config).forEach(key => {
            const job = config[key]
            if (cron.validate(job.frequency)) {
                cron.schedule(job.frequency, () => {
                    job.id = uuidv4();
                    const handler = require(resolve(job.handler))
                    handler();
                    console.log("the job \"" + key + "\" with id \"" + job.id + "\" is executed at: " + "\"" + new Date().timeNow() + "\"");
                })
            }
        })
    }
}