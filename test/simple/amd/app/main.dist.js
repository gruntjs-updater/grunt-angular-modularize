define("app/controllers/home",[],function(){angular.module("app.controllers.home",[]).controller("HomeController",["$scope",function(e){e.message="Welcome Home!"}])}),define("app/routes/home",["app/controllers/home"],function(){angular.module("app.routes.home",["app.controllers.home","ui.router"]).config(["$stateProvider",function(e){e.state("home",{controller:"HomeController",templateUrl:"app/templates/home.html",url:""})}])}),define("app/app",["app/routes/home"],function(){angular.module("app",["chieffancypants.loadingBar","app.routes.home"])}),window.name="NG_DEFER_BOOTSTRAP!",require.config({paths:{app:"../app"}}),require(["app/app"],function(){angular.element().ready(function(){angular.resumeBootstrap(["app","app.routes.home","app.controllers.home"])})}),define("app/main",function(){});