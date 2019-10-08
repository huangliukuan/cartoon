const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();

//登录
router.get('/login',(req,res)=>{
	var $phone=req.query.phone;
	var $upwd=req.query.upwd;
	var sql="select * from ct_user where phone=? and upwd=?";
	pool.query(sql,[$phone,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			req.session.uid=result[0].uid;
			res.send({code:1,msg:"登录成功"});//登录成功
		}else{
			res.send({code:-1,msg:"用户名或密码错误"});//登录失败
		}
	});
});

//注册
router.post('/register',(req,res)=>{
	var $phone=req.phone;
	var $upwd=req.query.upwd;
	var $uname=req.body.uname;
	console.log($phone,$upwd,$uname);
	if(!$uname){res.send({code:-1,msg:"用户名为空"});return;}
	if(!$upwd){res.send({code:-1,msg:"密码为空"});return;}
	if(!$phone){res.send({code:-1,msg:"手机号为空"});return;}
	var sql="insert into ct_user values(null,?,?,?,'image/avater/user.png')";
	pool.query(sql,[$uname,$upwd,$phone],(err,result)=>{
		console.log(result);
		if(err) throw err;
		res.send({code:1,msg:"注册成功"});
	});
});
//查看该手机号是否注册过
router.get('/checkphone',(req,res)=>{
	var $phone=req.query.phone;
	var sql=" select * from ct_user where phone=?";
	pool.query(sql,[$phone],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send({code:-1,msg:"该手机号已被注册"});//注册过
		}else{
			res.send({code:1,msg:"该手机号可以使用"});//没有注册过
		}
	});
});

//用户查询
router.get('/v1/userlist/:pno&:size',(req,res)=>{
	var $pno=req.params.pno;
	var $size=req.params.size;
	if(!$size) $size=10;
	$pno=parseInt($pno);
	$size=parseInt($size);
	var $start=($pno-1)*$size;
	var sql="select * from ct_user limit ?,?";
	pool.query(sql,[$start,$size],(err,result)=>{
		if(err) throw err;
		res.send(result);
	
	});
});
//用户删除
router.delete('/v1/deluser/:uid',(req,res)=>{
	var $uid=req.params.uid;
	var sql="delete from ct_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		res.send("1");
	});
});

// 用户检索
router.get('/v1/search/:phone',(req,res)=>{
	var $phone=req.params.phone;
	sql="select * from ct_user where phone=?";
	pool.query(sql,[$phone],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});

//导出路由器
module.exports=router;