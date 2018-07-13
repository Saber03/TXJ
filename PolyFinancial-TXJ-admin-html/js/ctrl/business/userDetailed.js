app.controller("userDetailedCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    let id = $stateParams.id;
    // 获取用户具体信息
    serviceHTTP.userDetailedHTTP(id).then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "success") {
            vm.list = response.data.data.accountList[0];
            console.log(vm.list);
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });

    // 目前接口中没有银行卡的数据暂时先空着，正确的应该是从请求中获得
    vm.card1 = vm.card2 = "没有绑定银行卡呢"
});