<template>
  <div class="waterfall" :style="styleStr">
    <div class="item" v-for="(item,index) in imgList" :key="item" :style="`grid-row: var(--item-span-${index})`">
      <img class="img" :src="`http://wlog.cn/demo/waterfall/images/0${getNum(item)}.jpg`" alt="" />
      <p>{{ index }}</p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'i-img-list',
  data() {
    return {
      imgList: 12,
      styleStr:''
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this.setHeight()
    })
  },
  methods: {
    getNum(num) {
      return num < 10 ? `0${num}` : num
    },
    setHeight() {
       const _boxList = document.getElementsByClassName('item');
       for (let i = 0; i<_boxList.length; i++) {
        const img = _boxList[i].querySelector('.img')
        let height = img.offsetHeight
        console.log(img.offsetHeight,'_boxList2116666')
        let span = parseInt(height/ 20) 
        this.styleStr += `--item-span-${i}: auto / span ${span};`
       }
    }
  }
}
</script>
<style scoped>      
      .waterfall {
         display: grid;
         grid-template-columns: repeat(auto-fill, minmax(233px, 1fr));
         /* grid-gap: 20px; */
         grid-auto-flow: row dense;
         grid-auto-rows:20px;
      }

      .waterfall .item {
         width: 100%;
         height: auto;
         color: #ddd;
         position: relative;
      }
      .item p {
          color: #fff;
          position:absolute;
          top:20px;
          left:0px;
          font-size: 16px;
         }
      .waterfall .item .img {
        width: 100%;
        display: block;
      }
      /* .waterfall .item:nth-of-type(3n+1) {
         grid-row: auto / span 5;
      }

      .waterfall .item:nth-of-type(3n+2) {
         grid-row: auto / span 6;
      }

      .waterfall .item:nth-of-type(3n+3) {
         grid-row: auto / span 8;
      } */
</style>