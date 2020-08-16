<template>
  <div id="app">
	  <div class="box"></div>
	  <UcInput v-model="username" :label="'账号'"/>
	  <UcInput v-model="password" :label="'密码'" :type="'password'"/>
	  <span>{{errorMess}}</span>
	  <!-- <router-link class="Button" to="/login" active-class="user-active" tag="li"></router-link> -->
	  <Button2 :text="'登陆'" @click="login" :style="'background:#4b0081'"/>
	  <router-link class="Button" to="/reg" active-class="reg-active" tag="li"><Button2 :text="'注册'" :style="'background:#4b0081'"/></router-link>
  </div>
</template>

<script>
import UcNav from '../components/uc-nav/uc-nav.vue'
import UcInput from '../components/uc-input.vue'
import Button2 from '../components/button-2.vue'
import Footer from '../components/uc-footer/uc-footer.vue'
export default {
  name: 'login',
  data(){
	  return { 
		  username:'',
		  password:'',
		  errorMess:''
	  }
  },
  methods:{},
  components: {
	UcNav,UcInput,Button2,Footer
  },
  mounted(){},
  methods:{
	  login(){
		  this.$axios({
			  url:'/api/login',
			  data:{username:this.username,password:this.password},
			  method:'post',
		  }).then(
		  res =>{
			  console.log('login',res.data);
			  if(res.data.err == 0){
				  window.localStorage.setItem('user',Json.stringify(res.data))
				  if(this.$route.query.p){
					  this.$router.replace(this.$route.query.p)
				  }else{
					  this.$router.replace('/user')
				  }
			  }else{
				  this.errorMess = res.data.msg
			  }
		  })
	  }
  }
}
</script>

<style scoped> 
	.box{
		width: 100%;
		height: 100px;
	}
</style>