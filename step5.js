var fs = require('fs'), path = require('path');
var files = fs.readdir(process.argv[2],function callback(err,list){
    if (err)
    throw err;
    else{
        for(var i=0; i < list.length; i++)
        {
            if(list[i].match('.md'))
            console.log(list[i]);
        }
    }
})