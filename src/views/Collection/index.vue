<template>
    <div id="main">
        <Header title="Collection"></Header>
        <div id="content">
            <Collection></Collection>
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
    import Header from '../../components/Header';
    import TabBar from '../../components/TabBar';
    import Collection from '../../components/Collection';
    export default {
        name:'Cinema',
        components:{
            Header,
            TabBar,
            Collection
        }
    }
</script>
<style scoped>
#content .cinema_menu{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
}
</style>