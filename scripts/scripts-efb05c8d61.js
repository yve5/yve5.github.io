"use strict";angular.module("myApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(r){r.when("/",{templateUrl:"views/home.html",controller:"homeController",controllerAs:"home"}).when("/illusion",{templateUrl:"views/illusion.html",controller:"illusionController",controllerAs:"illusion"}).when("/magic-trick/page-:pageId",{templateUrl:"views/magicTrick.html",controller:"magicTrickController",controllerAs:"magicTrick"}).when("/gallery",{templateUrl:"views/gallery.html",controller:"galleryController",controllerAs:"gallery"}).when("/book/page-:pageId",{templateUrl:"views/book.html",controller:"bookController",controllerAs:"book"}).when("/stock",{templateUrl:"views/stock.html",controller:"stockController",controllerAs:"stock"}).otherwise({redirectTo:"/"})}]),angular.module("myApp").controller("homeController",[function(){}]),angular.module("myApp").controller("headerController",[function(){}]),angular.module("myApp").controller("footerController",["$anchorScroll","$location","$scope",function(r,e,o){var t=new Date,l=t.getFullYear();o.myYear=l,o.gotoTop=function(){e.hash("top"),r()}}]),angular.module("myApp").controller("bookController",["$scope","$routeParams",function(r,e){r.currentPage=_.parseInt(e.pageId),_.isUndefined(r.currentPage)&&(r.currentPage=1),r.previous=r.currentPage-1,r.next=r.currentPage+1,r.total=6}]),angular.module("myApp").controller("galleryController",[function(){}]),angular.module("myApp").controller("illusionController",[function(){}]),angular.module("myApp").controller("magicTrickController",["$scope","$location","$routeParams","commonService",function(r,e,o,t){var l=new Array(new Array(1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63),new Array(2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31,34,35,38,39,42,43,46,47,50,51,54,55,58,59,62,63),new Array(4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31,36,37,38,39,44,45,46,47,52,53,54,55,60,61,62,63),new Array(8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31,40,41,42,43,44,45,46,47,56,57,58,59,60,61,62,63),new Array(16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63),new Array(32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63));r.current=parseInt(o.pageId),r.result=42,r.tab=[],_.isNaN(r.current)||r.current>7?e.path("/magic-trick/page-1"):r.current<7?r.tab=l[r.current-1]:7===r.current&&(r.result=t.getResult()),r.yes=function(){t.setChoice(r.current-1,l[r.current-1][0]),e.path("/magic-trick/page-"+(r.current+1))},r.no=function(){t.setChoice(r.current-1,0),e.path("/magic-trick/page-"+(r.current+1))}}]),angular.module("myApp").controller("stockController",[function(){}]),angular.module("myApp").directive("header",[function(){return{templateUrl:"views/header.html",controller:"headerController",restrict:"ACE"}}]),angular.module("myApp").directive("footer",[function(){return{templateUrl:"views/footer.html",controller:"footerController",restrict:"ACE"}}]),angular.module("myApp").service("commonService",[function(){var r=1,e=[0,0,0,0,0,0];return{setCurrentPage:function(e){r=e},getCurrentPage:function(){return r},setChoice:function(r,o){e[r]=o},getResult:function(){return e[0]+e[1]+e[2]+e[3]+e[4]+e[5]}}}]);