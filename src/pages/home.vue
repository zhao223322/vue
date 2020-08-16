<template>
	<div class="home">
		<Banner></Banner>
		<Button></Button>
		<Title></Title>
		<UcCell></UcCell>
		
	</div>
</template>

<script>
	import Banner from '../components/swipe/index.vue'
	import Button from '../components/Button.vue'
	import Title from '../components/title.vue'
	import UcCell from '../components/uc-cell.vue'
	export default{
		name:'Home',
		props:{},
		data(){
			return{
				
			}
		},
		components:{
			Banner,Button,Title,UcCell
		},
	}
	
</script>

<style>
</style>
