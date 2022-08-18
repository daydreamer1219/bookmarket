// book路由
export default {
    path:'/book',
    //按需载入的方式
    component:()=>import('../../views/Book'),
    // 二级路由，使用children进行配置
    children:[
        {
            path:'homepage',
            component:()=>import('../../components/HomePage')
        },
        {
            path:'recommend',
            component:()=>import('../../components/Recommend')
        },
        {
            path:'search',
            component:()=>import('../../components/Search')
        },
		{
		    path:'classify',
		    component:()=>import('../../components/Classify')
		},
        {
            path:'/book',
            redirect:'/book/homepage'
        }
    ]
}