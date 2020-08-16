<template>
	<div class="title">
		<p>新闻动态</p>
		<span>更多</span>
	</div>
</template>

<script>
	export default{
		name:'Title',
		methods:{},
		props:{
			
		},
		components:{},
		mounted(){},
		updated(){},
	}
</script>

<style scoped>
	.title{
		width: 375px;
		height: 50px;
		border-bottom: 1px solid #4B0081;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.title p{
		display: block;
		width: 64px;
		height: 30px;
		border-left: 3px solid #4b0081;
		font-size: 16px;
		line-height: 30px;
		margin-left: 10px;
		padding-left: 10px;
	}
	.title span{
		font-size: 14px;
		line-height: 30px;
		text-align: center;
		color: #333;
	}
</style>
