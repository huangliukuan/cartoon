<template>
  <header>
		<div class="hbody">
			<div class="logo float">
				<router-link to="javascript:;"><img src="../assets/image/logo.jpg" alt="logo"></router-link>
			</div>
			<div class="direc float">
				<ul>
					<li>
						<router-link to="javascript:;">首页</router-link>
					</li>					
					<li>
						<router-link to="javascript:;">分类</router-link>
					</li>					
					<li>
						<router-link to="javascript:;">排行榜</router-link>
					</li>					
					<li>
						<router-link to="javascript:;">APP下载</router-link>
					</li>					
					<li>
						<router-link to="javascript:;">我要投稿</router-link>
					</li>					
					<li>
						<router-link to="javascript:;">动漫</router-link>
					</li>					
					<li>
						<router-link to="javascript:;">游戏中心</router-link>
					</li>					
					<li>
						<router-link to="javascript:;">条漫大赛</router-link>
					</li>
				</ul>
			</div>
			<div class="float">
				<input class="search" type="text" placeholder="搜索作品、作者名">
				<router-link to="javascript:;" class="isearch"></router-link>
			</div>
			<div class="user float">
				<router-link to="javascript:;">登录</router-link>|
				<router-link to="javascript:;">注册</router-link>
			</div>
		</div>
	</header>
</template>
<script>
export default {
	
}
</script>
<style  scoped>
header{
	width:100%;
	height:64px;
	background:#000;
}
.hbody{
	width:1184px;height:64px;
	margin:0 auto;
	background:#000;
}
.hbody>.logo img{
	width:64px;height:64px;
}
.hbody>.direc{
	width:648px;height:32px;
	margin:16px 0;
	padding-left:45px;
}
.hbody>.direc li{
	margin:0 31px 0 0;
}
.hbody>.direc a{
	color:#aaa;
}
.hbody .search{
	width:252px;height:32px;
	border:0;outline:0;
	border-radius:15px;
	margin:16px 0;
	padding-left:20px;
}
.hbody>div:nth-child(3){
	position: relative;
}
.hbody .isearch{
	position: absolute;
    right: 8px;
    top: 21px;
    width: 24px;
    height: 24px;
    background: url(../assets/image/search.png) no-repeat center center;
    background-size: cover;
}
.hbody>.user{
	width:115px;height:32px;
	color:#fff;
	margin:16px ;
}
.hbody>.user a{
	color:#fff;
	padding:0 10px;
}

</style>