<template>
	<div class="Detail">
		<div class="box">
			<img src="../img/list-1.jpg" alt="">
			<h2>长城汽车将推出新能源车型</h2>
		</div>
		<span>
		新能源汽车尤其是电动汽车在城市里驾驶感受确实不错，但是其过长的充电时间总是让人难以接受，即使是有了快充，这与燃油车5分钟就可以加满一箱油相比，两者差别巨大。<br>
		好在新能源汽车并不止用电这一种形式，除了用电，还有另外一种方式的能源供给方式正在逐步走上台面，那就是氢燃料电池车。氢燃料电池车加的是氢，排放的是水，续航里程足够长，最重要的是加氢速度很快。在很多人看来，这是新能源汽车的终极方向。	<br>
		可是在现阶段，氢燃料电池车的发展还有很多问题。所以多数车企现阶段对于氢燃料电池车还处于观望的状态，不过也有车企在氢燃料电池车领域主动布局，长城汽车就是其中非常重要的一支力量，按照长城汽车的规划，首辆基于专属平台的燃料电池车型计划于2020年进行展示，并在2022年北京冬奥会上推出首支燃料电池车队，最终将于2025年正式向市场推出成熟的氢燃料电池车型。
		</span>
	</div>
</template>

<script>
	export default{
		name:'Detail',
		props:{
			
		}
	}
</script>

<style>
	.box{
		width: 100%;
		height: 100px;
		border-bottom: 1px solid #4b0081;
	}
	.box img{
		width: 80px;
		height: 80px;
		float: left;
		margin-top: 10px;
		margin-left: 10px;
	}
	.box h2{
		font-size: 20px;
		line-height: 100px;
		text-align: center;
		font-weight: bold;
		color: #4B0081;
	}
	.Detail span{
		font-size: 20px;
		line-height: 26px;
		color: #000;
	}
</style>
