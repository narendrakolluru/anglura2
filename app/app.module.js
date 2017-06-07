(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule, app.routing, ng.http.HttpModule],
      declarations: [
        app.homeComponent,
        app.AppComponent,
        app.Loading
      ],
      bootstrap: [ app.AppComponent ]
    })
    .Class({
      constructor: function() {
      }
    });
})(window.app || (window.app = {}));
