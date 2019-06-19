<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MAPs.aspx.cs" Inherits="MAPs" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
     <script src="Scripts/jquery-1.11.2.min.js"></script>
 
   <script src="Mapdata.js"></script>
    <title></title>
</head> 
<body>
    <form id="form1" runat="server">
    <div>



    

        <a href="#" onclick="getLatLon()"> Database </a>
     <table id="tbDetails" style="width:100%; margin-top:20px; border: 1px solid black; border-collapse: collapse;">
    <tr class="tableHeader">
      
        <th style="width:200px">
            Latitude Loc
        </th>
        <th style="width:200px">
            Longitude Loc
        </th>
     
    </tr>
      <tbody>
          
      </tbody>
</table>
    </div>
    </form>
</body>
</html>
