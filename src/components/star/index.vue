<template>
  <div class="ivu-m">
    <Form ref="formValidate" :model="formValidate" :label-width="70">
      <FormItem label="您的星座">
        <Select v-model="formValidate.star">
          <Option v-for="item in starList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      <FormItem label="运势时间">
        <Select v-model="formValidate.time">
          <Option v-for="item in timeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>

      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">生成星座运势</Button>
      </FormItem>
    </Form>
    <div v-if="starData?.todo?.yi">
      <Title :level="5">{{ starData.title }}{{ starData.type }}({{ starData.time }})解析如下：</Title>
      <Alert type="success" show-icon>宜：{{ starData.todo.yi }}</Alert>
      <Alert type="error" show-icon>忌：{{ starData.todo.ji }}</Alert>
      <Alert type="warning">短评：{{ starData.shortcomment }}</Alert>
      <Alert type="info">幸运数字：{{ starData.luckynumber }}</Alert>
      <Alert type="info">幸运颜色：{{ starData.luckycolor }}</Alert>
      <Alert type="info">速配星座：{{ starData.luckyconstellation }}</Alert>

      <Alert>
        综合运势： <Tag color="blue" class="num-style" >指数：{{ starData.index.all }}</Tag>
        <template #desc>{{ starData.fortunetext.all }}</template>
      </Alert>
      <Alert>
        健康运势： <Tag color="blue" class="num-style" >指数：{{ starData.index.health }}</Tag>
        <template #desc>{{ starData.fortunetext.health }}</template>
      </Alert>
      <Alert>
        爱情运势： <Tag color="blue" class="num-style" >指数：{{ starData.index.love }}</Tag>
        <template #desc>{{ starData.fortunetext.love }}</template>
      </Alert>
      <Alert>
        财富运势： <Tag color="blue" class="num-style" >指数：{{ starData.index.money }}</Tag>
        <template #desc>{{ starData.fortunetext.money }}</template>
      </Alert>
      <Alert>
        学业工作： <Tag color="blue" class="num-style" >指数：{{ starData.index.work }}</Tag>
        <template #desc>{{ starData.fortunetext.work }}</template>
      </Alert>
    </div>
  </div>
</template>
<script>
import { starInfo } from './../../api/index.js'
export default {
  name: 'i-star',
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
      starList: [
        {
          value: 'aries',
          label: '白羊座'
        },
        {
          value: 'taurus',
          label: '金牛座'
        },
        {
          value: 'gemini',
          label: '双子座'
        }, {
          value: 'cancer',
          label: '巨蟹座'
        }, {
          value: 'leo',
          label: '狮子座'
        }, {
          value: 'virgo',
          label: '处女座'
        }, {
          value: 'libra',
          label: '天秤座'
        }, {
          value: 'scorpio',
          label: '天蝎座'
        }, {
          value: 'sagittarius',
          label: '射手座'
        },
        {
          value: 'capricorn',
          label: '摩羯座'
        },
        {
          value: 'aquarius',
          label: '水瓶座'
        },
        {
          value: 'pisces',
          label: '双鱼座'
        }
      ],
      timeList: [
        {
          value: 'today',
          label: '今天'
        }, {
          value: 'nextday',
          label: '明天'
        },
        {
          value: 'week',
          label: '一周'
        },
        {
          value: 'month',
          label: '一月'
        },
        {
          value: 'year',
          label: '一年'
        }
      ],
      formValidate: {
        star: 'pisces',
        time: 'today'
      },
      starData: ''
    }
  },
  mounted() {
    this.handleSubmit()
  },
  methods: {
    handleSubmit(name) {
      starInfo({ type: this.formValidate.star, time: this.formValidate.time }).then(res => {
        this.starData = res.data.data
      })
    },
  }
}
</script>
<style scoped>
.ivu-col {
  width: 100%;
  height: 170px;
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

.title-style {
  margin: 0px;
  margin-top: 8px !important;
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