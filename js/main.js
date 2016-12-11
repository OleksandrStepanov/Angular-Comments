var app = angular.module("app", []);

app.controller("AddThemeForCommentCtrl", function AddThemeForCommentCtrl ($scope) {

    $scope.saved = localStorage.getItem('themes');
    $scope.themes = (localStorage.getItem('themes')!=="null") ? JSON.parse($scope.saved) : [];
    localStorage.setItem('themes', JSON.stringify($scope.themes));

    $scope.addTheme = function() {
        $scope.themes.push({
            text: $scope.todoText,
            comment: []
        });
        $scope.todoText = ''; //clear the input after adding
        localStorage.setItem('themes', JSON.stringify($scope.themes));
    };

    $scope.addComment = function() {
        $scope.themes[$scope.selectedIndex].comment.push($scope.newComment);
        $scope.newComment = ''; //clear the input after adding
        localStorage.setItem('themes', JSON.stringify($scope.themes));
    };

    $scope.selectedIndex = 0;
    $scope.select= function(i) {
        $scope.selectedIndex=i;
    };

    $scope.delTheme = function (index) {
        $scope.themes.splice(index, 1);
        localStorage.removeItem(index);
        localStorage.setItem('themes', JSON.stringify($scope.themes));
    };
});

