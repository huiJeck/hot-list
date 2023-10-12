var xlsx = require('node-xlsx');
var fs = require('fs');
//读取文件内容
var obj = xlsx.parse(__dirname+'/static/test.xlsx');
var excelObj=obj[0].data;
console.log(excelObj);
var data = [];
var jsonData = [];
for(var i in excelObj){
  var arr=[];
  var value=excelObj[i];
  for(var j in value){
    arr.push(value[j]);
  }
  data.push(arr);
// 生成json对象
  var box = {
  	index:value[0],
  	name:value[1],
  	phone:value[2],
  	city:value[3],
  };
  jsonData.push(box)
}
console.log(jsonData)
var buffer = xlsx.build([
  {
    name:'sheet1',
    data:data
  }
]);
//将文件内容插入新的文件中
fs.writeFileSync('test1.xlsx',buffer,{'flag':'w'});

var express = require("express");
var app = express();

app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OP0TIONS");
    res.header("X-Powered-By", "3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// var questions = [{
//     data: 213,
//     num: 4545,
//     age: 12
// }, {
//     data: 889,
//     num: 365,
//     age: 13
// }];

var questions = [{
    data: 213,
    num: 4545,
    age: 12
}];
app.get('/123', function(req, res) {
    res.status(200),
        res.json(jsonData)
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
})