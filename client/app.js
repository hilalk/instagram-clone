angular.module('Instagram', ['ngRoute', 'ngMessages'])
  .config(function($routeProvider, $authProvider) {
  	
	  $routeProvider
	  .when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'HomeCtrl'
	  })
	  .when('/login', {
	    templateUrl: 'views/login.html',
	    controller: 'LoginCtrl'
	  })
	  .when('/signup', {
	    templateUrl: 'views/signup.html',
	    controller: 'SignupCtrl'
	  })
	  .when('/photo/:id', {
	    templateUrl: 'views/detail.html',
	    controller: 'DetailCtrl'
	  })
	  .otherwise('/');

	$authProvider.loginUrl = 'http://localhost:3000/auth/login';
	$authProvider.signupUrl = 'http://localhost:3000/auth/signup';
	$authProvider.oauth2({
	  name: 'instagram',
	  url: 'http://localhost:3000/auth/instagram',
	  redirectUri: 'http://localhost:8000',
	  clientId: '443b14e6c7904ef5b1b96925a55c24d0',
	  requiredUrlParams: ['scope'],
	  scope: ['likes'],
	  scopeDelimiter: '+',
	  authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
	});

  });