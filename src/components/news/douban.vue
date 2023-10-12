<template>
  <div style="width:100%;" v-if="newList.length">
    <Row>
      <Col  v-for="(item, index) in newList" :key="index">
    <div >
      <Card @click="handleGo(item.info.url)">
        <Badge class="title-index" type="info" :text="`评分第${index + 1}名`" /> 
        <Title :level="5" class="title-style">{{ item.title }} </title>  
        <Row>
          <Col flex="1">
          <img :src="item.info.imgurl" referrer="no-referrer" class="image-style ivu-mt-8"  v-if="item.info.imgurl" />
          </col>
          <Col flex="4">
            <Text class="hot-style">评分：{{ item.info.pingfen }} ------ 评价：{{ item.info.pingjia }}</Text>
          <div class="des-style" v-line-clamp="4">{{ item.info.yanyuan }}</div>
          </col>
        </Row>   
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
import { doubanMovie } from './../../api/index.js'
export default {
  name: 'i-news',
  computed: {
  },
  props:['type'],
  data() {
    return {
      name: 'John Doe',
      newName: '',
      isEditing: false,
      newList: [],
      aiText: '',
      result: ''
    }
  },
  mounted() {
    this.getInit()
  },
  methods: {
    getInit() {
      doubanMovie().then(res => {
        console.log(res)
        this.newList = res.data.data
      })
    },
    handleGo(url) {
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
.title-style {
  margin: 0px;
  margin-top: 8px!important;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.hot-style {
  color: #666;
  font-size: 12px;
  margin: 10px;
}
.title-index {
  display:inline
}
.image-style {
  width: 100%;
  display: block;
}

.des-style {
  margin: 8px;
  font-size: 12px;
}

.loading-style {
  margin: auto;
  margin-top: 20%;
  margin-left: 30%;
}
</style>