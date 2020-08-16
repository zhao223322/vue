<template>
	<div class="user">
		<div class="box">
			<img src="../img/login_user.jpg" alt="">
			<ul>
				<router-link class=".btn" to="/login" active-class="login-active" tag="li">登陆</router-link>
				<router-link class=".btn" to="/reg" active-class="login-active" tag="li">注册</router-link>
			</ul>
		</div>
		<ul class="list">
			<li>
				<img src="../img/icon-2.png" alt="">
				<p>个人信息</p>
				<span>></span>
			</li>
			<li>
				<img src="../img/icon-2.png" alt="">
				<p>个人信息</p>
				<span>></span>
			</li>
			<li>
				<img src="../img/icon-2.png" alt="">
				<p>个人信息</p>
				<span>></span>
			</li>
			<li>
				<img src="../img/icon-2.png" alt="">
				<p>个人信息</p>
				<span>></span>
			</li>
			<li>
				<img src="../img/icon-2.png" alt="">
				<p>个人信息</p>
				<span>></span>
			</li>
			<li>
				<img src="../img/icon-2.png" alt="">
				<p>个人信息</p>
				<span>></span>
			</li>
		</ul>
	</div>
</template>

<script>
	

	
	export default{
		name:'User',
		components:{
			
		}
	}
</script>

<style scoped>
	.box{
		width: 100%;
		height: 150px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.box img{
		display: block;
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.box ul{
		display: block;
		width: 120px;
		height: 30px;
		display: flex;
		justify-content: space-around;
	}
	.box ul li{
		width: 60px;
		font-size: 20px;
		line-height: 30px;
		text-align: center;
		color: #ff0000;
	}
	.box ul li:nth-child(1){
		border-right: 1px solid #000;
	}
	.box ul li:hover{
		color: skyblue;
	}
	.list li{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #4B0081;
	}
	.list li img{
		display: block;
		width: 30px;
		height: 30px;
		float: left;
		margin-top: 10px;
		margin-left: 20px;
		margin-right: 20px;
	}
	.list li p{
		font-size: 20px;
		line-height: 50px;
		color: black;
		float: left;
	}
	.list li span{
		font-size: 20px;
		line-height: 50px;
		color: #4B0081;
		float: right;
		font-weight: bold;
		margin-right: 20px;
	}
</style>
