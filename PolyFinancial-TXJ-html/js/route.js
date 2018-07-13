var app = angular.module("txj",["ngAnimate","ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('login',{
            url:"/login",
            templateUrl: 'html/login.html',
            controller: 'loginCtrl',
            controllerAs:'vm'

        })
        .state('backStage',{
            url:"/backStage",
            templateUrl: 'html/backStage.html',
            controller: 'backStageCtrl',
            controllerAs:'vm'

        })
        .state('backStage.userManagement',{
            url:"/userManagement",
            templateUrl: 'html/userManagement.html',
            controller: 'userManagementCtrl',
            controllerAs:'vm'

        })
        .state('backStage.userDetailed',{
            url:"/userDetailed",
            templateUrl: 'html/userDetailed.html',
            controller: 'userDetailedCtrl',
            controllerAs:'vm'

        })
        .state('backStage.debt',{
            url:"/debt",
            templateUrl: 'html/debt.html',
            controller: 'debtCtrl',
            controllerAs:'vm'

        })
        .state('backStage.debtEdit',{
            url:"/debtEdit",
            templateUrl: 'html/debtEdit.html',
            controller: 'debtEditCtrl',
            controllerAs:'vm'

        })
        .state('backStage.matching',{
            url:"/matching",
            templateUrl: 'html/matching.html',
            controller: 'matchingCtrl',
            controllerAs:'vm'

        })

        .state('backStage.product',{
            url:"/product",
            templateUrl: 'html/product.html',
            controller: 'productCtrl',
            controllerAs:'vm'

        })
        .state('backStage.productEdit',{
            url:"/productEdit",
            templateUrl: 'html/productEdit.html',
            controller: 'productEditCtrl',
            controllerAs:'vm'

        })
        .state('backStage.banner',{
            url:"/banner",
            templateUrl: 'html/banner.html',
            controller: 'bannerCtrl',
            controllerAs:'vm'
        })
        .state('backStage.bannerEdit',{
            url:"/banner",
            templateUrl: 'html/bannerEdit.html',
            controller: 'bannerEditCtrl',
            controllerAs:'vm'
        })
        .state('backStage.recommend',{
            url:"/recommend",
            templateUrl: 'html/recommend.html',
            controller: 'recommendCtrl',
            controllerAs:'vm'
        })
        .state('backStage.recommendEdit',{
            url:"/recommendEdit",
            templateUrl: 'html/recommendEdit.html',
            controller: 'recommendEditCtrl',
            controllerAs:'vm'
        })
        .state('backStage.message',{
            url:"/message",
            templateUrl: 'html/message.html',
            controller: 'messageCtrl',
            controllerAs:'vm'
        })
        .state('backStage.messageEdit',{
            url:"/messageEdit",
            templateUrl: 'html/messageEdit.html',
            controller: 'messageEditCtrl',
            controllerAs:'vm'
        })
        .state('backStage.messageSee',{
            url:"/messageSee",
            templateUrl: 'html/messageSee.html',
            controller: 'messageSeeCtrl',
            controllerAs:'vm'
        })
        .state('backStage.feedback',{
            url:"/feedback",
            templateUrl: 'html/feedback.html',
            controller: 'feedbackCtrl',
            controllerAs:'vm'
        })
        .state('backStage.feedbackEdit',{
            url:"/feedbackEdit",
            templateUrl: 'html/feedbackEdit.html',
            controller: 'feedbackEditCtrl',
            controllerAs:'vm'
        })
        .state('backStage.feedbackSee',{
            url:"/feedbackSee",
            templateUrl: 'html/feedbackSee.html',
            controller: 'feedbackSeeCtrl',
            controllerAs:'vm'
        })
        .state('backStage.password',{
            url:"/password",
            templateUrl: 'html/password.html',
            controller: 'passwordCtrl',
            controllerAs:'vm'
        })
        .state('backStage.account',{
            url:"/account",
            templateUrl: 'html/account.html',
            controller: 'accountCtrl',
            controllerAs:'vm'
        })
        .state('backStage.accountEdit',{
            url:"/account",
            templateUrl: 'html/accountEdit.html',
            controller: 'accountEditCtrl',
            controllerAs:'vm'
        })
        .state('backStage.module',{
            url:"/module",
            templateUrl:'html/module.html',
            controller:'moduleCtrl',
            controllerAs:'vm'
        })
        .state('backStage.moduleEdit',{
            url:"/moduleEdit",
            templateUrl:'html/moduleEdit.html',
            controller:'moduleEditCtrl',
            controllerAs:'vm'
        })
        .state('backStage.role',{
            url:"/role",
            templateUrl:'html/role.html',
            controller:'roleCtrl',
            controllerAs:'vm'
        })
        .state('backStage.roleEdit',{
            url:"/roleEdit",
            templateUrl:'html/roleEdit.html',
            controller:'roleEditCtrl',
            controllerAs:'vm'
        })
});