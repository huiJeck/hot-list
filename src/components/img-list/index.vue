<template>
  <div class="wrap">

    <div class="box" v-for="item in imgList" :key="item">
      <img :src="`http://wlog.cn/demo/waterfall/images/0${getNum(item)}.jpg`" alt="" />
    </div>

    <Button class="button-more" type="primary" @click="more">加载更多</Button>
  </div>
</template>
<script>

export default {
  name: 'i-img-list',
  computed: {
  },
  props: ['type'],
  data() {
    return {
      name: 'John Doe',
      newName: '',
      isEditing: false,
      newList: [],
      aiText: '',
      result: '',
      imgList: 6
    }
  },
  mounted() {
    // 在网页上的资源全部加载完成后再运行代码
    this.$nextTick(() => {
      this.render()

    })
    // 监听窗口变化
    window.onresize = () => {
      return (() => {
        this.$nextTick(() => {
          this.render()
        })
      })()
    }

  },
  methods: {
    getNum(num) {
      return num < 10 ? `0${num}` : num
    },
    handleReachEdge() {
      console.log('出发')
      return new Promise(resolve => {
        setTimeout(() => {
          this.imgList += 6
          console.log(this.imgList, 'this.imgList')
          resolve();
        }, 1000);
      });
    },
    more() {
      this.imgList += 6
      if(this.imgList > 36) {
        this.imgList = 36
        alert('没数据了')
         return 
      }
      console.log(this.imgList, 'this.imgList')
      this.$nextTick(() => {
        this.render()
      })
   
    },
    // 根据元素宽度生成列数从而实现响应式
    createColumns(ele) {
      let width = ele.offsetWidth;
      let _column = 5;
      if (width >= 1200) {
        _column = 5;
      }

      if (width < 1200 && width >= 992) {
        _column = 4;
      }

      if (width < 992 && width >= 768) {
        _column = 3;
      }

      if (width < 768) {
        _column = 2;
      }
      if (width < 360) {
        _column = 1;
      }
      return _column;
    },
    render() {
      let _wrap = document.querySelector(".wrap"); //父容器
      let _column = this.createColumns(_wrap); //列数
      let _spacing = 10; //间距
      let _colWidth =
        (_wrap.offsetWidth - (_column - 1) * _spacing) / _column; //列宽
      let _boxList = document.querySelectorAll(".box");
      let _arr = []; //高度数组
      for (let i = 0; i < _boxList.length; i++) {
        _boxList[i].style.width = _colWidth + "px";
        if (i < _column) {
          _arr.push(_boxList[i].offsetHeight); //将每一列的高度存放到_arr数组中
          _boxList[i].style.top = 0;
          _boxList[i].style.left = (_colWidth + _spacing) * i + "px";
        } else {
          let min = Math.min(..._arr); //最小高度
          let index = _arr.indexOf(min); //最小高度的索引
          _boxList[i].style.top = min + _spacing + "px"; //第二列居上距离
          _boxList[i].style.left = (_spacing + _colWidth) * index + "px"; //第二列居左距离
          _arr[index] += _boxList[i].offsetHeight + _spacing;
        }
      }
    }

  }
}
</script>
<style scoped>
.wrap {
  position: relative;
  margin: 10px;
  max-width: 1200px;
  margin: 0 auto;
  /* width: 1200px; */
  border: solid 1px red;
}

.box {
  position: absolute;
  /* 图像灰度 */
  filter: grayscale(0.5);
  transition: left 0.5s, top 0.5s;
}

.box img {
  display: block;
  width: 100%;
}

.button-more {
  position: fixed;
  left: 0;
  bottom: 80px;
}
</style>