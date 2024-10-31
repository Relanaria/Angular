class httpRequest {
  method: string;
  uri: string;
  version: string;
  message: string;
  response: string | undefined;
  fulfield: Boolean;

  constructor(method: string, uri: string, version: string, message: string) {
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.message = message;
    this.response = undefined;
    this.fulfield = true;
  }
}

let myData = new httpRequest('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);

  

