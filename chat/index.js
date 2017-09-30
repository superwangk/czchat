var czchat = angular.module("czchat", ["RongWebIMWidget"]);

czchat.controller("main", ["$scope", "$http", "RongCustomerService", function($scope, $http, RongCustomerService) {

    RongCustomerService.init({
        appkey: "k51hidwqkngkb",
        token: "+PTNc9OATs5o0A4eUD3z8gGYfOTYatRu0qStbcitAggTFM99gn81m2Cke6s5PRs7pcUoyCNVCH0IBtNhVAmlOA==",
        customerServiceId: "KEFU150596993254445",
        reminder: "官方客服",
        position: RongCustomerService.Position.right,
        displayConversationList:true,
        goodslist:$("#gooodslistid").val(),
        style: {
            width: 500,
            height:600
        },
        onSuccess: function(e) {
            console.log('连接成功');
        },
        onError: function(e) {
            console.log('连接失败');
        }
    });

    $scope.show = function() {
        RongCustomerService.show();
    };

    $scope.hidden = function() {
        RongCustomerService.hidden();
    };

    $scope.del = function(){

    }

}]);