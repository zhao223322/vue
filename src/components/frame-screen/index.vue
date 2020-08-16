<template>
	<div class="detail" v-if="type === 'detail'  ">
		<div class="UcNav">123</div>
		<div class="banner">123</div>
		<div class="box"></div>
		<div class="title">123456789</div>
		<div class="list">12</div>
		<div class="footer">123</div>
	</div>
	<div class="list" v-else-if="list"></div>
</template>

<script>
	export default{
		name:'frame-screen',
		props:{
			type:{
				type:String,
				default:'detail'
			}
		}
	}
</script>

<style>
</style>
