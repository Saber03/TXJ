app.controller("matchingCtrl",function ($http,$state,serviceHTTP,$stateParams,data) {
    var vm = this;
    let id = $stateParams.id;
    vm.data = data;
    vm.dataThree = [vm.data[0],vm.data[1],vm.data[2]];//将数组前三位单独遍历展示出来

    vm.detail = false;

    vm.over = function (data) {//鼠标划入
        vm.detail = true;
        vm.data2 = data;
    };
    vm.leave = function () {//鼠标划出
        vm.detail = false;
        vm.data2 = {};
    };

    vm.all = false;//查看所有默认隐藏，点击事件才会让其显示，如下
    vm.allOpen = function () {
        vm.all = true;
    };
    vm.close = function () {
        vm.all = false;
    };

    vm.selected = [];//所有被选取的投资数组
    vm.sum = 0;
    vm.select = function (e) {//将选取的投资加入数组
        if(vm.selected.indexOf(e) >= 0){//当投资已经被选过时不进行操作
            console.log(vm.selected.indexOf(e));
            console.log(vm.selected);
            return false;
        }
        if(vm.sum+e.money > 60000){
            alert("匹配总额不能超过债权总额哦");
            return false;
        }
        vm.selected.push(e);
        vm.sum = vm.sum + e.money;
        console.log(vm.selected);
        console.log("sum"+vm.sum);
    };

    vm.remove = function (e) {//移除投资
        console.log(e);
        vm.index = vm.selected.indexOf(e);
        vm.selected.splice(vm.index,1);
        vm.sum = vm.sum - e.money;
        console.log("sum"+vm.sum);
    };
});


app.constant('data',[
    {
        id : 'TZHT000002',
        money:10000
    },
    {
        id : 'TZHT000003',
        money:30000
    },
    {
        id : 'TZHT000004',
        money:40000
    },
    {
        id : 'TZHT000005',
        money:60000
    },
    {
        id : 'TZHT000007',
        money:80000
    },
    {
        id : 'TZHT000008',
        money:90000
    },
    {
        id : 'TZHT0000010',
        money:199000
    },
    {
        id : 'TZHT0000022',
        money:22222000
    }
]);
