const jwt = require('jsonwebtoken');

/**PitelHlpers Class */
function PitelHelpers(PITEL_API_KEY, PITEL_SECRET_KEY, PITEL_USERID) {
  this._API_KEY = PITEL_API_KEY;
  this._SECRET_KEY = PITEL_SECRET_KEY;
  this._USERID = PITEL_USERID;
  let self = this;
  if (!this._API_KEY) {
    throw('PITEL_API_KEY is required');
  }

  if (!this._SECRET_KEY) {
    throw('PITEL_SECRET_KEY is required');
  }

  if(!this._USERID) {
    throw('PITEL_USERID is required');
  }

  this.getAccessToken = function() {
    var now = Math.floor(Date.now() / 1000);
    var exp = now + 3600;

    var header = {org: "pitel-helpers-nodejs;version=1"};
    var payload = {
      k: self._API_KEY,
      //t: now,
      e: exp,
      u: self._USERID
    };

    
    var token = jwt.sign(payload, self._SECRET_KEY, {algorithm: 'HS256', header: header})
    return token;
  }
}

module.exports = PitelHelpers;