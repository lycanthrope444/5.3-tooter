/**
 * Project views
 */
var $ = require('jquery');
var template = require('../templates/post.hbs');
var postTemplate = require('../templates/application.hbs');

function PostView(){
  $('body').append('<ul class="posts">');
  $('body').append(postTemplate);

  $('.newEntry').on('submit', function (event){
    event.preventDefault();
    $(document).trigger('create:post', [{
      title: 'Cool',
      body: 'cool'
    }]);
  });
}


PostView.prototype.showPosts = function(posts){
  console.log(posts);
  posts.forEach(function(post){
    console.log($('.posts').length);
    $('.posts').append(template(post));
  });
};

module.exports = {
 'PostView': PostView
};
