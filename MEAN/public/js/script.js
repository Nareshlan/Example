var app = angular.module("mean", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/login', {
            templateUrl : "template/login.html"
        })
        .when('/signup', {
            templateUrl : "template/signup.html"
        })
        .otherwise("/signup");
        
});


app.controller("signup", function ($http) {
    var vm = this;
    vm.title = "My Signup Form"

    vm.submit = function () {
        $http.post("http://localhost:3001/signup", vm.user)
            .then(function (response) {
                console.log(response);
            });
    }
});

app.controller("login", function ($http) {
    var vm = this;
    vm.title = "My Login Form"

    vm.submit = function () {
        $http.post("http://localhost:3001/login", vm.user)
            .then(function (response) {
                console.log(response);
            });
    }
});

