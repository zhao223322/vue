<template>
	<div class="box">
		<ul class="Button">
			<!-- <input 
			type="button"
			:value="text"
			:style="{background:bgColor}"
			@click="$emit('click')"
			class='login-btn'
			> -->
				<li><img src="../img/button-1.jpg" alt=""><span>车身护理</span></li>
				<li><img src="../img/button-2.jpg" alt=""><span>内饰养护</span></li>
				<li><img src="../img/button-3.jpg" alt=""><span>车内清洁</span></li>
				<li><img src="../img/button-4.jpg" alt=""><span>美容用品</span></li>
				<li><img src="../img/button-5.jpg" alt=""><span>美容知识</span></li>
				<li><img src="../img/button-6.jpg" alt=""><span>会员中心</span></li>
		</ul>
	</div>
</template>

<script>
	export default {
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

<style scoped>
	.box{
		width: 375px;
		height: 156px;
		position: relative;
	}
	.box ul{
		width: 375px;
		height: 156px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.box .Button li{
		width: 33.3%;
		height: 63px;
	}
	.box .Button li img{
		display: block;
		width: 114px;
		height: 63px;
		background-size: 100% 100%;
		position: absolute;
		z-index: -10;
	}
	.box .Button li span{
		font-size: 14px;
		text-align: center;
		line-height: 63px;
		color: #fff;
		margin-left: 30px;
	}
</style>
