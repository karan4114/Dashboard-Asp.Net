using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

/// <summary>
/// Summary description for DropDownWS
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
 [System.Web.Script.Services.ScriptService]
public class DropDownWS : System.Web.Services.WebService {

    public DropDownWS () {

        //Uncomment the following line if using designed components 
       //InitializeComponent(); 
    }

    [WebMethod]
    public string HelloWorld() {
        return "Hello World";
    }


    [WebMethod]
    public string Dropdown()
    {
        string jsondata = "";
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DBL"].ConnectionString.ToString());
        SqlCommand selectCommand = new SqlCommand("SELECT ClientID, COUNT(*) FROM sampleDeviceData GROUP BY ClientID HAVING COUNT(*) > 1", conn);
       // selectCommand.ExecuteNonQuery();
        SqlDataAdapter da2 = new SqlDataAdapter(selectCommand);

        DataSet ds2 = new DataSet();
        conn.Open();
        da2.Fill(ds2, "sampleDeviceData");
        DataTable dt = new DataTable();

        da2.Fill(dt);

        jsondata = DataTableToJSONWithJavaScriptSerializer(dt);

        conn.Close();

        return jsondata;


    }

    private string DataTableToJSONWithJavaScriptSerializer(DataTable table)
    {
        JavaScriptSerializer jsSerializer = new JavaScriptSerializer();
        List<Dictionary<string, object>> parentRow = new List<Dictionary<string, object>>();
        Dictionary<string, object> childRow;
        foreach (DataRow row in table.Rows)
        {
            childRow = new Dictionary<string, object>();
            foreach (DataColumn col in table.Columns)
            {
                childRow.Add(col.ColumnName, row[col]);
            }
            parentRow.Add(childRow);
        }
        return jsSerializer.Serialize(parentRow);
    }
    
}
