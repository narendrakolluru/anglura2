  (function(app) {
  app.headerComponent =
    ng.core.Component({
      //styleUrls: ['app/css/my-app.css'],
      selector: 'headerComponent',
      templateUrl: 'app/html/header.html',

    })
    .Class({
      constructor:function() {



      },
      ngOnInit: function(){

      }

    });
})(window.app || (window.app = {}));
