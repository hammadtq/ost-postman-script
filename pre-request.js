var api_key = "xxxxx";
var name = "hammad";
var apiSecret = "xxxxx";
var request_timestamp = Math.floor( Date.now() / 1000 );

var stringToSign = "/users/create?api_key="+api_key+"&name="+name+"&request_timestamp="+request_timestamp;
console.log(stringToSign)

var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, apiSecret); 
hmac.update(stringToSign); 

var hash = hmac.finalize().toString(CryptoJS.enc.Hex);
console.log(hash);

pm.environment.set("request_timestamp", request_timestamp);
pm.environment.set("signature", hash);
pm.environment.set("api_key", api_key);
pm.environment.set("name", name);
