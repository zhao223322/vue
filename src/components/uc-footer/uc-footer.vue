<template>
	<div class="footer">
		<ul>
			<router-link class="footer-btn" to="/home" active-class="home-active" tag="li"><a href="javascript:;"><img src="./img/footer-1.png" alt=""><span>首页</span></a></router-link>
			<router-link class="footer-btn" to="/PhoneHome" active-class="phone-active" tag="li"><a href="javascript:;"><img src="./img/footer-2.png" alt=""><span>电话</span></a></router-link>
			<router-link class="footer-btn" to="/user" active-class="user-active" tag="li"><a href="javascript:;"><img src="./img/footer-5.png" alt=""><span>会员</span></a></router-link>
			<!-- <li class="footer-btn"><a href="../../homepage.vue"><img src="./img/footer-1.png" alt=""><span>首页</span></a></li>
			<li class="footer-btn"><a href="../../PhoneHome.vue"><img src="./img/footer-2.png" alt=""><span>电话</span></a></li>
			<li class="footer-btn"><a href="../../login.vue"><img src="./img/footer-5.png" alt=""><span>会员</span></a></li> -->
		</ul>
	</div>
</template>

<script>
	export default{
		name:'uc-footer',
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
	.footer ul .footer-btn a{
		/* width: 75px; */
		height: 45px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
