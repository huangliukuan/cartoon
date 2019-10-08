<template>
<section>
    <!-- 轮播图 -->
<div class="carousel">
	<div class="carCont">
		<div class="btnPrev"></div>
		<ul id="ulImg"  style="width:5920px; padding:0; margin-left:0px;">
			<li class="liImg">
				<span v-for="(c,j) of crs0"  :key="j">
					<router-link to="javascript:;">
						<img :src="hp+c.cart_img" :alt="c.cart_title"> 
					</router-link>
				</span>
			</li>
		</ul>
		<ul id="ulIdxs">
			<li class="active" ></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<div class="btnNext"></div>
	</div>  
</div>
<!-- 推荐和人气榜 -->
<div class="floor_1">
  <!-- 推荐-->
  <div class="recom flo_l">
    <h3>脑洞大开的世界!</h3>
	<div class="cartoon" v-for="(m,i) of mix" :key="i">
		<a href="javascript:;">
			<img class="changeBig" :src="hp+m.mix_img" alt=""/>
			<p class="carName">{{m.mix_name}}</p>
		</a>
		<p class="car_type">
			<span class="type_t1">{{m.mix_theme.split(" ")[0]}}</span>
			<span class="type_t2">{{m.mix_theme.split(" ")[1]}}</span>
		</p>
		<p class="nameLaud">
			<span>{{m.mix_author}}</span>
			<span class="flo_r">{{m.mix_approval}}</span>
		</p>
	</div>
  </div>
  <!-- 人气榜-->
  <div class="popula flo_l">
		<h3>人气榜</h3>
		<div class="rank">
			<div class="ranking">
				<div class="ranking_col" >
					<span class="ranking_id1">1</span>
					<span>
						<a class="ranking_chapter" href="javascript:;">第116章 拉拢</a>
						<a class="carName" href="#">传武</a>
					</span>
					<span class="ranking_updata">更新至:</span>  
				</div>
				<div style="height:169px;" class="ranking_block">
					<div class="ranking_img">
						<img class="w-100" src="image/cartoon/chuanwu.jpg" alt=""/>
						<span class="ranking_img_id1">1</span>
					</div>
					<div class="ranking_text">
						<div>
							<a class="ranking_tname" href="javascript:;">传武</a>
						</div>
						<div>
							<span class="ranking_type">古风</span>
							<span class="ranking_type">恐怖</span>
						</div>
						<p class="ranking_intro">他说：“这世上本不该有鬼”。 然后，这世间为之一清。</p>
						<div>
							<span class="ranking_updata">更新至:</span>
							<span>
									<a class="ranking_chapter" href="javascript:;">第116章 拉拢</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</div>
