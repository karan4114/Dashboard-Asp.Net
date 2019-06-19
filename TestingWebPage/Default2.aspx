 <%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="Default2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="Scripts/jquery-1.11.2.min.js"></script>
    <script src="SendDa.js"></script>
</head>
<body>
                            
          
    <form id="form1">
            <div>  
                <input type="text" name="name2" runat="server"  id="Text12" placeholder="Your Name" />
                <input type="text" name="name3" runat="server"  id="Text1" placeholder="NUMBRER" />
                <input type="text" name="name4" runat="server"  id="Text2" placeholder="MAIL ID" />
                <input type="text" name="name5" runat="server"  id="Text3" placeholder="SUBJECT" />
                <input type="text" name="name6" runat="server"  id="Text4" placeholder="MESSAGE" />
                <input type="button" value="Save Data" onclick="SendD()" id="send1" />
                
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

                    
                </form>
                            
</body>
</html>
