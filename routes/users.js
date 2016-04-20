var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/:id",function (req,res){
    res.send("welcome "+ req.params.id+" !!");
});

var friends=[  {
    "name":"Jim",
    "telephone":"0988369639"
},{
    "name":"Merry",
    "telephone":"0988369639"
},{
    "name":"Su",
    "telephone":"0988369639"
}  
]
friends[i].name  +friends[i].telephone
for(var i=0;i<3;i++)
friends.length

module.exports = router;
