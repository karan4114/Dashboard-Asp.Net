<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EXPORTPDF.aspx.cs" Inherits="EXPORTPDF" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="Content/bootstrap.min.css" rel="stylesheet" />  
    <script src="Scripts/jquery-1.11.2.min.js"></script> 
    <script src="scripts/bootstrap.min.js"></script>  
    <link href="Content/dataTables.bootstrap4.min.css" rel="stylesheet" />  
    <script src="scripts/dataTables.bootstrap4.min.js"></script>  
    <script src="scripts/jquery.dataTables.min.js"></script> 
    <script src="DropDown.js"></script>



    <title>Report Generator</title>
</head>
<body>
    <form id="form1" runat="server">  
        <div class="container py-4">  
            <h5 class="text-uppercase text-center">How to export gridview data in word,excel and Pdf format using asp.net</h5>  
            <div>
                <select id="Drop1" name="Dropn1" runat="server"></select>

            </div> 
            <div class="card">  
                <div class="card-header bg-primary text-white">  
                    <h5 class="card-title text-uppercase">REPORT DETAILS</h5>  
                </div>  
                <div class="card-body">  
                    <asp:Button ID="btnExportToWord" CssClass="btnMargin btn btn-outline-primary rounded-0" runat="server" Text="ExportToWord"  />  
                    <asp:Button ID="btnExportToExcel" CssClass="btnMargin btn btn-outline-primary rounded-0" runat="server" Text="ExportToExcel"  />  
                    <asp:Button ID="btnExportToPDF" CssClass="btnMargin btn btn-outline-primary rounded-0" runat="server" Text="ExportToPDF"  /> 
                    <asp:GridView ID="GridViewList" CssClass="table table-bordered" runat="server"></asp:GridView>  
                </div>  
            </div>  
        </div>  
    </form>
</body>
</html>
