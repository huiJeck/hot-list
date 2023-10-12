<template>
  <div style="width:100%;" v-if="newList.length">
    <Row>
      <Col  v-for="(item, index) in newList" :key="index">
      <div >
        <Card @click="handleGo(item.mobilUrl)"  dis-hover target>
          <Title :level="6">{{ item.title }}</title>
          <div class="des-style"><Badge type="info" :count="index+1" /> 热度：{{ item.hot || 'hot' }}</div>
        </Card>
      </div>
    </col>
        </Row>  
  </div>
  <Space size="large" class="loading-style" v-else>
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
    </Space>
</template>
<script>
import { baiduNews } from '../../api/index.js'
import { useWindowSize } from '@vueuse/core'
export default {
  name: 'i-news',
  props:['type'],
  computed: {
  },
  data() {
    return {
      name: 'John Doe',
      newName: '',
      isEditing: false,
      newList: [],
      aiText: '',
      result: '',
      isPhone: false
    }
  },
  mounted() {
    const { width } = useWindowSize()
    this.isPhone = width < 1000 ? true : false
    this.getInit()
  },
  methods: {
    getInit() {
      baiduNews(this.type).then(res => {
        console.log(res)
        this.newList = res.data.data
      }).finally(()=> {
      })
    },
    handleGo(url){
      window.location.href = url
    }, 
    handleInput() {
      aiChat({ text: this.aiText }).then(res => {
        console.log(res)
        this.result = res.data.result
      })
    }
  }
}
</script>
<style scoped>
.ivu-col{
  width: 100%;
  cursor: pointer;
}
.box {
  position: fixed;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #3498db;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
}
.image-style {
  width: 100%;
  display: block;
}
.des-style {
  font-size: 12px;
}
.loading-style {
  margin: auto;
  margin-top: 20%;
  margin-left: 30%;
}
::v-deep .ivu-card-body {
  padding: 12px 0;
}
</style>