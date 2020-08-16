<template>
  <div id="app">
	  <div class="box"></div>
	  <UcInput v-model="username" :label="'账号'"/>
	  <UcInput v-model="password" :label="'密码'" :type="'password'"/>
	  <Button2 :text="'注册'" @click="reg" :style="'background:#4b0081'"/>
	  {{errorMess}}
	 <!-- <router-link class="Button" to="/reg" active-class="reg-active" tag="li"></router-link> -->
  </div>
</template>

<script>
import UcNav from '../components/uc-nav/uc-nav.vue'
import UcInput from '../components/uc-input.vue'
import Button2 from '../components/button-2.vue'
import Footer from '../components/uc-footer/uc-footer.vue'
export default {
  name: 'reg',
  data(){
	  return { 
		  username:'',
		  password:'',
		  nikename:'',
		  errorMess:''
	  }
  },
  components: {
	UcNav,UcInput,Button2,Footer
  },
  mounted(){},
  updated(){},
  methods:{
    reg(){
      alert(1)
      let formData = new FormData();
      formData.append('username',this.username);
      formData.append('password',this.password);
      formData.append('nikename',this.nikename);
      
      let iconInputFile = document.getElementById('icon');
      formData.append('icon',iconInputFile.files[0]);//取出input file的文件体
      
      this.$axios({
        url:'/api/reg',
        method:'post',
        data:formData
      }).then(
        res => {
          if(res.data.err === 0){
            console.log('reg',res.data);
            this.$router.push('/login')
          }else{
            this.errorMess=res.data.msg
          }
        }
      )   
    },
    upload(){
      let iconInputFile = document.getElementById('icon');
      iconInputFile.click();//模拟input File 点击
    }
}}
</script>

<style scoped> 
	.box{
		width: 100%;
		height: 100px;
	}
</style>
