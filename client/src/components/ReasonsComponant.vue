<template>
    <div class="module -break">
  <div class="index-reasons js-break">
<div class="box">
  <p class="att">
    {{reasonsData.att}}
  </p>
  <p class="bg-title">
<span>{{reasonsData.bgtitlespan}}</span>{{reasonsData.bgtitle}}
  </p>
  <p class="note">
    <span>
      {{reasonsData.note}}
    </span>
  </p>
  <div class="info">
    <div class="article" v-for="(item,index) in reasonsData.article" :key="index">
      <div class="text-box">
        <p class="num">
          <img :src="item.img" alt="">
        </p>
        <p class="title">
          {{item.title}}
        </p>
        <p class="text" style="white-space: pre-line">
          {{item.text}}
        </p>
      </div>
      <p class="image">
        <img :src="item.img02" alt="">
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
    name: 'index-reasons',
    data() {
        return {
            reasonsData: {
                att: '',
                bgtitle: '',
                bgtitlespan: '',
                note: '',
                article: [],
            },
        };
    },
    mounted() {
        this.fetchData();  // Gọi fetchData khi component được mount
    },
    methods: {
        async fetchData() {
            try {
                // Gọi API để lấy dữ liệu
                const response = await axios.get('http://localhost:3000/api');  // Đảm bảo URL API là chính xác
                this.reasonsData = response.data.reasonsData[0];  // Lấy dữ liệu và gán vào reasonsData
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
            }
        },
    },
};
</script>