var request = require('request');
var GITHUB_USER = "rachaeltopp";
var GITHUB_TOKEN = "b70c36951efd7bf53c616a6e3498b724236a400a";


//console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = {
    url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {'User-Agent': 'GitHub Avatar Downloader - Student Project'}
  };
  request.get(requestURL, function (error, response, body) {
    console.log(body);
  });
};

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});