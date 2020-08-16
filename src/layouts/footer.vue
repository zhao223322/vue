<template>
	<div class="footer">
		<ul>
			<!-- <li><img src="../components/uc-footer/img/footer-1.png" alt=""><span>首页</span></li>
			<li><img src="../components/uc-footer/img/footer-2.png" alt=""><span>电话</span></li>
			<li><img src="../components/uc-footer/img/footer-5.png" alt=""><span>会员</span></li> -->
			<router-link class="footer-btn" to="/home" active-class="home-active" tag="li"><img src="../components/uc-footer/img/footer-1.png" alt=""><span>首页</span></router-link>
			<router-link class="footer-btn" to="/PhoneHome" active-class="phone-active" tag="li"><img src="../components/uc-footer/img/footer-2.png" alt=""><span>电话</span></router-link>
			<router-link class="footer-btn" to="/user" active-class="login-active" tag="li"><img src="../components/uc-footer/img/footer-5.png" alt=""><span>会员</span></router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'Footer',
		props:{
			
		}
	}
</script>

<style scoped>
	.footer{
		width: 100%;
		height: 45px;
		background: #4b0081;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.footer ul{
		width: 100%;
		height: 45px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.footer ul .footer-btn{
		width: 33%;
		height: 45px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.footer ul .footer-btn:active{
		background: #ff0;
	}
	.footer ul .footer-btn img{
		width: 20px;
		height: 21px;
	}
	.footer ul .footer-btn span{
		font-size: 14px;
		color: #fff;
	}
	
</style>
