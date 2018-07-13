app.controller("backStageCtrl",function ($http,$state,yahaha) {

    var vm = this;
    // serviceHTTP.moduleHTTP().then(function successCallback(res) {
    //     // 请求成功执行代码
    //     console.log(response.data.message);
    //     if(response.data.message === "success") {
    //         sessionStorage.setItem("logo","233");
    //         $state.go('backStage');
    //     }
    //     else {
    //     }
    // }, function errorCallback(res) {
    //     // 请求失败执行代码
    // });
    vm.logo = sessionStorage.getItem("logo");//验证是否登录
    if (vm.logo !== "233"){
        $state.go('login');
    }

    vm.yahaha= yahaha;
    vm.sideBar= [];//用于存储处理过后的数组对象
    console.log(vm.yahaha);
    function change(e){
        for(var i = 0 ;i<e.length;i++){//遍历每一个元素
            if(e[i].parentID === 0){//当为父级元素时开始判断
                var obj = {};//创建一个对象用于存储父级标签名，子级标签的信息
                obj.sideBarTitle = e[i].name;
                obj.id = e[i].id;
                obj.sideBarContent = [];//为对象添加属性
                for(var j = 0;j<e.length;j++){//开始第二次遍历，
                    if(e[j].parentID === e[i].id){//当元素的parentd和  父级元素id一致时
                        obj.sideBarContent.push(e[j])//把这个元素添加到对象的一条属性中去，用于第二次repeat
                    }
                }
                vm.sideBar.push(obj);//把obj添加到sideBar中去。
            }
        }
    }
    change(vm.yahaha);
    console.log(vm.sideBar);

    vm.titleIndex = function (e) {
        vm.sideBarTitleIndex = (vm.sideBarTitleIndex === e)? undefined : e;
    };
    //一级菜单
    vm.content = function (e,index) {
        vm.sideBarContent = e;
        sessionStorage.setItem("title",index);
        sessionStorage.setItem("content",e);
    };
    //二级菜单
    vm.sideBarContent = sessionStorage.getItem("content");
    vm.sideBarTitleIndex = sessionStorage.getItem("title");
    //刷新也保持高亮

    vm.exit = function(){
        if(confirm("确定要退出登录嘛")){
            alert("ヾ(￣▽￣)Bye~Bye~");
            sessionStorage.clear();
            $state.go('login');
        }

    }
});

app.constant('yahaha',[
    {
        parentID:0,
        name: '业务管理',
        id: 9

    },
    {
        parentID:9,
        name: '用户管理',
        id: 10,
        url:'backStage.user'

    },
    {
        parentID:9,
        name: '债权管理',
        id: 11,
        url:'backStage.debt'

    },
    {
        parentID:9,
        name: '产品管理',
        id: 12,
        url:'backStage.product'

    },
    {
        parentID:0,
        name: '运营管理',
        id: 99

    },
    {
        parentID:99,
        name: 'banner图',
        id: 100,
        url:'backStage.banner'

    },
    {
        parentID:99,
        name: '鼎力推荐',
        id: 101,
        url:'backStage.recommend'
    },
    {
        parentID:99,
        name: '消息管理',
        id: 102,
        url:'backStage.message'
    },
    {
        parentID:99,
        name: '意见反馈',
        id: 103,
        url:'backStage.feedback'
    },
    {
        parentID:0,
        name: '后台管理',
        id: 50

    },
    {
        parentID:50,
        name: '密码管理',
        id: 51,
        url:'backStage.password'
    },
    {
        parentID:50,
        name: '账号管理',
        id: 52,
        url:'backStage.account'
    },
    {
        parentID:50,
        name: '模块管理',
        id: 53,
        url:'backStage.module'
    },
    {
        parentID:50,
        name: '角色管理',
        id: 54,
        url:'backStage.role'
    },
]);