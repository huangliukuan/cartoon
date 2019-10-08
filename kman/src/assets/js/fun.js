import axios from "axios"

export  default{
    // 轮播图
    getCarousel(callback){
        axios.get("index/carousel")
        .then(callback)
    },
    // 推荐
    getMix(callback){
        axios.get("index/mix")
        .then(callback)
    },
    getPop(callback){
        axios.get("index/pop")
        .then(callback)
    }
}