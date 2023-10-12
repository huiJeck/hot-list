<template>
    <div class="layout">
        <!-- <Alert type="warning" class="alert-style">实时新闻热榜，建议收藏网址，以便快速了解</Alert> -->
        <Tabs size="small" :value="tabs" @on-click="handleTab">
            <TabPane label="新闻热榜"></TabPane>
            <TabPane label="电影热榜"></TabPane>
            <TabPane label="星座运势"></TabPane>
            <!-- <TabPane label="数独"></TabPane> -->
        </Tabs>

        <div v-if="tabs === 0">
            <Menu mode="horizontal" active-name="1-1" class="menu-style">
                <MenuItem :name="item.name" v-for="item in menuList" :key="item.id" @click="active = item.name">
                <span>{{ item.label }}</span>
                </MenuItem>
            </Menu>

            <Content style="height:100%">
                <news type="baiduRD" v-if="active === '1-1'"></news>
                <douyin type="douyinHot" v-if="active === '1-2'"></douyin>
                <douyin type="wbHot" v-if="active === '1-3'"></douyin>
                <news type="zhihuHot" v-if="active === '1-4'"></news>
                <news type="bili" v-if="active === '1-5'"></news>
                <news type="douban" v-if="active === '1-6'"></news>
                <douyin type="itInfo" v-if="active === '1-7'"></douyin>
                <news type="36Ke" v-if="active === '1-8'"></news>
            </Content>
        </div>

        <div v-if="tabs === 1">
            <douban-movie></douban-movie>
        </div>

        <div v-if="tabs === 2">
            <star></star>
        </div>

        <!-- <div v-if="tabs === 3" style="height: 100%">
            <iframe src="https://zh888.gitee.io/number-game/" frameborder="0" width="100%" height="800px"></iframe>   
        </div> -->
        <div class="bottom-height"></div>
    </div>

</template>
<script>
// import sayList from './components/say-list/index.vue'
// import Form from './components/form/index.vue'
// import login from './components/login/index.vue'
import news from './components/news/index.vue'
import douyin from './components/news/douyin.vue'
import doubanMovie from './components/news/douban.vue'
// import imgList from './components/img-list/index.vue'
import star from './components/star/index.vue'
// import chart from './components/chart/index.vue'
export default {
    components: {
        news,
        douyin,
        doubanMovie,
        star
    },
    data() {
        return {
            tabs: 0,
            name: '张三a',
            isCollapsed: false,
            active: '1-1',
            menuList: [
                {
                    id: 1,
                    name: '1-1',
                    label: '百度',
                    icon: 'ios-navigate'
                },
                {
                    id: 3,
                    name: '1-3',
                    label: '微博',
                    icon: 'ios-navigate'
                },
                {
                    id: 7,
                    name: '1-7',
                    label: 'IT',
                    icon: 'ios-navigate'
                },
                {
                    id: 4,
                    name: '1-4',
                    label: '知乎',
                    icon: 'ios-navigate'
                },
                {
                    id: 5,
                    name: '1-5',
                    label: '哔哩',
                    icon: 'ios-navigate'
                },
                {
                    id: 2,
                    name: '1-2',
                    label: '抖音',
                    icon: 'ios-navigate'
                },
                {
                    id: 6,
                    name: '1-6',
                    label: '豆瓣',
                    icon: 'ios-navigate'
                },
                {
                    id: 8,
                    name: '1-8',
                    label: '36氪',
                    icon: 'ios-navigate'
                }
            ]
        };
    },
    methods: {
        handleTab(name) {
            console.log(name, ';')
            this.tabs = name
        }
    }
}
</script>
<style scoped>
.layout {
    width: 100%;
    position: relative;
}


.alert-style {
    margin-bottom: 0;
    font-weight: bold;
}

::v-deep .ivu-tabs-bar {
    margin-bottom: 0px !important;
}

::v-deep .ivu-tabs-nav-scroll {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 22222;
    background-color: white;
    border-top: solid 1px #ececec;
}

@media only screen and (min-width: 1200px) {
    .layout {
        width: 600px;
        margin: auto;

        ::v-deep .ivu-layout-content {
            /* transform: scale(1.2); */
        }
    }

    ::v-deep .ivu-tabs-nav-scroll {
        left: 50%;
        width: 600px;
        transform: translateX(-50%)
    }
}

::v-deep .ivu-tabs-tab {
    font-weight: bold;
    font-size: 16px !important;
}

::v-deep .ivu-menu-item {
    padding: 0 10px !important;
}

::v-deep .ivu-card-bordered {
    border: none;
    border-bottom: solid 1px #ececec;
}

.bottom-height {
    height: 60px;
}

.menu-style {
    z-index: 999;
    height: 40px;
    line-height: 40px;
    width: 100%;
}

.menu-style .ivu-menu-item {
    float: left;
    display: block;
}

.layout-con {
    height: 100%;
    width: 100%;
}

.menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
}

.menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
}

.collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
}

.collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
}

.dev-run-preview .dev-run-preview-edit {
    display: none
}</style>