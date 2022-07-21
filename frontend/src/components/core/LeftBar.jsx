import { LeftBarStyled } from "../../styles/LeftBarStyled";
import { FiEdit, FiFolder, FiUploadCloud } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import { IoShapesOutline } from "react-icons/io5";
import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from "@mui/material";


const TabItem = ({ tab }) => {
    return (
      <div className="tab-item">
        {tab.icon}
        <h3 className="tab-name">{tab.name}</h3>
      </div>
    );
};

const LeftBar = () => {

    const [value, setValue] = useState("home");

    // handleChange of tabs
    const handleChange = (e, newValue) => {
      e.preventDefault()
      setValue(newValue);
    };


    const allTabs = [
        {
          name: "home",
          icon: <FiEdit style={{fontSize:"20px"}} />
        },
        {
          name: "assets",
          icon: <IoShapesOutline style={{fontSize:"20px"}} />,
        },
        {
          name: "uploads",
          icon: <FiUploadCloud style={{fontSize:"20px"}} />,
        },
    
        {
          name: "code",
          icon: <BiImageAdd style={{fontSize:"20px"}} />,
        },
        {
          name: "saved",
          icon: <FiFolder style={{fontSize:"20px"}} />,
        },
    ];

    return ( 
        <>
        <LeftBarStyled>
            <div className="accent-color-bar"></div>
                <div className="icons">
                    <div className="logo">
                        <Typography className="logo-name">breeze</Typography>
                    </div>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        orientation="vertical"
                        variant="scrollable"

                    >
                     {allTabs.map((tab, key) => (
                    <Tab
                            label={<TabItem tab={tab} />}
                            value={tab.name}
                            key={key}
                            className="tab"
                        />
                        ))}
                    </Tabs>
                   
                </div>
        </LeftBarStyled>
        </>
     );
}
 
export default LeftBar;