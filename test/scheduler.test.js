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
    it('testing frequent and one time jobs', () => {
        const logSpy = jest.spyOn(console, 'log');
        cron.schedule.mockImplementation(async (frequency, callback) => await callback());
        cron.validate.mockImplementation(async () => true);
        const date = new Date();
        scheduler.initCrons(configTest.config(date));
        expect(logSpy).toBeCalledWith('Testing one time job for telda task');
        expect(logSpy).toBeCalledWith('Testing a frequent job for telda task');
        expect(cron.schedule).toBeCalledWith('* * * * * *', expect.any(Function));
        expect(cron.schedule).toBeCalledWith(`${date.getMinutes()} ${date.getHours()} ${date.getDate()} ${date.getMonth()} *`, expect.any(Function));
    });
});


