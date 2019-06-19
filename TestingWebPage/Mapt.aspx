<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Mapt.aspx.cs" Inherits="Mapt" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="MapF.js"></script>
    <link href="StyleSheet.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
    <div id="map">
        
        </div>
        <div id="data">
                <select id="select1" runat="server" name="S1"> 
                    </select>
                
                <input type="button" value="View Data" onclick="View()" id="View1" />
                <table id="loc" style="width:100%; margin-top:20px; border: 1px solid black; border-collapse: collapse;">
                    <tr class="tableHeader">
                    <td style="width:200px">
                    Name
                    </td>
                    <td style="width:200px">
                    Pass
                    </td>
                    </tr>
                   <tbody></tbody>                      
                    </table></div>
        <script  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBitr9pMG67igLLSRp34uquGhG8DTDC3NU&callback=initMap" async defer ></script>
    </form>
</body>
</html>
