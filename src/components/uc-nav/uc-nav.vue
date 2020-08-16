<template>
	<div class='nav'>
		<span>LOGO</span>
	</div>
	
</template>

<script>
	export default {
		name:'uc-nav',
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
	.nav{
		width:100%;
		height: 60px;
	}
	.nav span{
		display: block;
		font-size: 30px;
		line-height: 60px;
		text-align: center;
		font-weight: bolder;
		color:#fff;
		background: #4b0081;
	}
</style>
