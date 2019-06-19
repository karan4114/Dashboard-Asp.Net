using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;
public partial class Default2 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //getWhileLoopData();   
    }

    //public string getWhileLoopData()
    //{
    //    string htmlStr = "";
    //    string connstr = ConfigurationManager.ConnectionStrings["DBL"].ConnectionString;
    //    SqlConnection conn = new SqlConnection(connstr);
    //    SqlCommand thisCommand = conn.CreateCommand();
    //    thisCommand.CommandText = "SELECT latitude, longitude from sampleDeviceData";
    //    conn.Open();
    //    SqlDataReader reader = thisCommand.ExecuteReader();

    //    while (reader.Read())
    //    {
          
    //        string latitude = reader.GetString(0);
    //        string longitude = reader.GetString(1);
    //        htmlStr += "<tr><td>" + latitude + "</td><td>" + longitude + "</td></tr>";
    //    }

    //    conn.Close();
    //    return htmlStr;
    //}
}