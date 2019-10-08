const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();

function indexGet(gu,sql){
    router.get(gu,(req,res)=>{
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                res.send({code:1,data:result})
            }
        })    
    })
}
// 轮播图
indexGet("/carousel","SELECT * FROM ct_index_carousel");
// router.get('/carousel',(req,res)=>{
//     var sql="SELECT * FROM ct_index_carousel";
//     pool.query(sql,(err,result)=>{
//         if(err) throw err;
//         if(result.length>0){
//             res.send({code:1,data:result})
//         }
//     })    
// })
// 推荐
indexGet("/mix","SELECT * FROM ct_index_mix");
// 人气榜
indexGet("/pop","SELECT * FROM ct_cartoon order by popularity desc");


//导出路由器
module.exports=router;