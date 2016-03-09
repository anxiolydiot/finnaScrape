var request = require('request');
var cheerio = require('cheerio');

request('http://www.indeed.com/cmp/Classic-Optical/jobs/Web-Developer-11b65e85bc52098d?sjdu=QwrRXKrqZ3CNX5W-O9jEvcn8mUoGX0zRknJzn93dTVC8FNLDCpovZyE-Y0dSL0kE6wlGjo1TbkC1-HbyOgirfg', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('span.summary').each(function(i, element){
    var x = $(this);
    var summary = x.text();
    // var requirements = x.next().text();
     console.log(summary);
     // console.log(requirements);


    });
   
  }


});