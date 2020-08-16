<template>
	<div class="Button">
		<div class="box">
			<input
			type="button"
			:value="text"
			:style="{background:bgColor}"
			>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Button',
		props:{
			text:{
				type:String,
				default:'按 钮'
			},
			bgColor:{
				type:String,
				dafault:'#ccc'
			},
		}
	}
</script>

<style>
	.Button{
		width: 100%;
	}
	.Button .box{
		width: 100%;
		height: 50px;
		margin: 0 auto;
		margin-top: 30px;
	}
	.Button input{
		display: block;
		width: 90%;
		height: 50px;
		margin: 0 auto;
		color: #fff;
		font-size: 20px;
		line-height: 50px;
		text-align: center;
	}
	.Button .box:active{background: #ff0;}
</style>
