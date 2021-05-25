let PitelHelpers = require('./index');

const TEST_API_KEY = '81EdYnwrvimH';
const TEST_SECRET_KEY = 'Ib19uY8v';
const TEST_USERID = '1001'

const jwt = require('jsonwebtoken');

const helper = new PitelHelpers(TEST_API_KEY, TEST_SECRET_KEY, TEST_USERID);
const token = helper.getAccessToken();
console.log(token);

const decode = jwt.decode(token)
console.log(decode);

jwt.verify(token, 'Ib19uY8v', (err, decode) => {
  console.log(decode);
})