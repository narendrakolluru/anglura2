
(function(app) {
  app.routing =
    ng.router.RouterModule.forRoot([
    	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	    { path: 'home', component: app.homeComponent, useAsDefault: true},
		{ path: '**', redirectTo: 'home'}
	])
})(window.app || (window.app = {}));
