<template>
    <div id="footer">
        <!--router-link>组件支持用户在具有路由功能的应用中单击导航。通过to属性指定目标地址，默认渲染为带有正确连接的<a>标签，可以通过配置tag属性生成别的标签。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的css类名-->
        <ul>
            <router-link tag="li" to="/book">
                <li>书城</li>
            </router-link>
            <router-link tag="li" to="/collection">
                <li>收藏</li>
            </router-link>
            <router-link tag="li" to="/mine">               
                <li>我的</li>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>
    #footer{
        width: 100%;
        height: 50px;
        background: white;
        border-top: 2px solid #ebe8e3;
        position: fixed;
        left: 0;
        bottom: 0;
    }
    #footer ul{
        display: flex;
        text-align: center;
        height: 50px;
        align-items: center;
		list-style:none;
    }
    #footer ul li{
        flex: 1;
        height: 40px;
		list-style:none;
    }
    #footer li.active{color: #00aa00;}
    /* router-link-active:路由中自带的样式 选中时的颜色*/
    #footer li.router-link-active{color: #00aa00;}
    #footer ul p{
        font-size: 5px;
        line-height: 20px;
    }
</style>