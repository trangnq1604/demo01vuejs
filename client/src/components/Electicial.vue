<template>
   <div class="module -break">
  <div class="index-electicial">
<div class="box">
<div class="info">
<div class="article" v-for="(item,index) in indexelecticialData.articles" :key="index">
<p class="image">
    <img :src="item.img" alt="">
</p>
<div class="text-box">
    <p class="title">
          {{item.title}}
    </p>
    <p class="text" style="white-space: pre-line">
          {{item.text}}
        </p>
</div>
<p class="btn">
   <a href="#">
          <img :src="item.btn" alt="">
        </a>
</p>
</div>
</div>
<p class="btn-bottom">
    <a href="#">{{indexelecticialData.btnbottom}}</a>
  </p>
</div>

        </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
    name:'index-electicial',
    data(){
return {
  indexelecticialData: {
      articles: [],
      btnbottom: ''
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
        this.logo = response.data.indexelecticialData[0].img; // Lấy đường dẫn logo
        this.indexelecticialData = response.data.indexelecticialData[0]; // Lấy dữ liệu header
         }
         catch (error){
            console.error('Lỗi khi gọi API:', error);
         }
    }
   }
}
</script>