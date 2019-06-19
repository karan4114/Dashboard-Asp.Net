// This example creates a 2-pixel-wide red polyline showing the path of
// the first trans-Pacific flight between Oakland, CA, and Brisbane,
// Australia which was made by Charles Kingsford Smith.

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: { lat: 0, lng: -180 },
        mapTypeId: 'roadmap'
    });

    var flightPlanCoordinates = [
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 },
      { lat: -29.467, lng: 162.027 },
      { lat: -26.467, lng: 172.027 },
      { lat: -24.467, lng: 183.027 },
      { lat: -21.467, lng: 187.027 },
      { lat: -20.467, lng: 193.027 },
      { lat: 25.467, lng: 203.027 }
    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    flightPath.setMap(map);
}

function View() {
    document.getElementById("data").style.display = "block";
    var select = document.getElementById('select1').value;
    $.ajax({
        type: "POST",
        url: "Web2.asmx/View",
        data: "{Select:'" + select + "'}", // here we are specifing the data as a JSON object, not a string in JSON format
        // this will be converted into a form encoded format by jQuery
        // even though data is a JSON object, jQuery will convert it to "firstName=Aidy&lastName=F" so it *is* form encoded
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back. The data will come back in JSON format
        async: false,
        cache: false,
        success: function (data) {

            var filedata = [0];
            var elements = Array();
            elements = jQuery.parseJSON(data.d);
            alert(elements.length);                 // shows length of elements (var elements = Array();)
            for (var i = 0; i < elements.length; i++) {
                filedata.push({

                    ItemName: elements[i]['latitude'],
                    ItemName1: elements[i]['longitude']

                });
            }

            alert(filedata.length);
            $("#loc tr:gt(0)").empty();     //to avoid repeatation of datatable over multiple clicks, so delete the previously occured data
            //$('#tbDetails tbody').empty();     // it wont empty the table header.
            for (var k = 1; k < filedata.length; k++) {
                $("#loc").append("<tr><td>" + filedata[k].ItemName + "</td><td>" + filedata[k].ItemName1 + "</td><td>");
            }

        },
        failure: function (data) {

            alert("webservice failure");
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    });


}


window.onload = function () {

    var select = document.getElementById("select1");
    $("#select1").empty();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Web2.asmx/Drop",
        data: "{}",
        dataType: "json",
        cache: false,
        success: function (data) {
            var filedata = [0];
            var elements = Array();
            alert("ajax");
            elements = jQuery.parseJSON(data.d);
            alert(elements.length);                 // shows length of elements (var elements = Array();)
            for (var i = 0; i < elements.length; i++) {
                filedata.push({

                    ItemName: elements[i]['ClientID']

                });

                var opt = filedata[i + 1].ItemName;
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el);
            } alert(filedata.length);
        },
        failure: function (data) {
            alert("err in select option");
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    });
}

