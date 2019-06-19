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
/// Summary description for Web2
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
 [System.Web.Script.Services.ScriptService]
public class Web2 : System.Web.Services.WebService {

    public Web2 () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    public string HelloWorld() {
        
        return "Hello World";
    }
    [WebMethod]
    public  string Data(String Name, String Number, String Mail, String Subj, String Message)
    {
        string json = "";

        string connstr = ConfigurationManager.ConnectionStrings["DBL"].ConnectionString;
        SqlConnection conn = new SqlConnection(connstr);
        conn.Open();

        //insert into Claim_Status_Trans(Claim_ID,Claim_Status,Status,Deleted_Flag,Row_upd_date)values(@claimid,7,1,0,@rowupddate)
        string qry1 = "insert into SendDataTable(NAME, NUMBER, MAIL, SUBJ, MESSAGE)values('" + Name + "', '" + Number + "', '" + Mail + "','" + Subj + "','" + Message + "')";
        SqlCommand movestoclaims = new SqlCommand(qry1, conn);
        movestoclaims.ExecuteNonQuery();
        conn.Close();
        return json;
        
    }


    [WebMethod]
    public string View(String Select)
    {
        string json = "";

        string connstr = ConfigurationManager.ConnectionStrings["DBL"].ConnectionString;
        SqlConnection conn = new SqlConnection(connstr);
        conn.Open();

        string qry2 = "select latitude, longitude from sampleDeviceData where ClientID=('"+ Select +"') ";
        SqlCommand movestoclaims = new SqlCommand(qry2, conn);
        movestoclaims.ExecuteNonQuery();
        SqlDataAdapter da2 = new SqlDataAdapter(movestoclaims);

        DataSet ds2 = new DataSet();

        da2.Fill(ds2, "sampleDeviceData");
        DataTable dt = new DataTable();

        da2.Fill(dt);


        json = DataTableToJSONWithJavaScriptSerializer(dt);
        conn.Close();
        return json;

    }


    [WebMethod]
    public string Drop()
    {
        string json = "";

        string connstr = ConfigurationManager.ConnectionStrings["DBL"].ConnectionString;
        SqlConnection conn = new SqlConnection(connstr);
        conn.Open();

        //string qry3 = "select ClientID from sampleDeviceData";
        string qry3 = "SELECT ClientID, COUNT(*) FROM sampleDeviceData GROUP BY ClientID HAVING COUNT(*) > 1";
        SqlCommand movestoclaims = new SqlCommand(qry3, conn);
         movestoclaims.ExecuteNonQuery();

        SqlDataAdapter da2 = new SqlDataAdapter(movestoclaims);

        DataSet ds2 = new DataSet();
       
        da2.Fill(ds2, "sampleDeviceData");
        DataTable dt = new DataTable();

        da2.Fill(dt);


        json = DataTableToJSONWithJavaScriptSerializer(dt);

        conn.Close();
        return json;
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
