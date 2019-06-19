<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DBWeb.aspx.cs" Inherits="DBWeb" %>

<!DOCTYPE html>  
<html xmlns="http://www.w3.org/1999/xhtml">  
<head runat="server">  
<title></title>  
<style type="text/css">  
.auto-style1 {  
width: 100%;  
        }  
.auto-style2 {  
height: 26px;  
        }  
.auto-style3 {  
height: 26px;  
width: 93px;  
        }  
.auto-style4 {  
width: 93px;  
        }  
</style>  
</head>  
<body>  
<form id="form1" runat="server">  

    Small number:<br />
<asp:TextBox runat="server" id="txtSmallNumber" /><br /><br />
Big number:<br />
<asp:TextBox runat="server" id="txtBigNumber" /><br />
<asp:CompareValidator runat="server" id="cmpNumbers" controltovalidate="txtSmallNumber" controltocompare="txtBigNumber" operator="LessThan" type="Integer" errormessage="The first number should be smaller than the second number!" /><br />
  
              <%--          First value 

<asp:TextBox ID="firstval" runat="server" required="true"></asp:TextBox>  
 
      Second value  
<asp:TextBox ID="secondval" runat="server"></asp:TextBox>  
       It should be greater than first value
 
<asp:Button ID="Button1" runat="server" Text="save" />  

    <asp:CompareValidator Visibility="True" ID="CompareValidator1" runat="server" ControlToCompare="secondval"   
ControlToValidate="firstval" Display="Dynamic" ErrorMessage="Enter valid value" ForeColor="Red"   
Operator="LessThan" Type="Integer"> </asp:CompareValidator> --%>


</form>  
</body>  
</html>  
