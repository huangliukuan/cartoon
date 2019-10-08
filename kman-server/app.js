const express=require("express");
//引入body-parser中间件
const bodyParser=require('body-parser');
//引入userRouter路由器
const userRouter=require('./routes/user.js');
//引入index路由器
const index=require('./routes/index.js');
// 引入跨域处理模块cors
const cors=require("cors");
//引入session对象
const session=require("express-session")

//创建服务器
var app=express();
// 配置跨域模块
app.use(cors({
	// 允许程序列表
	origin:["http://127.0.0.1:3001","http://localhost:3001"],
	// 每次请求需要验证
	credentials:true
}));
//配置session模块
app.use(session({
	secret:"128位字符串", //安全字符串
	resave:true, //请求是更新数据
	saveUninitialized:true //保存初始数据
}));

app.listen(8080);
//使用body-parser中间件,将post请求数据解析为对象
app.use(bodyParser.urlencoded({
	extended:false
}));

//托管静态资源到public目录
app.use(express.static('./public'));

//使用路由器挂载到/user
app.use('/user',userRouter);
//使用路由器挂载到/user
app.use('/index',index);

