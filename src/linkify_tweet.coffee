unless window.linkifyTweet?
  window.linkifyTweet = (tweet) ->
    # add URLs to hashtags
    for entity in tweet.entities.hashtags
      entity.url = "http://twitter.com/search?q=%23#{entity.text}"

    # add URLs to user_mentions
    for entity in tweet.entities.user_mentions
      entity.url = "http://twitter.com/#{entity.screen_name}"

    # concat and sort entities
    entities = tweet.entities.hashtags.concat(tweet.entities.urls).concat(tweet.entities.user_mentions)
    entities = entities.sort (a,b) ->
      a.indices[0] - b.indices[0];

    position = 0
    output = ""
    for entity in entities
      output += "#{tweet.text.substring(position, entity.indices[0])}<a href='#{entity.url}'>#{tweet.text.substring(entity.indices[0], entity.indices[1])}</a>"
      position = entity.indices[1]

    output + tweet.text.substring(entities[entities.length - 1].indices[1])