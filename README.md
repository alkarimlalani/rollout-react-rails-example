# Rollout Example

## How to Setup

1. You will need to have Rails 7, Ruby 3.1.2, Node 17+, Yarn 3.2+ and NPM 8+ pre-installed
2. In the Rails app, go to the `rollout_controller.rb` and replace the client key and secret with the values from this page: https://app.rollouthq.com/dashboard/configuration
3. In `client/src/App.js` update the `data` object in the `sendFormSubmissionEvent` function to correspond with a trigger in your Rollout Dashboard
4. Start the Rails API server with:

```
$ cd server
$ bin/rails server
```

5. Start the Create React App

```
$ yarn start
```
