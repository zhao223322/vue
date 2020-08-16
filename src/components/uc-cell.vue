<template>
	<div class="uc-cell">
		<ul>
			<router-link class="uc-list" to="/detail" active-class="detail-active" tag="li">
				<img src="../img/list-1.jpg" alt="">
				<p>长城汽车将推更多轿车及新能源车型</p>
				<span>目前，我们从官方获得了长城汽车未来在轿车和新能源车...</span>
			</router-link>
			<router-link class="uc-list" to="/detail" active-class="detail-active" tag="li">
				<img src="../img/list-1.jpg" alt="">
				<p>长城汽车将推更多轿车及新能源车型</p>
				<span>目前，我们从官方获得了长城汽车未来在轿车和新能源车...</span>
			</router-link>
			<router-link class="uc-list" to="/detail" active-class="detail-active" tag="li">
				<img src="../img/list-1.jpg" alt="">
				<p>长城汽车将推更多轿车及新能源车型</p>
				<span>目前，我们从官方获得了长城汽车未来在轿车和新能源车...</span>
			</router-link>
			<router-link class="uc-list" to="/detail" active-class="detail-active" tag="li">
				<img src="../img/list-1.jpg" alt="">
				<p>长城汽车将推更多轿车及新能源车型</p>
				<span>目前，我们从官方获得了长城汽车未来在轿车和新能源车...</span>
			</router-link>
			<router-link class="uc-list" to="/detail" active-class="detail-active" tag="li">
				<img src="../img/list-1.jpg" alt="">
				<p>长城汽车将推更多轿车及新能源车型</p>
				<span>目前，我们从官方获得了长城汽车未来在轿车和新能源车...</span>
			</router-link>
			
		</ul>
	</div>
</template>

<script>
	export default{
		name:'uc-cell',
		props:{
			// data:{
			// 	type:Object,
			// 	required:true
			// },
			// index:{
			// 	type:Number,
			// 	default:null
			// },
			// url:{
			// 	type:String,
			// 	default:''
			// },
			// to:{
			// 	type:Object,
			// 	default:null
			// },
			// isAdd:{
			// 	type:Boolean,
			// 	default:false
			// }
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{
			// getDetail(){
			// 	if(this.url){
			// 		window.open(this.url,'_blank');
			// 	}else if (this.to){
			// 		console.log({name:this.to.name,params:this.to.params,query:this.to.query});
			// 		this.$router.push({name:this.to.name,params:this.to.params,query:this.to.query})
			// 	}
			// }
		}
		
	}
</script>

<style scoped>
	.uc-cell{
		width: 100%;
	}
	ul{
		width: 365px;
		height: 520px;
		margin-bottom: 80px;
	}
	.uc-list:active{
		background: #ff0;
	}
	ul .uc-list{
		width: 365px;
		height: 102px;
		border-bottom: 1px solid #ccc;
		margin: 0 auto;
	}
	ul .uc-list img{
		float: left;
		margin-right: 10px;
		margin-left: 10px;
		
	}
	ul .uc-list p{
		font-size: 16px;
		line-height: 28px;
		/* float: right; */
		margin-top: 10px;
	}
	ul .uc-list span{
		font-size: 14px;
		line-height: 25px;
		color: #333;
	}
</style>
