<template>
  <div style="width:100%;">
    <Card v-height="400">
      <Title :level="4">智能机器人</Title>
      <Input v-model="aiText" search :autosize="{ minRows: 2, maxRows: 5 }" placeholder="请输入问题和我聊天吧~" enter-button="回复"
        @on-search="handleInput" />
      <Paragraph style="margin-top:20px">
        {{ result.displayText }}
      </Paragraph>
    </Card>
  </div>
</template>
<script>
import { getHotList, aiChat } from './../../api/index.js'
export default {
  name: 'chart',
  computed: {
  },
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
      getHotList().then(res => {
        console.log(res)
        this.newList = res.data.result
      })
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
</style>