</section>
</template>
<script>
import funs from "@/assets/js/fun.js"
export default {
    data(){
		return{
			hp:"http://127.0.0.1:8080/",
			crs0:[],
			crs1:[],
			crs2:[],
			crs3:[],
			mix:[],
			pop:[]
		}
	},
	methods:{
	},
	watch:{

	},
	created(){
		funs.getCarousel(result=>{
			this.crs0=result.data.data.slice(0,4);
			this.crs1=result.data.data.slice(4,8);
			this.crs2=result.data.data.slice(8,12);
			this.crs3=result.data.data.slice(12,16);
		}),
		funs.getMix(result=>{
			this.mix=result.data.data;
			for(var m of this.mix){
				if(m.mix_approval>=1000000){
					m.mix_approval="99万+"
				}else if(m.mix_approval>=10000){
					m.mix_approval=m.mix_approval/10000+"万"
				} 
			}
		}),
		funs.getPop(result=>{
			this.pop=result.data.data.slice(0,10);
			console.log(this.pop)
		})
	}
}
</script>
<style  scoped>
section .carousel{
    width:1184px;
    margin:0 auto;
}
section .carCont{
    width:1184px;
    overflow: hidden;
    position: relative;
}
section .carCont>#ulImg{
    list-style: none;
}
section .carCont>#ulImg.trans{
    transition:all .5s linear;
}
section .carCont>#ulImg>.liImg{
    width:1184px;
    float: left;
}
section .carCont>#ulImg>.liImg a{
    display: block;
    width:296px;
    height:345px;
    float: left;
    padding:5px;
    box-sizing: border-box;  
}
section .carCont>#ulImg>.liImg img{
    width:100%;
    height:100%;
    border-radius: 5px;
}
/* 小圆点 */
section .carCont>#ulIdxs{
    width:80px;
    margin:0 auto;
    list-style: none;
    position: absolute;
    left: 50%;
    bottom: 25px;
    margin-left:-40px; 
    padding:0;
}
section .carCont>#ulIdxs>li{
    width: 10px;
    height:10px;
    background-color: #fff;
    border-radius: 50%;
    cursor:pointer;
    float: left;
    margin:0 5px;
}
section .carCont>#ulIdxs>li.active{
    background-color: #007FFF;
}
/* 左右按钮 */
section .carCont>.btnPrev,
section .carCont>.btnNext{
    width:60px;
    height:40px;
    position:absolute;
    top:50%;
    margin-top:-20px;
    background-repeat: no-repeat;
    background-position: center;
    cursor:pointer;
}
section .carCont>.btnPrev{
    left:20px;
    background-image: url(../assets/image/carousel/prev1.png);
}
section .carCont>.btnNext{
    right:20px;
    background-image: url(../assets/image/carousel/next1.png);
}
section .carCont>.btnPrev:hover,
section .carCont>.btnNext:hover{
    background-size: 70px 80px;
}
/*一楼*/
section .floor_1{
    width:1184px;height:586px;
    margin:0 auto;
    padding-top:32px;
}
/*一楼推荐*/
section .floor_1>.recom{
    width:784px;height:554px;
}
/*推荐大标题*/
section .floor_1>.recom>h3{
    font-size: 24px;
    color:#333;
    padding-left:24px;
}
/*推荐漫画整体ʽ*/
section .floor_1>.recom>.cartoon{
    width:20%;height:256px;
    float:left;
    padding: 8px;
	box-sizing: border-box;
    position:relative;
}
section .floor_1>.recom>.cartoon img{
    width:100%;
}
section .floor_1>.recom>.cartoon p.carName{
    width: 144px;
    height: 28px;
    line-height: 28px;
}
/* 作者和点赞数 */
section .floor_1>.recom>.cartoon>.nameLaud{
    font-size: 12px;
    color:#999;
    margin:0;
    padding:0 5px; 
}
section .floor_1>.recom>.cartoon>.nameLaud>span:first-child{
    display: inline-block;
    width:48px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/*类型*/
section .floor_1>.recom .car_type{
    position: absolute;
    left:15px;
    bottom:50px;
}
section .floor_1>.recom .car_type>.type_t1,
section .floor_1>.recom .car_type>.type_t2{
    background: rgba(0,0,0,.4);
    color:#fff;
    font-size: 14px;
	border-radius:10%;
	padding:3px;
}
/*人气榜*/
/* 行 */
section .floor_1>.popula .ranking_col{
    width:365px;
    height:36px;
}
/*块*/
section .floor_1>.popula .ranking_block{
    background-color: #fff;
    width:365px;
    height:0px;
    position: relative;
    top:-36px;
    overflow: hidden; 
    transition: all .5s linear;
}

/*鼠标放在行内*/

section .floor_1>.popula .ranking_id1,
section .floor_1>.popula .ranking_id2{
    font-size:16px;
    font-weight: bold;
    color:rgb(245,166,35);
}
section .floor_1>.popula .ranking_id2{
    color:#000;
}
/*更新至*/
section .floor_1>.popula .ranking_updata{
    font-size: 14px;
    color:#999;
    float:right;
}
/*章节*/
section .floor_1>.popula .ranking_chapter{
    line-height: 21px;
    font-size:14px;
    color:#f56c6c;
    white-space:nowrap;
    width:120px;
    overflow: hidden;
    text-overflow:ellipsis;
    float:right;
}
section .floor_1>.popula .ranking_chapter:hover{
    color:#f00;
}
/*图片*/
section .floor_1>.popula .ranking_img{
    width:120px;
    height:162px;
    float:left;
}
/* no */
section .floor_1>.popula .ranking_img_id1{
    width:24px;
    height:24px;
    font-size: 16px;
    color:#fff;
    font-weight: bold;
    text-align:center;
    border-radius:5px;
    background: rgba(245,166,35,.7);
    position: absolute;
    top:0;
    left:0;
}
/*右侧内容*/
section .floor_1>.popula .ranking_text{
    width:224px;
    height:162px;
    float:left;
    margin-left:10px;
}
/*漫画名*/
section .floor_1>.popula .ranking_tname{
    font-size: 18px;
    color:#1a1a1a;
}
/*漫画类型*/
section .floor_1>.popula .ranking_type{
    font-size: 14px;
    color:#333;
    padding-right:10px;
}
/*介绍*/
section .floor_1>.popula .ranking_intro{
    font-size:14px;
    color:#999;
}
/* 更新 */
section .floor_1>.popula .ranking_block .ranking_updata,
section .floor_1>.popula .ranking_block .ranking_chapter{
    float:none;
}
</style>