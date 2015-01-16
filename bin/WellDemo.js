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
var Wellit = Wellit || {};

Wellit.DataService = (function(){
    var data = {
        tableClass : "table",
        headers : [
            'Id', 'Name', 'Port', 'Company', 'Responsible', 'Duration'
        ],
        rows : [
            {
                id : 101,
                name : "Havanna",
                port : "Port 2",
                company : "Lundin",
                responsible : "Helgå Fenalår",
                from : "2013-02-04T22:44:30.652Z",
                to : "2013-02-06T22:44:30.652Z"
            }
        ]
    };

    return {
        getData : function(){
            return data;
        }
    };
})();
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
var Wellit = Wellit || {};

Wellit.Shittybars = (function(){

    var getRenderedHtml = function(data){

        var tableClass = "";
        if(data.tableClass !== undefined){
            tableClass = data.tableClass;
        }

        var html = '<table class="' + tableClass + '">' +
                    '<thead>' +
                        '<tr>';

        for(var ii = 0; ii < data.headers.length; ii++){
            var headerClass = data.headers[ii].headerClass || "";
            html += '<th class="'+headerClass+'">' + data.headers[ii] + '</th>';
        }
        html += '</thead><tbody>';

        $.each(data.rows, function(key, row){
            html += '<tr>' +
            '<td>'+ row.id +
            '</td>'+'<td>'+ row.firstName + ' ' + row.lastName +
            '</td>'+'<td>'+ row.port +
            '</td>'+'<td>'+ row.company + '</td>'+
            '<td><input class="form-control" name="responsible" type="text" value="'+row.responsible+'" />' + '</td>'+
            '<td>' + moment(row.from).format("DD MMM") + ' - ' +moment(row.to).format("DD MMM") + '</td>'+
            '</tr>';
        });

        html += '</tbody></table>';

       
        return html;
    };

    return {
        getRenderedHtml : getRenderedHtml
            };
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIkRhdGFTZXJ2aWNlLmpzIiwiSGFuZGxlQmFycy5qcyIsIk1vc3RTdWNreS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJXZWxsRGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBXZWxsaXQgPSBXZWxsaXQgfHwge307XHJcblxyXG5cclxuV2VsbGl0LkFwcCA9IChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBpbml0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgZGF0YSA9IFdlbGxpdC5EYXRhU2VydmljZS5nZXREYXRhKCk7XHJcbiAgICAgICAgV2VsbGl0LkhhbmRsZWJhcnMucmVnaXN0ZXJUZW1wbGF0ZXMoKTtcclxuICAgICAgICAvLyQoXCIjd3JhcHBlclwiKS5hcHBlbmQoV2VsbGl0LlNoaXR0eS5nZXRSZW5kZXJlZEh0bWwoZGF0YSkpO1xyXG4gICAgICAgICQoXCIjd3JhcHBlclwiKS5hcHBlbmQoV2VsbGl0LkhhbmRsZWJhcnMuZ2V0UmVuZGVyZWRIdG1sKGRhdGEpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0IDogaW5pdFxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgIFdlbGxpdC5BcHAuaW5pdCgpO1xyXG59KTsiLCJ2YXIgV2VsbGl0ID0gV2VsbGl0IHx8IHt9O1xyXG5cclxuV2VsbGl0LkRhdGFTZXJ2aWNlID0gKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICB0YWJsZUNsYXNzIDogXCJ0YWJsZVwiLFxyXG4gICAgICAgIGhlYWRlcnMgOiBbXHJcbiAgICAgICAgICAgICdJZCcsICdOYW1lJywgJ1BvcnQnLCAnQ29tcGFueScsICdSZXNwb25zaWJsZScsICdEdXJhdGlvbidcclxuICAgICAgICBdLFxyXG4gICAgICAgIHJvd3MgOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDogMTAxLFxyXG4gICAgICAgICAgICAgICAgbmFtZSA6IFwiSGF2YW5uYVwiLFxyXG4gICAgICAgICAgICAgICAgcG9ydCA6IFwiUG9ydCAyXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wYW55IDogXCJMdW5kaW5cIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpYmxlIDogXCJIZWxnw6UgRmVuYWzDpXJcIixcclxuICAgICAgICAgICAgICAgIGZyb20gOiBcIjIwMTMtMDItMDRUMjI6NDQ6MzAuNjUyWlwiLFxyXG4gICAgICAgICAgICAgICAgdG8gOiBcIjIwMTMtMDItMDZUMjI6NDQ6MzAuNjUyWlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0RGF0YSA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7IiwidmFyIFdlbGxpdCA9IFdlbGxpdCB8fCB7fTtcclxuXHJcbldlbGxpdC5IYW5kbGViYXJzID0gKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHRlbXBsYXRlcyA9IHtcclxuICAgICAgICB0YWJsZSA6IHsgaWQ6IFwidGFibGUtdHBsXCIgfSxcclxuICAgICAgICByb3cgOiB7IGlkOiBcInRhYmxlLXJvdy10cGxcIiB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciByZWdpc3RlclRlbXBsYXRlcyA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcclxuICAgICAgICByZWdpc3RlckhlbHBlcnMoKTtcclxuICAgICAgICByZWdpc3RlcklubGluZVRlbXBsYXRlcygpO1xyXG5cclxuICAgICAgICBpZihjYWxsYmFjayAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciByZWdpc3RlcklubGluZVRlbXBsYXRlcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICBcclxuICAgICAgICB2YXIgcm93VGVtcGxhdGUgPSAkKFwiI1wiICsgdGVtcGxhdGVzLnJvdy5pZCkuaHRtbCgpO1xyXG4gICAgICAgIEhhbmRsZWJhcnMucmVnaXN0ZXJQYXJ0aWFsKFwicm93XCIsIHJvd1RlbXBsYXRlKTtcclxuICAgICAgXHJcbiAgICAgICAgdmFyIHRhYmxlVGVtcGxhdGUgPSAkKFwiI1wiICsgdGVtcGxhdGVzLnRhYmxlLmlkKS5odG1sKCk7XHJcbiAgICAgICAgdGVtcGxhdGVzLnRhYmxlLnRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHRhYmxlVGVtcGxhdGUpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHJlZ2lzdGVySGVscGVycyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihcImZvcm1hdERhdGVcIiwgZnVuY3Rpb24oZGF0ZXRpbWUpIHtcclxuICAgICAgICAgIGlmIChtb21lbnQpIHtcclxuICAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0ZXRpbWUpLmZvcm1hdChcIkREIE1NTVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZXRpbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBnZXRSZW5kZXJlZEh0bWwgPSBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGVzLnRhYmxlLnRlbXBsYXRlKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlZ2lzdGVyVGVtcGxhdGVzIDogcmVnaXN0ZXJUZW1wbGF0ZXMsXHJcbiAgICAgICAgZ2V0UmVuZGVyZWRIdG1sIDogZ2V0UmVuZGVyZWRIdG1sXHJcbiAgICB9O1xyXG59KSgpOyIsInZhciBXZWxsaXQgPSBXZWxsaXQgfHwge307XHJcblxyXG5XZWxsaXQuU2hpdHR5YmFycyA9IChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBnZXRSZW5kZXJlZEh0bWwgPSBmdW5jdGlvbihkYXRhKXtcclxuXHJcbiAgICAgICAgdmFyIHRhYmxlQ2xhc3MgPSBcIlwiO1xyXG4gICAgICAgIGlmKGRhdGEudGFibGVDbGFzcyAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGFibGVDbGFzcyA9IGRhdGEudGFibGVDbGFzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBodG1sID0gJzx0YWJsZSBjbGFzcz1cIicgKyB0YWJsZUNsYXNzICsgJ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8dGhlYWQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8dHI+JztcclxuXHJcbiAgICAgICAgZm9yKHZhciBpaSA9IDA7IGlpIDwgZGF0YS5oZWFkZXJzLmxlbmd0aDsgaWkrKyl7XHJcbiAgICAgICAgICAgIHZhciBoZWFkZXJDbGFzcyA9IGRhdGEuaGVhZGVyc1tpaV0uaGVhZGVyQ2xhc3MgfHwgXCJcIjtcclxuICAgICAgICAgICAgaHRtbCArPSAnPHRoIGNsYXNzPVwiJytoZWFkZXJDbGFzcysnXCI+JyArIGRhdGEuaGVhZGVyc1tpaV0gKyAnPC90aD4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sICs9ICc8L3RoZWFkPjx0Ym9keT4nO1xyXG5cclxuICAgICAgICAkLmVhY2goZGF0YS5yb3dzLCBmdW5jdGlvbihrZXksIHJvdyl7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gJzx0cj4nICtcclxuICAgICAgICAgICAgJzx0ZD4nKyByb3cuaWQgK1xyXG4gICAgICAgICAgICAnPC90ZD4nKyc8dGQ+Jysgcm93LmZpcnN0TmFtZSArICcgJyArIHJvdy5sYXN0TmFtZSArXHJcbiAgICAgICAgICAgICc8L3RkPicrJzx0ZD4nKyByb3cucG9ydCArXHJcbiAgICAgICAgICAgICc8L3RkPicrJzx0ZD4nKyByb3cuY29tcGFueSArICc8L3RkPicrXHJcbiAgICAgICAgICAgICc8dGQ+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInJlc3BvbnNpYmxlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicrcm93LnJlc3BvbnNpYmxlKydcIiAvPicgKyAnPC90ZD4nK1xyXG4gICAgICAgICAgICAnPHRkPicgKyBtb21lbnQocm93LmZyb20pLmZvcm1hdChcIkREIE1NTVwiKSArICcgLSAnICttb21lbnQocm93LnRvKS5mb3JtYXQoXCJERCBNTU1cIikgKyAnPC90ZD4nK1xyXG4gICAgICAgICAgICAnPC90cj4nO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBodG1sICs9ICc8L3Rib2R5PjwvdGFibGU+JztcclxuXHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRSZW5kZXJlZEh0bWwgOiBnZXRSZW5kZXJlZEh0bWxcclxuICAgICAgICAgICAgfTtcclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=