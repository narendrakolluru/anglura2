
(function(app) {
  app.routing =
    ng.router.RouterModule.forRoot([

      //Pages components routes
    	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	    { path: 'home', component: app.homeComponent, useAsDefault: true}, // TODO: have to change to dashboard
      //{ path: 'email', component: app.emailComponent, useAsDefault: true},
		{ path: '**', redirectTo: 'home'}
	])
})(window.app || (window.app = {}));
