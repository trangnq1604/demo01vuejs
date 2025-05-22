<template>
  <footer class="footerComponant">
    <div class="footerContent">
      <!-- Hiển thị thông tin công ty -->
      <div class="info">
        <span>{{ footerData.span }}</span>
        <p>{{ footerData.info }}</p>
      </div>

      <!-- Hiển thị các liên kết footer -->
      <div class="f-nav">
        <ul class="f-list">
        <li v-for="(item, index) in footerData.nav" :key="index">{{ item.text }}</li>
        </ul>
        <p class="coppyright">
          {{ footerData.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from 'axios';

export default {
    name:'footerComponant',
    data(){
        return{
            footerData :{
                'span':'',
                'info':'',
                'nav':[],
                'copyright':''
            }
        };
    },
      mounted() {
    this.fetchData(); // Gọi API khi component được mounted
  },
   methods:{
    async fetchData() {
         try{
             // Gọi API để lấy dữ liệu
        const response = await axios.get('http://localhost:3000/api'); 
        this.footerData = response.data.footerData[0]; // Lấy dữ liệu footer
         }
         catch (error){
            console.error('Lỗi khi gọi API:', error);
         }
    }
   }
}
</script>