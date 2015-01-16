var Wellit = Wellit || {};


Wellit.App = (function(){

    var init = function(){
        var data = Wellit.DataService.getData();
        Wellit.Handlebars.registerTemplates();
        //$("#wrapper").append(Wellit.Shitty.getRenderedHtml(data));
        $("#wrapper").append(Wellit.Handlebars.getRenderedHtml(data));
    };

    return {
        init : init
    };
})();



$(document).ready(function(){
    Wellit.App.init();
});