<template>
	<div id="main">
		<!-- 头部组件-->
		<Header title="书城"></Header>
		<div id="content">

			<div class="movie_menu">
				<el-dropdown>
					<span class="el-dropdown-link">
						分类<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<router-link tag="div" to="/book/classify">
							<el-dropdown-item>悬疑</el-dropdown-item>
						</router-link>
						<el-dropdown-item>随笔</el-dropdown-item>
						<el-dropdown-item>名著</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>



				<div class="hot_swtich">
					<router-link tag="div" to="/book/homepage" class="hot_item active">首页</router-link>
					<router-link tag="div" to="/book/recommend" class="hot_item">推荐</router-link>
				</div>
				<router-link tag="div" to="/book/search" class="search_entry">
					<el-button type="#00aa7f" icon="el-icon-search">搜索</el-button>
				</router-link>
			</div>
			<!--二级路由渲染-->
			<keep-alive>
				<router-view></router-view>
			</keep-alive>

		</div>
		<!-- 尾部组件-->
		<TabBar></TabBar>
	</div>
</template>
<script>
	import Header from '../../components/Header';
	import TabBar from '../../components/TabBar';
	export default {
		name: 'Book',
		components: {
			Header,
			TabBar
		}
	}
</script>
<style scoped>
	.el-dropdown-link {
		cursor: pointer;
		color: #000000;
		font-size: 20px;
	}

	.el-icon-arrow-down {
		font-size: 20px;
	}

	#content .movie_menu {
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #e6e6e6;
		display: flex;
		justify-content: space-between;
	}

	.movie_menu .city_name {
		margin-left: 20px;
		height: 100%;
		line-height: 45px;
	}

	.movie_menu .city_name.router-link-active {
		color: #00aa7f;
		border-bottom: 2px solid #00aa7f;
		box-sizing: border-box;
	}

	.movie_menu .hot_swtich {
		display: flex;
		height: 100%;
		line-height: 45px;
	}

	.movie_menu .hot_item {
		font-size: 15px;
		color: #666;
		width: 80px;
		text-align: center;
		margin: 0 12px;
		font-weight: 700;
	}

	.movie_menu .hot_item.router-link-active {
		color: #ef4238;
		border-bottom: 2px solid #ef4238;
	}

	.movie_menu .search_entry {
		margin-right: 20px;
		height: 100%;
		line-height: 45px;
	}

	.movie_menu .search_entry.router-link-active {
		color: #ef4238;
		border-bottom: 2px solid #ef4238;
		box-sizing: border-box;
	}

	.movie_menu .search_entry i {
		font-size: 24px;
		color: red;
	}
</style>
