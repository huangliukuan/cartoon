<template>
<section>
	<div class="sbody srbody">
        <input @blur="checkPhone"  type="text" v-model="phone" class="input" placeholder="请输入您要注册的手机号"><br>
        <input  type="password" v-model="upwd" class="input" 
		placeholder="请输入您的密码"><br>
        <input  type="password" v-model="cpwd" class="input" @blur="checkpwd"
		placeholder="请重新输入您的密码"><br>
        <input type="text" v-model="uname" class="input" 
		placeholder="请输入您的用户名"><br>
        <div class="pro" v-text="prompt"></div>
        <button @click="userReg">注册</button>
        <p>已有账号<router-link to="/login" class="ta">立即登录</router-link></p>
    </div> 
</section>
</template>
<script>
export default {
    data(){
		return{
			phone:"",
			upwd:"",
			cpwd:"",
			uname:"",
			prompt:""
		}
	},
	methods:{
		checkPhone(){
			var $phone=this.phone;
			var reg=/^1[3-9]\d{9}$/;
            if(!reg.test($phone)){
                this.prompt="手机号格式不正确";
                return;
            }
			var url="user/checkphone";
			var obj={phone:$phone};
			this.axios.get(url,{params:obj})
			.then(res=>{
				console.log(res.data)
				if(res.data.code<0){
					this.prompt="该手机号已被注册"
				}else{
					this.prompt="该手机号可以使用"
				}
			})	
		},
		checkpwd(){
			if(this.upwd!==this.cpwd){
				this.prompt="两次密码不一致";
			}else{
				this.prompt="两次密码一致";
			}
		},
		userReg(){
			var url="user/register";
			var obj={
				phone:this.phone,
				upwd:this.upwd,
				uname:this.uname
				}
				console.log(obj);
			this.axios.post(url,obj)
			.then(res=>{
				console.log(res);
				if(res.data.code>0){
					this.prompt="注册成功"
				}else{
					this.prompt=res.data.msg;
				}
			})
		}
	}
}
</script>
<style scoped>
section{
	/* width:1184px; */
	height:625px;
	margin:0 auto;
	background:url(../assets/image/bg.jpg) no-repeat center center;
	background-size:cover;
}
section>.sbody{
	background:rgba(255,255,255,.3);
	border-radius:10%;
	padding:15px;
	font-size:14px;
	text-align:center;
}
section>.slbody{
	width:280px;height:250px;
	margin:187.5px auto;
}
section>.srbody{
	width:280px;height:350px;
	margin:137.5px auto;
}
section>.sbody .input{
	width:100%;height:36px;
	border:0;outline:0;
	margin:12px 0;
	padding:10px;
	box-sizing:border-box;
}
section>.sbody .ta{
	text-decoration:none;
	color:#007FFF;
}
section>.sbody .rta{
	margin:0 0 0 153px;
}
section>.sbody .pro{
	color:#f00;
	font-size:16px;
}
section>.sbody button{
	width:100%;height:40px;
	border:0;outline:0;
	background:-webkit-linear-gradient(top,#0080ff 0%, #007FFF 50%,#2894ff 100%);
	/* background:-moz-linear-gradient(top,#0080ff 0%, #007FFF 50%,#2894ff 100%);
	background:-ms-linear-gradient(top,#0080ff 0%, #007FFF 50%,#2894ff 100%);
	background:-o-linear-gradient(top,#0080ff 0%, #007FFF 50%,#2894ff 100%); */
	color:#fff;
	margin:15px 0;
	border-radius:5px;
	cursor:pointer;
}

</style>