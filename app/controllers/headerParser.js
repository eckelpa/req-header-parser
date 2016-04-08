'use strict';

function displayResult(req) {
   return JSON.stringify( {ip: getIP(req), language: getLang(req), os: getUserAgent(req)} );

}

function getIP(req) {
    return req.header('x-forwarded-for');
}

function getLang(req) {
    return req.header('accept-language').split(',')[0];
}

function getUserAgent(req) {
    return req.header('user-agent').match(/\(.*\)/)[0].slice(1,-1);
}

module.exports = displayResult;