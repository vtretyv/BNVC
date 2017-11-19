//Dependencies
const axios = require('axios');
const config = require('config.js');
const Promise = require('bluebird');

const accountSid ='Account Number would go here';
const authToken = 'Would be taken from config';

//const client = require('twilio')(accountSid, authToken);

//Request format: https://{AccountSid}:{AuthToken}@api.twilio.com/2010-04-01/Accounts
//Helper functions to export

//TWILIO NUMBER: +18312788033
//UNCOMMENT ONCE WE HAVE TWILIO ACCOUNT
// let sendAcceptMsg = ()=>{
//     //Returns a promise
//     return  client.messages
//             .create({
//             to: '+TargetNumber(Would be one of ours)',
//             from: '+Twilio Number tied to the account',
//             body: 'Your reservation at RESTAURANT NAME at TIME is booked',
//             })
// }

// let sendCancelMsg = ()=>{
//     //Returns a promise
//     return  client.messages
//             .create({
//             to: '+TargetNumber(Would be one of ours)',
//             from: '+Twilio Number tied to the account',
//             body: 'Your reservation at RESTAURANT NAME at TIME is cancelled',
//             })
// }

// module.exports = {
//     sendAcceptMsg:sendAcceptMsg,
//     sendCancelMsg:sendCancelMsg
// }