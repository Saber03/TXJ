var app = angular.module("txj", ["ngAnimate", "ui.router","ui.bootstrap","oc.lazyLoad"]);

//懒加载
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", "$ocLazyLoadProvider",
    function ($provide, $compileProvider, $controllerProvider, $filterProvider, $ocLazyLoadProvider) {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
    }
]);

app.config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        // 登陆页面
        .state('login',{
            url:"/login",
            templateUrl: 'view/html/login.html',
            controller: 'loginCtrl',
            controllerAs:'vm'

        })

        // 后台页面
        .state('backStage',{
            url:"/backStage",
            templateUrl: 'view/html/backStage.html',
            controller: 'backStageCtrl',
            controllerAs:'vm'

        })

        // 用户管理
        .state('backStage.user',{
            url:"/user",
            templateUrl: 'view/html/business/user.html',
            controller: 'userCtrl',
            controllerAs:'vm'

        })

        // 用户详情
        .state('backStage.userDetailed',{
            url:"/userDetailed?id",
            templateUrl: 'view/html/business/userDetailed.html',
            controller: 'userDetailedCtrl as vm',
            // resolve: {
            //     loadMyFile: [
            //         "$ocLazyLoad",
            //         function ($ocLazyLoad) {
            //             return $ocLazyLoad.load("js/ctrl/userDetailedCtrl.js");
            //         }
            //     ]
            // }

        })

        // 用户管理交易记录查看
        .state('backStage.userTrade',{
            url:"/userTrade?id",
            templateUrl: 'view/html/business/userTrade.html',
            controller: 'userTradeCtrl',
            controllerAs:'vm'

        })

        // 用户管理投资合同列表查看
        .state('backStage.userContract',{
            url:"/userContract?id",
            templateUrl: 'view/html/business/userContract.html',
            controller: 'userContractCtrl',
            controllerAs:'vm'
        })

        // 用户管理投资合同详情查看
        .state('backStage.userContractDetailed',{
            url:"/userContractDetailed?id",
            templateUrl: 'view/html/business/userContractDetailed.html',
            controller: 'userContractDetailedCtrl',
            controllerAs:'vm'
        })

        // 债权管理
        .state('backStage.debt',{
            url:"/debt",
            templateUrl: 'view/html/business/debt.html',
            controller: 'debtCtrl',
            controllerAs:'vm'

        })

        // 债权编辑
        .state('backStage.debtEdit',{
            url:"/debtEdit?id",
            templateUrl: 'view/html/business/debtEdit.html',
            controller: 'debtEditCtrl',
            controllerAs:'vm'

        })

        // 债权匹配
        .state('backStage.matching',{
            url:"/matching?id",
            templateUrl: 'view/html/business/matching.html',
            controller: 'matchingCtrl',
            controllerAs:'vm'

        })

        // 产品管理
        .state('backStage.product',{
            url:"/product",
            templateUrl: 'view/html/business/product.html',
            controller: 'productCtrl',
            controllerAs:'vm'

        })

        // 产品编辑
        .state('backStage.productEdit',{
            url:"/productEdit",
            templateUrl: 'view/html/business/productEdit.html',
            controller: 'productEditCtrl',
            controllerAs:'vm'

        })

        // banner图
        .state('backStage.banner',{
            url:"/banner",
            templateUrl: 'view/html/operate/banner.html',
            controller: 'bannerCtrl',
            controllerAs:'vm'
        })

        // banner图编辑
        .state('backStage.bannerEdit',{
            url:"/bannerEdit",
            templateUrl: 'view/html/operate/bannerEdit.html',
            controller: 'bannerEditCtrl',
            controllerAs:'vm'
        })

        // 鼎立推荐
        .state('backStage.recommend',{
            url:"/recommend",
            templateUrl: 'view/html/operate/recommend.html',
            controller: 'recommendCtrl',
            controllerAs:'vm'
        })

        // 鼎力推荐编辑
        .state('backStage.recommendEdit',{
            url:"/recommendEdit",
            templateUrl: 'view/html/operate/recommendEdit.html',
            controller: 'recommendEditCtrl',
            controllerAs:'vm'
        })

        // 消息管理
        .state('backStage.message',{
            url:"/message",
            templateUrl: 'view/html/operate/message.html',
            controller: 'messageCtrl',
            controllerAs:'vm'
        })

        // 消息编辑
        .state('backStage.messageEdit',{
            url:"/messageEdit",
            templateUrl: 'view/html/operate/messageEdit.html',
            controller: 'messageEditCtrl',
            controllerAs:'vm'
        })

        // 消息查看
        .state('backStage.messageSee',{
            url:"/messageSee",
            templateUrl: 'view/html/operate/messageSee.html',
            controller: 'messageSeeCtrl',
            controllerAs:'vm'
        })

        // 意见反馈
        .state('backStage.feedback',{
            url:"/feedback",
            templateUrl: 'view/html/operate/feedback.html',
            controller: 'feedbackCtrl',
            controllerAs:'vm'
        })

        // 意见编辑
        .state('backStage.feedbackEdit',{
            url:"/feedbackEdit",
            templateUrl: 'view/html/operate/feedbackEdit.html',
            controller: 'feedbackEditCtrl',
            controllerAs:'vm'
        })

        // 意见查看
        .state('backStage.feedbackSee',{
            url:"/feedbackSee",
            templateUrl: 'view/html/operate/feedbackSee.html',
            controller: 'feedbackSeeCtrl',
            controllerAs:'vm'
        })

        // 密码管理
        .state('backStage.password',{
            url:"/password",
            templateUrl: 'view/html/backstage/password.html',
            controller: 'passwordCtrl as vm',
            resolve: {
                loadMyFile: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load("./js/ctrl/backstage/passwordCtrl.js");
                    }
                ]
            }
            // resolve: { //懒加载文件
            //     loadMyFile: _lazyLoad([
            //         // 'css/login.css', 
            //         './js/ctrl/passwordCtrl.js'])
            // }
        })

        // 账户管理
        .state('backStage.account',{
            url:"/account",
            templateUrl: 'view/html/backstage/account.html',
            controller: 'accountCtrl',
            controllerAs:'vm'
        })

        // 账户编辑
        .state('backStage.accountEdit',{
            url:"/account",
            templateUrl: 'view/html/backstage/accountEdit.html',
            controller: 'accountEditCtrl',
            controllerAs:'vm'
        })

        // 模块管理
        .state('backStage.module',{
            url:"/module",
            templateUrl:'view/html/backstage/module.html',
            controller:'moduleCtrl',
            controllerAs:'vm'
        })

        // 模块编辑
        .state('backStage.moduleEdit',{
            url:"/moduleEdit",
            templateUrl:'view/html/backstage/moduleEdit.html',
            controller:'moduleEditCtrl',
            controllerAs:'vm'
        })

        // 角色管理
        .state('backStage.role',{
            url:"/role",
            templateUrl:'view/html/backstage/role.html',
            controller:'roleCtrl',
            controllerAs:'vm'
        })

        // 角色编辑
        .state('backStage.roleEdit',{
            url:"/roleEdit",
            templateUrl:'view/html/backstage/roleEdit.html',
            controller:'roleEditCtrl',
            controllerAs:'vm'
        })
});