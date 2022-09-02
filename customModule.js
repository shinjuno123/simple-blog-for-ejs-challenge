"use strict";

const lodash = require("lodash");

exports.CreatePost = function(title, content){
    this.title = title;
    this.content = content;
}

exports.findMatchedPost = function(posts, requestedPostTitle){
    for(const post of posts){
        const storedTitle = lodash.lowerCase(post.title);
        if(storedTitle === requestedPostTitle){
          return post;
        }
    }

    return new exports.CreatePost("","");
    
}


