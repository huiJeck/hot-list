<template>
  <div style="width: 100%;" v-if="newList.length">
    <Row>
      <Col  v-for="(item, index) in newList" :key="index">
    <div>
      <Card @click="handleGo(isPhone ? item.mobilUrl : item.url)" dis-hover target>
          <Text class="hot-style "> <Badge type="info" :count="index+1" />  热度：{{ item.hot }}</Text>
        <Title :level="6" class="title-style">{{ item.title }}</title>
        <Row>
          <Col flex="120px">
          <Image :src="item.pic" fit="contain" :initial-index="item.index" class="image-style ivu-mt-8" v-if="item.desc" />
          </col>
          <Col flex="2">
          <div class="des-style" v-line-clamp="4">{{ item.desc }}</div>
          </col>
        </Row>   
      </Card>
    </div>
  </Col>
    </Row>
  </div>
  <Space size="large" class="loading-style" v-else>
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
</template>
<script>
import { baiduNews } from './../../api/index.js'
import { useWindowSize } from '@vueuse/core'

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
      result: '',
      isPhone: false
    }
  },
  mounted() {
    this.getInit()
    const { width } = useWindowSize()
    this.isPhone = width < 1000 ? true : false
  },
  methods: {
    getInit() {
      baiduNews(this.type).then(res => {
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
  cursor: pointer;
}

@media only screen and (min-width: 1200px) {
  .ivu-col{
  width: 100%;
}
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
::v-deep .ivu-image-img {
  max-height: 80px;
}
::v-deep .ivu-card-body {
  padding: 12px 8px;
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