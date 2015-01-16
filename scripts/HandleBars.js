var Wellit = Wellit || {};

Wellit.Handlebars = (function(){

    var templates = {
        table : { id: "table-tpl" },
        row : { id: "table-row-tpl" }
    };

    var registerTemplates = function(callback){
        registerHelpers();
        registerInlineTemplates();

        if(callback !== undefined){
            callback();
        }
    };

    var registerInlineTemplates = function(){
       
        var rowTemplate = $("#" + templates.row.id).html();
        Handlebars.registerPartial("row", rowTemplate);
      
        var tableTemplate = $("#" + templates.table.id).html();
        templates.table.template = Handlebars.compile(tableTemplate);

    };

    var registerHelpers = function(){
        Handlebars.registerHelper("formatDate", function(datetime) {
          if (moment) {
             return moment(datetime).format("DD MMM");
          }
          else {
            return datetime;
          }
        });
    };

    var getRenderedHtml = function(data){
        return templates.table.template(data);
    };

    return {
        registerTemplates : registerTemplates,
        getRenderedHtml : getRenderedHtml
    };
})();