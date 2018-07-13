angular.module("txj").factory("serviceURL", function() {
    return {
        loginURL: "admin.polyfinance.txj.dounixue.net:8769/admin/a/u/loginIn",
        logoutURL: "/carrots-admin-ajax/a/logout",
        userListURL:"admin.polyfinance.txj.dounixue.net:8769/admin/a/u/user/list",
        userSearchURL:"admin.polyfinance.txj.dounixue.net:8769/admin/a/u/user/search",
        userDetailedURL:"admin.polyfinance.txj.dounixue.net:8769/admin/a/u/user/search",
        userFrozenURL:"admin.polyfinance.txj.dounixue.net:8769/admin/a/u/user/search",
        userTradeURL:"admin.polyfinance.txj.dounixue.net:8769/admin/a/u/user/trade",
        userContractListURL:"admin.polyfinance.txj.dounixue.net:8769/admin/a/u/user/contract/list",
        userContractURL:"admin.polyfinance.txj.dounixue.net:8769/admin/a/u/user/contract/details",
        debtURL:"admin.polyfinance.txj.dounixue.net:8769/admin/a/u/debt/list",
        searchURL: "/carrots-admin-ajax/a/article/search",
        offlineURL: "/carrots-admin-ajax/a/u/article/status",
        addURL: "/carrots-admin-ajax/a/article/",
        articleURL: "/carrots-admin-ajax/a/u/article/",
        uploadURL: "/carrots-admin-ajax/a/u/img/task"
    };
});
