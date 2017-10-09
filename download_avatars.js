var request = require('request');
var fs = require('fs');
var GITHUB_USER = "rachaeltopp";
var GITHUB_TOKEN = "ddcccbb8a9a08fdaf9d6b702993b2fd58ebd0097";

//console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = {
    url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {'User-Agent': 'GitHub Avatar Downloader - Student Project'}
  };
  request.get(requestURL, function (error, response, body) {
    cb(error, JSON.parse(body));
  });
};

getRepoContributors(process.argv[2], process.argv[3], function(err, userInfos) {
  console.log("Errors:", err);
  for (var userInfo in userInfos) {
    downloadImageByURL(userInfos[userInfo].avatar_url, userInfos[userInfo].login);
  }
});

function downloadImageByURL(url, filePath) {
  request.get(url, function (error, response, body) {
    return body;
  })
    .on('error', function (err) {
      throw err;
    })
    .pipe(fs.createWriteStream(`./avatars/${filePath}.jpg`));
}