const config = require("./config")
const scheduler = require("./scheduler")
require("./config/date")

scheduler.initCrons(config)