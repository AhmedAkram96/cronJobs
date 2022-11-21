const cron = require('node-cron')
const configTest = require("./configTest")
const scheduler = require("../scheduler")
require("../config/date")

jest.mock('node-cron', () => {
    return {
        schedule: jest.fn(),
        validate: jest.fn(),
    };
});

describe('Test cases for cron jobs', () => {
    it('testing jobs inside the configTest file', () => {
        const logSpy = jest.spyOn(console, 'log');
        cron.schedule.mockImplementation(async (frequency, callback) => await callback());
        cron.validate.mockImplementation(async () => true);
        scheduler.initCrons(configTest)
        expect(logSpy).toBeCalledWith('Testing a job for telda task');
        expect(cron.schedule).toBeCalledWith('* * * * * *', expect.any(Function));
    });
});