using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using System.Web.UI.DataVisualization.Charting;


public partial class chart : System.Web.UI.Page
{


    protected void Page_Load(object sender, EventArgs e)
    {
        GetChartTypes();
        if (!IsPostBack)
        {
            GetChartData();
            GetChartTypes();
            GetClientIdTypes();
            // EngineStatus();
        }
    }



    private void GetChartData()
    {
        SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=E:\PROJECT\DB\sampledataExcel.mdf;Integrated Security=True;Connect Timeout=30");
        {
            con.Open();// Command to retrieve Students data from Students table
            SqlCommand cmd = new SqlCommand("Select clientId, speed from sampleDeviceData where clientId='75'", con);
            SqlDataReader rdr = cmd.ExecuteReader();
            // Retrieve the Series to which we want to add DataPoints
            Series series = Chart1.Series["Series1"];
            // Loop thru each Student record
            while (rdr.Read())
            {
                // Add X and Y values using AddXY() method
                series.Points.AddXY(rdr["clientId"].ToString(), rdr["speed"]);
            }
        }
    }





    private void GetChartTypes()
    {
        foreach (int chartType in Enum.GetValues(typeof(SeriesChartType)))
        {
            ListItem li = new ListItem(Enum.GetName(typeof(SeriesChartType),
                chartType), chartType.ToString());
            DropDownList1.Items.Add(li);
      }
    }

    protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
    {
        // Call Get ChartData() method when the user select a different chart type
        this.Chart1.Series["Series1"].ChartType = (SeriesChartType)Enum.Parse(typeof(SeriesChartType), DropDownList1.SelectedValue);
        GetChartData();
    }
    
    
    protected void DropDownList2_SelectedIndexChanged(object sender, EventArgs e)
    {

        SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=E:\PROJECT\DB\sampledataExcel.mdf;Integrated Security=True;Connect Timeout=30");
        {
            con.Open();// Command to retrieve Students data from Students table
            SqlCommand cmd = new SqlCommand("Select clientId, speed from sampleDeviceData ", con);
            SqlDataReader rdr = cmd.ExecuteReader();
            // Retrieve the Series to which we want to add DataPoints
            Series series = Chart1.Series["Series1"];
            // Loop thru each Student record
            while (rdr.Read())
            {
                // Add X and Y values using AddXY() method
                series.Points.AddXY(rdr["clientId"].ToString(), rdr["speed"]);
            }
        }
    }



    private void GetClientIdTypes()
    {
        SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=E:\PROJECT\DB\sampledataExcel.mdf;Integrated Security=True;Connect Timeout=30");
        {
            con.Open();// Command to retrieve Students data from Students table
            SqlCommand cmd = new
            SqlCommand("Select clientId from sampleDeviceData", con);
            SqlDataReader rdr = cmd.ExecuteReader();
            // Retrieve the Series to which we want to add DataPoints
            // Loop thru each Student record

            while (rdr.Read())
            {
                DropDownList2.Items.Add(rdr["clientID"].ToString());
            }
        }
    }
}


    //private void EngineStatus()
    //{
    //    SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=E:\PROJECT\DB\sampledataExcel.mdf;Integrated Security=True;Connect Timeout=30");
    //    {
    //        con.Open();// Command to retrieve Students data from Students table
    //        SqlCommand cmd = new SqlCommand("Select IGN_Status from sampleDeviceData", con);

    //        SqlDataReader rdr = cmd.ExecuteReader();
    //        while (rdr.Read())
    //        {
    //            string g = rdr["IGN_Status"].ToString();
    //            string i = "1";
    //            //while (rdr.Read())
    //            //{
    //            if (i == g)
    //            {//ENGINE IS ON CODING
    //                Button1.Style["color"] = "GREEN";
    //                Button1.Style["background-color"] = "LIMEGREEN";
    //            }
    //            else
    //            {//ENGINE  OFF CODING
    //                Button1.Style["color"] = "RED";
    //                Button1.Style["background-color"] = "NONE";
    //            }

    //            //}
    //        }
    //    }
    //}
 

  
        
    
        
    
  




