//login logout yapıldığında redirection (package used) gwendall:auth-client-callbacks
if(Meteor.isClient){
	Accounts.onLogin(function () {
		FlowRouter.go('recipe-book');
	});

	Accounts.onLogout(function () {
		FlowRouter.go('home');
	});
}

// kayıtlı kullanıcı yoksa yönlendirme
FlowRouter.triggers.enter([function (context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

// all stuff
FlowRouter.route('/', {
	name: "home",
	action(){
		if(Meteor.userId()){
			FlowRouter.go('recipe-book');
		}
		GAnalytics.pageview();
		BlazeLayout.render("HomeLayout"); 
	}
});

FlowRouter.route('/recipe-book', {
	name: "recipe-book",
	action(){
		GAnalytics.pageview();
		BlazeLayout.render("MainLayout", {main: 'Recipes'}); 
	}
});

FlowRouter.route('/recipe/:id', {
	name: "recipe",
	action(){
		GAnalytics.pageview();
		BlazeLayout.render("MainLayout", {main: 'RecipeSingle'}); 
	}
});

FlowRouter.route('/menu', {
	name: "menu",
	action(){
		GAnalytics.pageview();
		BlazeLayout.render("MainLayout", {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: "shopping-list",
	action(){
		GAnalytics.pageview();
		BlazeLayout.render("MainLayout", {main: 'ShoppingList'});
	}
});