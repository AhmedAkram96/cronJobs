# cronJobs-Scheduler

In this repo, we are creating a tool through which a developer can add a job wrapped inside a function. along with it's detemined date to be executed at. User can specify frequency to which their job execution can follow.

## User Manual

1. Inside the `handlers` folder, users should be creating a new file for their job wrapped inside a function.
    
      **filename** : `ReadmeExample.js`
      
      **content** : ```
                  module.exports = () => {
                  console.log("This is the job logic to be executed")
                  }
              ```
2. Users then should open `config` folder, at which they can append their created job along with it's exact date or frequency to be executed at.

    ```
    module.exports = {
        ReadmeExample: {
            frequency: "* * * * * *",
            handler: "handlers/ReadmeExample",
        }
    }
    ```
3. Frequency specs:
    1. **" * * * * * * "** : Each astric means: second, minute, hour, day of month, month, day of week, in the same order.
    3. **"*/2"** : means every 2 seconds, minutes,hours..etc according to it's place.
    4. If you want to have a single run for the job, you have to specify values at the 6 entries (or 5 without seconds) exactly.
        
        for example : **"3 2 20 11 5"**
        
4. Run `npm install`

5. Run `npm start`, and watch the logs inside the terminal.


## Test

There is an example test case to show one use case: Run `npm test`



## Future Improvements

Our app can be using express server in the next phase, through which we can expose an endpoint that accepts a **job** and **frequency** and schedule them inside our scheduler. In that case we might as well think of a storage for the jobs to be consumed from by the scheduler.
