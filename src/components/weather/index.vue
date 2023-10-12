<template>
  <div style="width:100%;" v-if="newList.length">
    <Card>
       <Text>{{ newList }}</Text>
    </Card>
  </div>

</template>
<script>
import { weather, getinfo } from './../../api/index.js'

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

      getinfo().then(res => {
        console.log(res)
        this.info = res.data
      })
    
    },
  getWeather(ipcity) {
    weather(ipcity).then(res => {
        console.log(res)
        this.newList = res.data.data
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
.title-style {
  margin: 0px;
  margin-top: 8px!important;
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