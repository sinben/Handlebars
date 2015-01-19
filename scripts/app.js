var Wellit = Wellit || {};


Wellit.App = (function(){

    var init = function(){

        var data = Wellit.DataService.getData();
        //$("#wrapper").append(Wellit.Shittybars.getRenderedHtml(data));
        //Wellit.Handlebars.registerTemplates("inline");
        Wellit.Handlebars.registerTemplates("compiled");

        $("#wrapper").append(Wellit.Handlebars.getRenderedHtml(data));
    };

    return {
        init : init
    };
})();



$(document).ready(function(){
    Wellit.App.init();
});