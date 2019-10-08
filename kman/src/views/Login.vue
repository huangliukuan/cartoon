<template>
		<section>
			<div class="sbody slbody">
				<input  class="input" type="text"  placeholder="请输入手机号" v-model="phone"><br>
				<input class="input" type="password"  placeholder="请输入密码" v-model="upwd"><br>
				<label><input type="checkbox" v-model="remember">
				<strong>记住我</strong></label>
				<router-link to="javascript:;" class="ta rta">忘记密码?</router-link><br>
				<div class="pro" v-text="prompt"></div>
				<button @click="userLogin">登录</button>
				<p>还没有账号?<router-link to="/register" class="ta">立即注册</router-link></p>
			</div>
		</section>
</template>
<script>
export default {
    data(){
        return{
            phone:"",
            upwd:"",
            prompt:"",
            remember:true
        }
    },
    methods:{
        userLogin(){
            var $phone=this.phone;
            var $upwd=this.upwd;
            var reg=/^1[3-9]\d{9}$/;
            if(!reg.test($phone)){
                this.prompt="手机号格式不正确";
                return;
            };
            var url="user/login";
            var obj={phone:$phone,upwd:$upwd};
            this.axios.get(
                url,
                {params:obj}
            ).then(res=>{
                if(res.data.code<0){
                    this.prompt="用户名或密码错误";
                }else{
                    this.$router.push("/Index");
                }
            })
        }
    }
}
</script>
<style  scoped>
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
	/*background:-moz-linear-gradient(top,#0080ff 0%, #007FFF 50%,#2894ff 100%);
	background:-ms-linear-gradient(top,#0080ff 0%, #007FFF 50%,#2894ff 100%);
	background:-o-linear-gradient(top,#0080ff 0%, #007FFF 50%,#2894ff 100%);*/
	color:#fff; 
	margin:15px 0;
	border-radius:5px;
	cursor:pointer;
}

</style>