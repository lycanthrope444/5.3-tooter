var chai = require('chai');
var expect = chai.expect;
var $ = require('jquery');

var Post = require('../app/scripts/models.js').Post;
var PostView = require('../app/scripts/views.js').PostView;
// var Entry = require('app/scripts/entry.js').Entry;

// ##############################################
// Model Tests
// ##############################################
describe('Post', function(){

  describe('fetch', function(){
    it('should return a promise', function(){
      var promise = Post.fetch();
      expect(promise).to.respondTo('then');
    });

    it('should resolve with an array of posts', function(done){
      Post.fetch().then(function(data){
        var post = data[0];

        expect(post).to.have.property('title');
        expect(post).to.have.property('body');
        expect(post).to.have.property('_id');

        done();
      });
    });
  });

});

// ##############################################
// View Tests
// ##############################################
describe('PostView', function(){
  var view, posts;

  beforeEach(function(){
    posts = [{title: 'Cool', body: 'awesome'}];
    view = new PostView();
    console.log($('.posts').length);
  });

  describe('showPosts', function(){

    it('should take a post array and list them', function(){
      view.showPosts(posts);
      expect($('.posts li').length).to.equal(1);
      expect($('.posts li').first().find('h1').text()).to.equal('Cool');
      expect($('.posts li').first().find('p').text()).to.equal('awesome');
    });

  });

});
  // #######################
  // Create Forum Post Test
  // #######################
describe('New Entry', function(){
  // var formContent, newEntry;

  // Test Content
  // beforeEach(function(){
  //   formContent =
  // });

  //Checks to see if the event handler is grabbing the contents of the form
  it('should trigger a create:post event on the document with the title and body', function(done){
    $(document).on('create:post', function(event, post){
      expect(post).to.have.property("title");
      expect(post).to.have.property("body");
      done();
    });
    $('.title').val("Title");
    $('.body').val("Body");
    $('.newPostBtn').submit();

  });

});
