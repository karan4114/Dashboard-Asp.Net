  function SendD() {
    var name = document.getElementById('Text12').value;
    var number = document.getElementById('Text1').value;
    var mail = document.getElementById('Text2').value;
    var subj = document.getElementById('Text3').value;
    var message = document.getElementById('Text4').value;

    $.ajax({
        type: "POST",
        url: "Web2.asmx/Data",
        data: "{Name: '" + name + "' , Number: '" + number + "' , Mail: '" + mail + "' , Subj: '" + subj + "' , Message: '" + message + "' }", // here we are specifing the data as a JSON object, not a string in JSON format
            // this will be converted into a form encoded format by jQuery
            // even though data is a JSON object, jQuery will convert it to "firstName=Aidy&lastName=F" so it *is* form encoded
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
    dataType: "json", // the data type we want back. The data will come back in JSON format
    async: false,
    cache: false,
    success: function (data) {
        alert("Succes");
               
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

  
function View()
{ 
    document.getElementById("data").style.display = "block";
    var select = document.getElementById('select1').value;
    $.ajax({
        type: "POST",
        url: "Web2.asmx/View",
        data: "{Select:'"+select+"'}", // here we are specifing the data as a JSON object, not a string in JSON format
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

                });}
          
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
    

  