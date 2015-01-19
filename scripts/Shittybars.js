var Wellit = Wellit || {};

Wellit.Shittybars = (function(){

    var getRenderedHtml = function(data){
        console.log("Getting shitty template")
        var tableClass = "";
        if(data.tableClass !== undefined){
            tableClass = data.tableClass;
        }

        var html = '<table class="' + tableClass + '">' +
                    '<thead>' +
                        '<tr>';

        for(var ii = 0; ii < data.headers.length; ii++){

            html += '<th>' + data.headers[ii] + '</th>';
        }
        html += '</thead><tbody>';

        $.each(data.rows, function(key, row){
            html += '<tr>' +
            '<td>'+ row.id +
            '</td>'+'<td>'+ row.name +
            '</td>'+'<td>'+ row.port +
            '</td>'+'<td>'+ row.company + '</td>'+
            '<td><input class="form-control" name="responsible" type="text" value="'+row.responsible+'" />' + '</td>'+
            '</td>'+'<td>'+ '<a href="mailto:'+row.email+'">'+ row.email + '</a></td>'+
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