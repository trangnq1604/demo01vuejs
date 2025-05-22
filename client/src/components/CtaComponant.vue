<template>
    <div class="MyctaComponant">
  <div class="cta__inner">
    <p class="title">
      <span>
        {{ctaData.titlespan}}
      </span>{{ctaData.title}}
    </p>
    <div class="info">
      <p class="note" style="white-space: pre-line">
        {{ctaData.note}}
      </p>
      <ul class="list">
        <li v-for="(item,index) in ctaData.list" :key="index"><a href="#">
            <span>
              {{item.text}}
            </span>
          </a></li>
      </ul>
    </div>
    <p class="btn">
      <a href="#" target="_blank">
        <span>{{ctaData.btn}}</span>
      </a>
    </p>
    <div class="info-box">
      <p class="att">
        {{ctaData.att}}
      </p>
      <div class="text-box">
        <p class="image">
          <img :src="ctaData.img" alt="">
        </p>
        <div class="inner">
          <p class="bg-title">
            {{ctaData.bgtitle}}
          </p>
          <p class="text">
            {{ctaData.text}}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
    name:'MyctaComponant',
    data(){
        return{
 ctaData:{
titlespan:'',
title:'',
note:'',
list:[],
btn:'',
att:'',
img:'',
bgtitle:'',
text:''
        }
        };
       
    },
     mounted() {
    this.fetchData();
      },
        methods:{
    async fetchData() {
         try{
             // Gọi API để lấy dữ liệu
        const response = await axios.get('http://localhost:3000/api'); 
        this.ctaData = response.data.ctaData[0]; // Lấy dữ liệu header
         }
         catch (error){
            console.error('Lỗi khi gọi API:', error);
         }
    }
   }
}
</script>