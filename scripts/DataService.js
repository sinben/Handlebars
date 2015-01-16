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