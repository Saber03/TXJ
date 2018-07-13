angular.module("txj")
    .factory('serviceHTTP', function ($http, serviceURL) {
        return {
            loginHTTP: function (user) {   //登陆
                return $http({
                    method: "POST",
                    url: serviceURL.loginURL,
                    params: user,
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    }
                })
            },
            logoutHTTP: function () {   //登出
                return $http({
                    method: "POST",
                    url: serviceURL.logoutURL,

                    headers: { 
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },
            userListHTTP: function () {   //获取用户列表
                return $http({
                    method: "get",
                    url: serviceURL.userListURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },
            userSearchHTTP: function (userInfo) {   //获取用户列表
                return $http({
                    method: "get",
                    url: serviceURL.userListURL,
                    params: userInfo,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },
            userDetailedHTTP: function (id) {   //获取用户详细信息
                return $http({
                    method: "get",
                    url: serviceURL.userDetailedURL,
                    params: id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },
            userFrozenHTTP: function (id) {   //冻结或者解冻用户
                return $http({
                    method: "post",
                    url: serviceURL.userFrozenURL,
                    params: id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },
            userTradeHTTP: function (id) {   //获取用户的交易记录列表
                return $http({
                    method: "get",
                    url: serviceURL.userTradeURL,
                    params: id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },
            userContractListHTTP: function (id) {   //获取用户的交易记录列表
                return $http({
                    method: "get",
                    url: serviceURL.userContractListURL,
                    params: id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },
            userContractHTTP: function (id) {
                return $http({
                    method: "get",
                    url: serviceURL.userContractURL,
                    params: id,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },
            debtHTTP: function () {
                return $http({
                    method: "get",
                    url: serviceURL.debtURL,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" }
                })
            },
            searchHTTP: function (data) {  //搜索 
                return $http({
                    url: serviceURL.searchURL,
                    method: "GET",
                    params: data,
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    }
                })
            },
            delateHTTP: function (id) {   //删除
                return $http({
                    url: serviceURL.articleURL + id,
                    method: "DELETE",
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    }
                })
            },
            offlineHTTP: function (state) {    //上下线
                return $http({
                    url: serviceURL.offlineURL,
                    method: "PUT",
                    params: state,
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded' 
                    }
                })
            },
            uploadHTTP: function (formData) { //上传图片
                return $http({
                    url: serviceURL.uploadURL,
                    method: "POST",
                    data: formData,
                    headers: { "Content-Type": undefined } 
                })
            },
            addHTTP: function (article) {   //新增文章
                return $http({
                    url: serviceURL.addURL,
                    method: "POST",
                    params: article,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
            },
            addOfflineHTTP: function (article) {  //新增文章的上下线
                return $http({
                    url: serviceURL.articleURL,
                    method: "POST",
                    params: article,
                    headers: { "Content-Type": "application/x-www-form-urlencoded" } 
                })
            },
            getArticle: function (id) {  //编辑页面获取数据
                return $http({
                    url: serviceURL.addURL + id,
                    method: "GET",
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
            },
            writeOfflineHTTP: function (id, article) {
                return $http({
                    url: serviceURL.articleURL + id,
                    method: "PUT",
                    params: article,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
            }
        }
})

// //检查是否登录
// angular.module("myApp").factory("checkUser",function () {
//     return {
//         user = JSON.parse(sessionStorage.getItem("user"))

//     }
// })

// // 封装文章上线/草稿
//     .factory("write", function (articleStatus, id) {
//     return {
//         upload: function (articleStatus,id) {
//             var article = {
//                 status: articleStatus,
//                 title: vm.title,
//                 type: vm.type,
//                 img: String(vm.imgurl),
//                 content: editor.txt.html(),
//                 url: vm.url,
//                 industry: vm.industry,
//                 createAt: vm.createAt
//             };
//             console.log(editor.txt.html());
//             if (!id) {
//                 serviceHTTP.addOfflineHTTP(article).then(function (res) {
//                     if (res.data.code == 0) {
//                         alert("新增文章成功！");
//                         $state.go("backstage.list", {}, { reload: true });
//                     }
//                     else {
//                         alert("新增文章失败。");
//                     }
//                 })
//             }
//             if (id) {
//                 serviceHTTP.writeOfflineHTTP(id, article).then(function (res) {
//                     if (res.data.code == 0) {
//                         alert("编辑文章成功！");
//                         $state.go("backstage.list", {}, { reload: true });
//                         console.log(article.content);
//                     } else {
//                         alert("编辑文章失败。");
//                     }
//                 })
//             }
        
//         }
//     }
// })