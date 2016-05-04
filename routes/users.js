var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/:id/friend_list', function(req, res){
  fs.readFile('friend_list'+req.params.id+'.json', 'utf-8', function (err, data) {
        if (err) {
            res.send(err);
        }
        res.send(data);
    });
});










/*
router.all('*', function(req, res, next){
  fs.readFile('post.json','utf-8', function(err, data){
    res.locals.post = JSON.parse(data) ;
    next();
  });
});
*/

/*
//當 url 是 /post/:id 時, 取得某一筆資料
router.get('/post/:id', function(req, res, next){
  //取得 post.json 資料夾
  res.locals.post.forEach(function(post){
    //從 url 取得 id 參數與 posts.json 裡的 id
    if (req.params.id === post.id){
      //顯示參數為  url 中 id 的 post.id, 那麼顯示部分資料
      res.send(post);
    }
  })
});
*/
module.exports = router;
