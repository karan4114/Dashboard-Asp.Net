function getLatLon() {

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "WebService.asmx/GetLat",
        data: "{}",
       
        cache: false,
        dataType: "json",
       
        success: function (data) {

            var filedata = [0];
            var elements = Array();
            elements = jQuery.parseJSON(data.d);
            //alert(elements.length);
            for (var i = 0; i < elements.length; i++) {
                filedata.push({

                    ItemName: elements[i]['latitude'],
                    ItemName1: elements[i]['longitude'],

                });
            }
            //alert(filedata.length);
            $("#tbDetails tr:gt(0)").empty();

            for (var k = 1; k < filedata.length; k++) {
                $("#tbDetails").append("<tr><td>" + filedata[k].ItemName + "</td><td>" + filedata[k].ItemName1 + "</td><td>");
            }
        
        },
        failure: function (data) {
            alert("LATITUDE & LONGITUDE maps");
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    });

    
}