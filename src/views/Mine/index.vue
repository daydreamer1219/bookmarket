<template>
    <div id="main">
		 <Header title="my"></Header>
		<router-link tag="div" to="/book/homepage" >
       <el-button type="#00aa7f" icon="el-icon-back"></el-button>
	   </router-link>
        <div id="content">
            <Info></Info>
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
    import Header from '../../components/Header';
    import TabBar from '../../components/TabBar';
    import Info from '../../components/Info';
    export default {
        name:'Mine',
        components:{
            Header,
            TabBar,
            Info
        }
    }
</script>
