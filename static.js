var http=require("http");
var url=require("url");
var fs=require("fs");
var path=require("path");

var server=http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    if(pathname=="/"){
        pathname="index.html";
    };
    //获取文件扩展名
    var extname=path.extname(pathname);
    var jsonFile=fs.readFileSync("./mime.json","UTF8");
    var jsonFileObject = {};
    jsonFileObject = JSON.parse(jsonFile);
    fs.readFile("./static/"+pathname,function(err,data){
        if(err){
            //如果有错误就返回404文件
            fs.readFile("./static/404.html",function(err,data){
                res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"});
                res.end(data);
            });
            return;
        };
        var mime;
        for(var key in jsonFileObject){
            if(extname == key){
                mime = jsonFileObject[key];
                break;
            };
        };
        res.writeHead(200,{"Content-type":mime+";charset=UTF-8"});
        res.end(data);
    });  
});

server.listen(3000,"127.0.0.1");
