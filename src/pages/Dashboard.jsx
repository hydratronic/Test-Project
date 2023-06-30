import "./Dashboard.css";
import Header from "../components/Header";
import Frame3 from "../components/Frame3";
import Frame2 from "../components/Frame2";
import Frame78 from "../components/Frame78";
import Frame86 from "../components/Frame86";
import Frame87 from "../components/Frame87";


const Dashboard = () => {
      return (
            <div className="dashboard">
                  <img className="group1" alt="" src="/group1.svg" />
                  <img className="pngwing-1-icon" alt="" src="/pngwing-1.png" />
                  <Header />
                  <Frame3 />
                  <Frame2 />
                  <Frame78 />
                  <Frame86 />
                  <Frame87 />      
            </div>
      );
};

export default Dashboard;
