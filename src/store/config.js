var http = 'http://localhost:80';
// var http = 'http://yourselfr.com';
// var http = 'http://185.18.54.156';
var ip = 'http://185.18.54.156';

// var http = process.env.NODE_ENV === 'development' ? 'http://localhost:80' : 'http://yourselfr.com';
// if (__PROD__) {
  // http = 'http://yourselfr.com'
// }
export const config = {
  http: http,
  ip: ip,
  post: 'application/x-www-form-urlencoded',
  googleAnalyticsId: 'UA-65570914-1'
}
