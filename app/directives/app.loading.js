(function(app) {
  app.Loading =
    ng.core.Directive({
        selector: '[loadingicon]',
        viewProviders: [app.service, app.config]
    })
    .Class({
       constructor: function() {
        console.log("yes i am in loading");
      },
      ngAfterViewInit : function(){
        setTimeout(function(){
          $('#page-loader').addClass('hide');
        }, 2000);
      }

    });
    
})(window.app || (window.app = {}));


