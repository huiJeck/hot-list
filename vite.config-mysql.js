import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// const express = require("express");
// const app = express();
// const mysql = require("mysql");

//  const db = mysql.createConnection({
//   host:"mysql.sqlpub.com",
//   port:"3306",
//   user:"jeckdata",
//   password:"f5c194f2d8ef6320",
//    database:'jeckdata'
//  })


// db.connect( (err,data) => {
//   if(err) throw err;
//   console.log(data,'连接成功');
// })


// 查看所有表
// db.query('SHOW TABLES', (err, result) => {
//     if (err) throw err;
//     console.log('Tables in the database:', result);
// });

 // 查询内容
// app.get("/user/list",(req,res) => {
//   let sql = "SELECT * FROM user";
//   db.query(sql,(err,result) => {
//       if(err){
//           console.log(err);
//       }else{
//           res.json(result)
//       }
//   })
// })

// 插入数据
// app.get("/user/add",(req,res) => {
//     let post = req.query;
//     let sql = "INSERT INTO user SET ?";
//     db.query(sql,post,(err,result) => {
//         if(err){
//             console.log(err);
//         }else{
//             res.send(result)
//         }
//     })
// })

// app.listen(3000, () => {
//   console.log("服务器开启在3000端口....");
// }
// )




// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  server: {
    open: true,
    proxy: {
      '/api/bing': {
        target: 'https://api.oioweb.cn',
        changeOrigin: true
      },
      '/api/ai': {
        target: 'https://api.oioweb.cn',
        changeOrigin: true
      },
      '/user': {
        target: 'http://127.0.0.1:3000/',
        changeOrigin: true
      },
      '/api/douban': {
        target: 'https://api.vvhan.com',
        changeOrigin: true
      },
      '/api/weather': {
        target: 'https://api.vvhan.com',
        changeOrigin: true
      },
      '/api/getIpInfo': {
        target: 'https://api.vvhan.com',
        changeOrigin: true
      },
      '/api/horoscope': {
        target: 'https://api.vvhan.com',
        changeOrigin: true
      },
      '/api/hotlist': {
        target: 'https://api.vvhan.com',
        changeOrigin: true,
        // pathRewrite: {
        //  '/api/hotlist': '/api'
        // }
      },
     
    }
  },
  preview: {
    port: 5000
  },
  plugins: [vue()]
})
