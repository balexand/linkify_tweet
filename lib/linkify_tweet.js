(function() {
  if (window.linkifyTweet == null) {
    window.linkifyTweet = function(tweet) {
      var entities, entity, output, position, _i, _j, _k, _len, _len2, _len3, _ref, _ref2;
      _ref = tweet.entities.hashtags;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        entity = _ref[_i];
        entity.url = "http://twitter.com/search?q=%23" + entity.text;
      }
      _ref2 = tweet.entities.user_mentions;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        entity = _ref2[_j];
        entity.url = "http://twitter.com/" + entity.screen_name;
      }
      entities = tweet.entities.hashtags.concat(tweet.entities.urls).concat(tweet.entities.user_mentions);
      entities = entities.sort(function(a, b) {
        return a.indices[0] - b.indices[0];
      });
      position = 0;
      output = "";
      for (_k = 0, _len3 = entities.length; _k < _len3; _k++) {
        entity = entities[_k];
        output += "" + (tweet.text.substring(position, entity.indices[0])) + "<a href='" + entity.url + "'>" + (tweet.text.substring(entity.indices[0], entity.indices[1])) + "</a>";
        position = entity.indices[1];
      }
      return output + tweet.text.substring(entities[entities.length - 1].indices[1]);
    };
  }
}).call(this);
