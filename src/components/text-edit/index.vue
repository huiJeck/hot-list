<template>
    <div class="i-action ivu-mb-8" v-width="200">
        <Text class="i-computed-list-edit i-font-12 " @click="handleEdit" v-if="!showEditName">
            <span class="i-line-1"> {{ reName || '设置名称备注' }}</span>
            <!-- <i-icon class="ivu-ml-4 i-vertical-middle "  type="ios-create-outline" /> -->
            <Icon class="ivu-ml-4 i-vertical-middle " type="ios-create-outline" />
        </Text>
        <Input ref="input" class="i-computed-list-input" v-model="reName" v-else :border="false"
            @on-enter="showEditName = false" @on-blur="showEditName = false" />
    </div>
</template>
<script>
export default {
    name: 'i-text-edit',
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    computed: {

    },
    data() {
        return {
            showEditName: false,
            reName: this.name,
        }
    },
    created() {
        // this.reName= this.value
    },
    methods: {
        handleEdit() {
            this.showEditName = true
            this.$nextTick(() => {
                this.$refs.input.focus({
                    cursor: 'end'
                });
            })
        },
    }
}
</script>
