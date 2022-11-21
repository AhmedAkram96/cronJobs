module.exports.config = ((date) => {
    return {
        testFrequentJob: {
            frequency: "* * * * * *",
            handler: "test/handlers/testFrequentJob",
        },
        testOneTimeJob: {
            frequency: `${date.getMinutes()} ${date.getHours()} ${date.getDate()} ${date.getMonth()} *`,
            handler: "test/handlers/testOneTimeJob",
        },
    }
})
