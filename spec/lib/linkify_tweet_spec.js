(function() {
  var tweet1;
  tweet1 = {"entities":{"user_mentions":[{"name":"mr bar","indices":[5,9],"id_str":"2530071","id":2530071,"screen_name":"bar"}],"hashtags":[{"text":"foo","indices":[0,4]}],"urls":[{"url":"http://t.co/PI9t2u5","display_url":"google.com","indices":[10,29],"expanded_url":"http://google.com/"}]},"text":"#foo @bar http://t.co/PI9t2u5"};
  describe("linkifyTweet", function() {
    return it("should linkify URL", function() {
      return expect(linkifyTweet(tweet1)).toEqual("<a href='http://twitter.com/search?q=%23foo'>#foo</a> <a href='http://twitter.com/bar'>@bar</a> <a href='http://t.co/PI9t2u5'>http://t.co/PI9t2u5</a>");
    });
  });
}).call(this);
