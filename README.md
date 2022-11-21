# cronJobs-Scheduler

In this repo, we are creating a tool through which a developer can add a job wrapped inside a function. along with it's detemined date to be executed at. User can specify frequency to which their job execution can follow.

## Run the app with Docker:

1. Run `docker build -t jobScheduler .` 
2. Run `docker run jobScheduler`

OR, We have added github action workflow in this repo to build and push the docker image to dockerhub:

1. Run `docker run 3715016/cron-job-scheduler:latest`


## User Manual to add jobs

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
        
4. Build and Run the docker image again.

OR

5. If you have node on your local machine, Run `npm install` then `npm start`, and watch the logs inside the terminal.


## Test

Run `npm test`

There is an example test case for 2 usecases: 

    - single run in exact time
    - frequent run


## Future Improvements

1. We should be using a storage (in memory or DB) to keep track of the state of each job in case of app crashes so none of the jobs would be repeated/lost/crashed. We could implement this with a FIFO queue data structure (redis) and a worker to consume these jobs.

2. Our app can be using express server in the next phase, through which we can expose an endpoint that accepts a **job** and **frequency** and schedule them inside the in memory/db scheduler.
