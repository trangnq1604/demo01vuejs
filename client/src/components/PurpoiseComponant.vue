<template>
    <div class="module -break">
  <div class="index-purpose js-break">
<div class="box">
  <ul class="list">
    <li v-for="(item,index) in purpoiseData.list" :key="index">
      <span>{{item.text}}</span>
    </li>
  </ul>
  <p class="title" style="white-space: pre-line">
  <span>{{purpoiseData.titlespan}}</span>  <br>
{{purpoiseData.title}}
  </p><p class="text" style="white-space: pre-line">
    {{purpoiseData.text}}
  </p>
  <div class="info">
    <p class="bg-title">
      <span>
        {{purpoiseData.bgtitle}}
      </span>
    </p>
    <div class="info-box">
      <dl v-for="(item,index) in purpoiseData.dl"  :key="index">
        <dd>
          <img :src="item.img" alt="" />
        </dd>
        <dt style="white-space: pre-line">
          {{item.dt}}
        </dt>
      </dl>
      
    </div>
  </div>
  <p class="btn">
    <a href="#">
      {{purpoiseData.btn}}
    </a>
  </p>
</div>
  </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
    name:'index-purpose',
    data(){
        return{
            purpoiseData:{
                list:[],
                title:'',
                titlespan:'',
                text:'',
                bgtitle:'',
                dl:[],
                btn:''            }
        }
    }
    ,
     mounted() {
    this.fetchData();
      },
        methods:{
    async fetchData() {
         try{
             // Gọi API để lấy dữ liệu
        const response = await axios.get('http://localhost:3000/api'); 
        this.purpoiseData = response.data.purpoiseData[0]; // Lấy dữ liệu header
         }
         catch (error){
            console.error('Lỗi khi gọi API:', error);
         }
    }
   }
}
</script>