let APIURL = '';
switch (window.location.hostname) {
    // this is the local host name of your react app
    case 'localhost' || '127.0.0.1':
        // this is the local host name of your API
        APIURL = 'http://localhost:<Port of your local API>';
    // this is the deployed react application
    case 'fww-client.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://fww-server.herokuapp.com';
}
export default APIURL;