function Senddata() {
    //var errorcount = 0;
    var name = document.getElementById('txtName').value;
    //var number = document.getElementById('txtNumber').value;
    //var email = document.getElementById('txtEmail').value;
    //var subject = document.getElementById('txtSubject').value;
    //var message = document.getElementById('txtMsg').value;

    if (name === "" || !isNaN(name)) {
        document.getElementById("name_error").innerHTML = "Name should be in characters";
        document.getElementById("name_error").style.color = "Red";
        document.getElementById("txtName").style.borderColor = "Red";

        errorcount++;

    }
    else {
        document.getElementById("name_error").innerHTML = "";
        document.getElementById("txtName").style.borderColor = "";
    }
    //if (number !== "") {
    //    if (number.length < 10 || isNaN(number) || number.length > 10) {
    //        document.getElementById("number_error").innerHTML = "Enter a valid 10 digit Phone number";
    //        document.getElementById("number_error").style.color = "Red";
    //        document.getElementById("txtNumber").style.borderColor = "Red";
    //        errorcount++;
    //    } else {
    //        document.getElementById("number_error").innerHTML = "";
    //        document.getElementById("txtNumber").style.borderColor = "";
    //    }
    //}
    //else {
    //    document.getElementById("number_error").innerHTML = "";
    //    document.getElementById("txtNumber").style.borderColor = "";
    //}
    //if (email == "") {
    //    document.getElementById("email_error").innerHTML = "email cannot be empty";
    //    document.getElementById("email_error").style.color = "Red";
    //    document.getElementById("txtEmail").style.borderColor = "Red";
    //    errorcount++;
    //}
    //else {
    //    var emailPat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //    var emailid = document.getElementById("txtEmail").value;
    //    var matchArray = emailid.match(emailPat);
    //    if (matchArray == null) {
    //        document.getElementById("email_error").innerHTML = "Enter the correct email address";
    //        document.getElementById("email_error").style.color = "Red";

    //        errorcount++;
    //    }
    //    else {
    //        document.getElementById("email_error").innerHTML = "";
    //        document.getElementById("txtEmail").style.borderColor = "";
    //    }
    //}
    //if (subject == "" || subject.length < 5) {
    //    document.getElementById("subj_error").innerHTML = "Enter atleast 5 characters in Subject";
    //    document.getElementById("subj_error").style.color = "Red";
    //    document.getElementById("txtSubject").style.borderColor = "Red";

    //    errorcount++;
    //}
    //else {
    //    document.getElementById("subj_error").innerHTML = "";
    //    document.getElementById("txtSubject").style.borderColor = "";
    //}
    //if (message == "" || message.length < 10) {
    //    document.getElementById("msg_error").innerHTML = "Enter some content..minimum 10 characters ";
    //    document.getElementById("msg_error").style.color = "Red";
    //    document.getElementById("txtMsg").style.borderColor = "Red";
    //    errorcount++;
    //}
    //else {
    //    document.getElementById("msg_error").innerHTML = "";
    //    document.getElementById("txtMsg").style.borderColor = "";
    //}

    if (errorcount == 0) {

        $.ajax({
            type: "POST",
            url: "DefaultW2.asmx/sendData",
            data: "{Name: '" + name + "',Number: '" + number + "', Email: '" + email + "',Subj: '" + subject + "',Message: '" + message + "'}", // here we are specifing the data as a JSON object, not a string in JSON format
            // this will be converted into a form encoded format by jQuery
            // even though data is a JSON object, jQuery will convert it to "firstName=Aidy&lastName=F" so it *is* form encoded
            contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
            dataType: "json", // the data type we want back. The data will come back in JSON format
            async: true,
            success: function (data) {

                var Alert = new CustomAlert();
                document.getElementById('dialogboxhead').innerHTML = "Sucess";
                Alert.render('Data Sent Successfully!');
                Resetform();
            },
            failure: function (data) {
                document.getElementById("dialogboxhead").innerHTML = "";
                alert("F");
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(xhr.responseText);
                alert(thrownError);
            }
        });


        //}
        alert();
        //   alert(errorcount);

    }

    function Resetform() {

        document.getElementById("txtName").value = "";
        document.getElementById("txtNumber").value = "";
        document.getElementById("txtEmail").value = "";
        document.getElementById("txtSubject").value = "";
        document.getElementById("txtMsg").value = "";

        //$('#interestedproducts').find('input[type=checkbox]:checked').removeAttr('checked');

    }

    //Customize Alert box function
    function CustomAlert() {
        this.render = function (dialog) {
            var winW = window.innerWidth;
            var winH = window.innerHeight;
            var dialogoverlay = document.getElementById('dialogoverlay');
            var dialogbox = document.getElementById('dialogbox');
            dialogoverlay.style.display = "block";
            dialogoverlay.style.height = winH + "px";
            dialogbox.style.left = (winW / 2) - (350 * .5) + "px";
            dialogbox.style.top = "150px";
            dialogbox.style.display = "block";

            document.getElementById('dialogboxbody').innerHTML = dialog;
            //document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()" title="Close this">&#215;</button>';
            document.getElementById('dialogboxfoot1').innerHTML = '<button type="button" class="btn btnalert" data-dismiss="" onclick="removethis();">OK</button>';
        }
        this.ok = function () {
            document.getElementById('dialogbox').style.top = "-300px";
            document.getElementById('dialogoverlay').style.display = "none";
        }
    }

    function removethis() {
        $('#dialogoverlay').remove();
        $('#dialogbox').remove();
        var div = '<div id="dialogoverlay"></div><div id="dialogbox" class=""><div>'
                + '<div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot1"></div></div>';
        var newdiv = $(div);
        newdiv.appendTo('#alertmsg');
    }
}