function Examploe() {
    var l_port_list = g_master_data.GetList('port_list');
    $('#port_selection').html('');
    $('#container_origin').html('');
    $('#container_destination').html('');

    $('#port_selection').append('<optgroup label="--- RIGS ---">');

    $('#container_origin').append('<option value="">-- Select Origin --</option>');
    $('#container_destination').append('<option value="">-- Select Destination --</option>');
    $('#container_origin').append('<optgroup label="--- RIGS ---">');
    $('#container_destination').append('<optgroup label="--- RIGS ---">');

    for( var l_key in l_port_list ) {
        if( l_port_list[l_key].type == 'rig') {
            $('#port_selection').append('<option value="' + l_port_list[l_key].id + '">' + l_port_list[l_key].name  + '</option>');
            $('#container_origin').append('<option value="' + l_port_list[l_key].id + '">' + l_port_list[l_key].name  + '</option>');
            $('#container_destination').append('<option value="' + l_port_list[l_key].id + '">' + l_port_list[l_key].name  + '</option>');
        }
    }
    $('#port_selection').append('</optgroup><optgroup label="--- PORTS ---" />');
    $('#container_origin').append('</optgroup><optgroup label="--- PORTS ---" />');
    $('#container_destination').append('</optgroup><optgroup label="--- PORTS ---" />');
    for( var l_key in l_port_list ) {
        if( l_port_list[l_key].type == 'base') {
            $('#port_selection').append('<option value="' + l_port_list[l_key].id + '">' + l_port_list[l_key].name  + '</option>');
            $('#container_origin').append('<option value="' + l_port_list[l_key].id + '">' + l_port_list[l_key].name  + '</option>');
            $('#container_destination').append('<option value="' + l_port_list[l_key].id + '">' + l_port_list[l_key].name  + '</option>');
        }
    }

    for( var l_key in l_port_list ) {
        if( l_port_list[l_key].type == 'harbour') {
            $('#container_origin').append('<option value="' + l_port_list[l_key].id + '">' + l_port_list[l_key].name  + '</option>');
            $('#container_destination').append('<option value="' + l_port_list[l_key].id + '">' + l_port_list[l_key].name  + '</option>');
        }
    }


    $('#port_selection').append('</optgroup>');
    $('#container_origin').append('</optgroup>');
    $('#container_destination').append('</optgroup>');

    $('#port_selection').change(function() {
        $('#port_selection option:selected').each( function() {
            var $l_this = $(this);
            g_data_list['source'] =  $l_this.val();
            $('#transit_area_text').text( $l_this.text() );
            InformationMessage('Current manifest location changed to: ' + $l_this.text(), G_MSG_TYPE_NORMAL);
        });
    });

}