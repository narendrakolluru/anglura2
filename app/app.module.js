(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule, app.routing, ng.http.HttpModule],
      declarations: [
        app.homeComponent,
        app.AppComponent,
        app.left_sidebar_Component,
        app.right_sidebar_Component,
        app.main_content_Component,
        app.headerComponent,
        app.Loading
      ],
      bootstrap: [ app.AppComponent ]
    })
    .Class({
      constructor: function() {
      }
    });
})(window.app || (window.app = {}));
