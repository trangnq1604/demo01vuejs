<template>
    <header class="headerComponant">
        <div class="imgHeader">
          <img :src="logo" alt="Logo">
        </div>
        <ul class="h-list">
            <li v-for="(item, index) in headerData.list" :key="index">
        <a href="#">{{ item.text }}</a>
      </li>

        </ul>
    </header>
</template>
<script>
import axios from 'axios';

export default {
    name: 'headerComponant',
    data() {
        return {
            logo: '/img/logo.svg', // Đường dẫn logo mặc định
            headerData: {
                list: []
            }
        };
    },
  mounted() {
    this.fetchData();
      },
       methods: {
 async fetchData() {
   try {
     const response = await axios.get('http://localhost:3000/api');
     console.log('Dữ liệu API trả về:', response.data);  // Kiểm tra dữ liệu từ API
     this.headerData = response.data.headerData[0];  // Lấy phần tử đầu tiên
   } catch (error) {
     console.error('Lỗi khi gọi API:', error);
   }
}

}
}
</script>

