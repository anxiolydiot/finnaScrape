var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');

request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('span.comhead').each(function(i, element){
      var a = $(this).prev();
      var rank = a.parent().parent().text();
      var title = a.text();
      var url = a.attr('href');
      var subtext = a.parent().parent().next().children('.subtext').children();
      var points = $(subtext).eq(0).text();
      var username = $(subtext).eq(1).text();
      var comments = $(subtext).eq(2).text();
      var parsedDate = {
        rank: parseInt(rank),
        title: title,
        url: url,
        points: parseInt(points),
        username: username,
        comments: parseInt(comments)
      };
      console.log(parsedData);
    });
  }
});


// mongoose.connect('mongodb://localhost/scraper');
// mongoose.connection.on('error', function() {
//   console.log('MongoDB Connection Error');
// });
// var ListingsSchema = new mongoose.Schema({
//   rank: Number,
//   title: String,
//   url: String,
//   subtext: String,
//   points: Number,
//   username: String,
//   comments: Number,
// });