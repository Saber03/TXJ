app.controller("loginCtrl",function ($http,$state,serviceHTTP) {
    var vm = this;
    var user = {
        name:vm.name,
        pwd:vm.password
    };
    vm.login = function() {
        serviceHTTP.loginHTTP(user).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response.data.message);
            if(response.data.message === "success") {
                sessionStorage.setItem("logo","233");
                $state.go('backStage');
            }
            else {
                alert("请输入正确的用户名和密码！");
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
        // $http({
        //     method: 'get',
        //     url: '/admin/admin/a/u/creditor/matcher/list',
        //     data:{name:vm.name,pwd:vm.passWord},
        //
        // }).then(function successCallback(response) {
        //     //请求成功的代码
        //     console.log(response.data.message);
        //     if(response.data.message === "success") {
        //         sessionStorage.setItem("logo","233");
        //         $state.go('backStage');
        //     }else {
        //         alert("Please enter the correct username or password")
        //     }
        //
        // }, function errorCallback(response) {
        //     // 请求失败执行代码
        //     alert("error");
        // });
    }
});