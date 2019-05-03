<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <div>{{site_name}}</div>
    <div>isLogin=>{{isLogin}}</div>
    <div>powered by :{{version}}</div>
    <div>未读消息数量 :{{msg_num}}</div>
    <button @click="editSiteName">修改网站名称</button>
    <button @click="loginHandle">登 录</button>
    <div>
      <icon-svg icon="tupian" :size="50"></icon-svg>
    </div>
  </div>
</template>

<script>

  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  import {login} from '@/api/user'

  export default {
    name: 'home',
    components: {

    },
    computed: {
      // ...es6展开操作符
      ...mapState(['site_name', 'version', 'msg_num']),
      ...mapGetters(['isLogin'])
    },
    methods: {
      ...mapActions(['editMsgNum']),
      ...mapMutations(['SET_SITE_TITLE']),
      editSiteName() {
        this.editMsgNum()
        this.$store.commit('SET_VERSION', 'version:laravel5.8')
        this.SET_SITE_TITLE('蔡关荣博客')
      },
      loginHandle() {
        const account = 'caiguanrong'
        login({account}).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>
