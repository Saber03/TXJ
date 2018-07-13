app.controller("userCtrl",function ($scope,$http,$state,serviceHTTP) {
    var vm = this;
    serviceHTTP.userListHTTP().then(function successCallback(response) {
        // 请求成功执行代码
        if(response.data.message === "success") {
            vm.list = response.data.data.accountList;
            console.log(vm.list);
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });

    // 目前分页数据假数据没有提供，先写一下，正式接口中再做修改
    vm.totalItems = 2;

    // 清除按钮
    vm.reset = function(){
        vm.userId = undefined;
        vm.userName = undefined;
        vm.phone = undefined;
        vm.status = undefined;
    };


    //搜索用户列表功能
    vm.userSearch = function(){
        //搜索的四个值
        var userInfo = {
            userID: vm.userId,
            actualName:vm.userName,
            phoneNum:vm.phone,
            state:vm.status
        };
        serviceHTTP.userSearchHTTP(userInfo).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.list = response.data.data.accountList;
                console.log(vm.list);
            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };

    vm.frozen = function (a,b) {
        var userInfo = {
          id:a,
          state:b
        };
        if(b == 0){
            vm.tip ="<p style='text-align: center'>是否要冻结该用户？</p>"
        }else {
            vm.tip ="<p style='text-align: center'>是否要为该用户解冻？</p>"
        }
        bootbox.confirm({
            title: '操作提示',
            message: vm.tip,
            buttons: {
                cancel: {
                    label: '取消'
                },
                confirm: {
                    label: '确认'
                }
            },
            callback: function(result) {
                if(result === true){
                    serviceHTTP.userSearchHTTP(userInfo).then(function successCallback(response) {
                        // 请求成功执行代码
                        console.log(response);
                        if(response.data.message === "success") {
                            bootbox.alert("修改成功，即将刷新页面");
                            $state.reload('backStage.user');
                        }
                    }, function errorCallback(res) {
                        // 请求失败执行代码
                        bootbox.alert("修改状态失败！请稍后再试")
                    });

                }
            }
        })
    };

});