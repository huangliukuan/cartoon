<template>
    <footer>
        <div class="fbody">
				<div class="fli">
					<ul>
						<li><router-link to="javascript:;">首页</router-link></li>
						<li><router-link to="javascript:;">APP下载</router-link></li>
						<li><router-link to="javascript:;">关于K漫</router-link></li>
						<li><router-link to="javascript:;">加入我们</router-link></li>
						<li><router-link to="javascript:;">我要投稿</router-link></li>
					</ul>
					<ul>
						<li><router-link to="javascript:;">帮助FAQ</router-link></li>
						<li><router-link to="javascript:;">游戏中心</router-link></li>
						<li><router-link to="javascript:;">家长监护</router-link></li>
						<li><router-link to="javascript:;">用户协议</router-link></li>
						<li><router-link to="javascript:;">联系我们</router-link></li>
					</ul>
				</div>
				<hr>
				<div class="fcopy">
					<p>K漫科技有限公司</p>
					<p>全部信息 K漫漫画 版权所有 未经许可 严禁转载</p>
					<p>Copyright © 2019 www.kman.com All Rights Reserved</p>
				</div>
			</div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style  scoped>
footer{
  width: 100%;
  height:324px;
  background:-webkit-linear-gradient(top,#282828,#000);   
  /* background:-moz-linear-gradient(top,#282828,#000);    */
  /* background:-ms-linear-gradient(top,#282828,#000);    */
  /* background:-o-linear-gradient(top,#282828,#000); */
}
footer::before{
    content:"";
    display: table;
}
.fbody{
	width:1184px;
	margin:0 auto;
}
.fbody>.fli{
	width:700px;height:100px;
	margin:20px auto;
	padding:20px;
}
.fbody>.fli li{
	width:120px;
	height:50px;
}
.fbody>.fli a{
	font-size:24px;
	color:#aaa;
	line-height:50px;
}
.fbody>.fcopy p{
	text-align:center;
	color:#aaa;
}

</style>