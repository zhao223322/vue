<template>
	<div class='header'>
		<span>LOGO</span>
	</div>
	
</template>

<script>
	export default {
		name:'Header',
		props:{
			bgColor:{
				type:String,
				default:'#4b0081'
			},
			borderWidth:{
				type:Number,
				default:1
			},
			bl:{
				type:Boolean,
				default:true
			}
		},
		computed:{
			
		},
	}
</script>

<style scoped>
	.header{
		width:100%;
		height: 60px;
	}
	.header span{
		display: block;
		font-size: 30px;
		line-height: 60px;
		text-align: center;
		font-weight: bolder;
		color:#fff;
		background: #4b0081;
	}
</style>
