const hmacSha256 = require('crypto-js/hmac-sha256'); // sha256 hash. or use you favorite u like
const request = require('request'); // for http requests. or use you favorite u like


const BASE_URL = 'https://btc-alpha.com/api/v1';
const API_KEY = '53v3CEy85nejceeajhEpqUmRXNV146WpvKHcpsDPFRwPMSeR4nFdojYzgJcHzZj9TqwGBGH6UFau';
const SECRET = 'stfgBW4H6hE7jWxtkkErgU2RYwdSUhxBHWva2kKxMDuPkTMUxVcGW96DbnfdWKXojzWfot1ik49jvVB7MBkP3Ty';

//Serialize for singing only. Can be used in request body if u like urlencoded form format instead of json
function serializePayload(payload) {
    return Object
        .keys(payload) // get keys of payload object
        .sort() // sort keys
        .map((key) => key + "=" + encodeURIComponent(payload[key])) // each value should be url encoded. the most sensitive part for sign checking
        .join('&'); // to sting, separate with ampersand
}

// Generates auth headers
function getAuthHeaders(payload) {
    // get SHA256 of <API_KEY><sorted urlencoded payload string><SECRET>
    const sign = hmacSha256(API_KEY + serializePayload(payload), SECRET).toString();

    return {
        'X-KEY': API_KEY,
        'X-SIGN': sign,
        'X-NONCE': Date.now()
    };
}

function getWallets(callback) {
    payload = {};

    const options = {
        method: 'get',
        url: `${BASE_URL}/wallets/`,
        headers: getAuthHeaders(payload)
    };

    request(options, callback);
}

function createOrder(order, callback) {
    const options = {
        method: 'post',
        url: `${BASE_URL}/order/`,
        headers: getAuthHeaders(order),
        form: order, // API accepts urlencoded form or json. Use appropriate headers!
    };

    request(options, callback);
}

// test
getWallets((error, response, body) => {
    console.log('error', error);
    console.log('body', body);
});

const order = {
    type: 'buy',
    pair: 'BTC_USD',
    amount: '0.0001',
    price: '0.1'
};

createOrder(order, (error, response, body) => {
    // get json, etc
    console.log('error', error);
    console.log('body', body);
});



