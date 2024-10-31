var httpRequest = /** @class */ (function () {
    function httpRequest(method, uri, version, message) {
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfield = true;
    }
    return httpRequest;
}());
var myData = new httpRequest('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
