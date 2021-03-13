# Basic Express REST API

## How to run locally

### Prerequisites
Before building and running this server, make sure you have the following:
* Windows or Linux
* NodeJS 12.0+
* MongoDB installed locally (or cloud instance)

### Build and run
1. Clone this repository
1. Open root directory `cd ./express-server/`
1. Run `npm install` to install required modules
1. Start up MongoDB and find the port it is using (default mongodb://127.0.0.1:27017)
1. If your port is not the same as the default, update index.js with your port
1. Start the server with `node index.js`

### Test functionality
* In your favourite command-line tool, type `curl --data '' localhost:3000/votes` to add a new vote
* Use `curl localhost:3000/votes` to get all votes
* Use Compass or Robo T3 GUI to easily see database changes
