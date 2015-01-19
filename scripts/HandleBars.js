var Wellit = Wellit || {};

Wellit.Handlebars = (function(){

    var templates = {
        table : { id: "table-tpl" },
        row : { id: "table-row-tpl" }
    };

    var registerTemplates = function(type){
        console.log("Register");
        registerHelpers();
        if(type === "inline"){
            registerInlineTemplates();
        }
        else{
            registerCompiledTemplates();
        }


    };

    var registerInlineTemplates = function(){
        console.log("Inline");
        var rowTemplate = $("#" + templates.row.id).html();
        Handlebars.registerPartial("row", rowTemplate);
      
        var tableTemplate = $("#" + templates.table.id).html();
        templates.table.template = Handlebars.compile(tableTemplate);

    };

    var registerCompiledTemplates = function(){
        console.log("Compiled");
        templates.table.template = Test.templates.table;

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