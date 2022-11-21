module.exports = {
    //Example for a job that's scheduled frequently
    receiveMoney: {
        frequency: "*/2 * * * * *",
        handler: "handlers/receiveMoney",
    },
    //Example for a job that's scheduled for single run at exact time
    sendMoney: {
        frequency: "30 3 2 20 11 5",
        handler: "handlers/sendMoney"
    }
}