// 导入 createApp 函数
import { createApp } from 'vue'

// 导入 ViewUIPlus 组件库
import ViewUIPlus from 'view-ui-plus'

// 导入 App 组件
import App from './App.vue'

// 导入 ViewUIPlus 样式文件
import 'view-ui-plus/dist/styles/viewuiplus.css'

// 导入自定义样式文件
// import './assets/main.css'

// 创建应用程序实例
const app = createApp(App)

// 安装 ViewUIPlus 组件库
app.use(ViewUIPlus)

// 将应用程序实例挂载到页面中
app.mount('#app')

