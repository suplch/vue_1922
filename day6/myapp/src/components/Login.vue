<template>
    <div class="login">
        {{ username }}: <input ref="uname" /><br/>
        {{ password }}: <input ref="upwd" type="password" /> <br/>
        <button v-on:click="startLogin">登录</button>
    </div>
</template>

<script>
export default {
    props: ['username', 'password'],
    methods: {
        startLogin() {
            this.$emit('dologin', {
                uname: this.$refs.uname.value,
                upwd: this.$refs.upwd.value
            });
        }
    }
}
</script>

<style scope>
    .login {
        border: solid 5px red;
        width: 200px;
        height: 100px;
    }
</style>