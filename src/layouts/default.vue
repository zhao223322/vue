<template>
	<div class="Default">
		<Loading v-show="$root.bLoading" bg-color="#ff0"/>
		<Header v-show="$root.bNav"/>
		<router-view>展示区</router-view>
		<Footer v-show="$root.bFoot"/>
	</div>
</template>

<script>
	
	import Header from './header.vue'
	import Footer from './footer.vue'
	import Home from '../pages/home.vue'
	import Loading from '../components/loading.vue'
	
	export default{
		name:'Default',
		props:{},
		data(){
			return{
				
			}
		},
		components:{Header,Home,Footer,Loading},
		methods:{
			checkRootDate(path){
				if(/home|follow|column/.test(path)){
					this.$root.bNav = this.$root.bFoot = true
				}
				// if(){
				// 	this.$root.bNav = this.$root.bFoot = false
				// }
				// if(path.includes('/user')){
				// 	this.$root.bNav = false;
				// 	this.$root.bFoot = true;
				// }
			}
		},
		watch:{
			$route:{
				handler(nextValue){
					let path = nextValue.path;
					this.checkRootDate(path)
				},
				// immediate:true
			}
		}
	}
	
	
</script>

<style>
</style>
