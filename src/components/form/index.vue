<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="id" >
            <Input v-model="formValidate.id" ></Input>
        </FormItem>
        <FormItem label="Name" prop="name">
            <Input v-model="formValidate.name" ></Input>
        </FormItem>
        <FormItem label="age" prop="age">
            <Input v-model="formValidate.age" ></Input>
        </FormItem>
        <FormItem label="sex" >
            <Input v-model="formValidate.sex" ></Input>
        </FormItem>
        <FormItem label="city" >
            <Input v-model="formValidate.city" ></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">登入</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">已登入列表</Button>
        </FormItem>
    </Form>
    <div>
        <h4 v-for="(item,index) in list" :key="index">{{ item.id }}--{{ item.name }}--{{ item.sex }}--{{ item.age }}--{{ item.city }}--</h4>
    </div>
</template>
<script>
  import { getList,addList } from './../../api/index.js'

    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    age: '',
                    id:1

                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    age: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                    ]
                },
                list:[]
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        addList(this.formValidate).then(()=>{
                            this.$Message.success('创建成功')
                        })    
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset () {
                getList().then(res=>{
                    this.list = res.data
                })
            }
        }
    }
</script>
