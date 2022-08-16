import { LeftBarStyled } from "../../styles/LeftBarStyled";
import { FiEdit, FiFolder } from "react-icons/fi";
import { IoShapesOutline } from "react-icons/io5";
import { BiText } from "react-icons/bi";
import { Tabs, Tab, Typography} from '@mui/material';
import CustomArea from "./CustomArea"
import { AiOutlineCode } from "react-icons/ai";
import { LOGO_IMG } from "../../assets/images/imageURL";
import CodeEditor from "./CodeEditor";      
import TextEditor from "./TextEditor";


const TabItem = ({ tab }) => {
    return (
      <div className="tab-item">
        {tab.icon}
        <h3 className="tab-name">{tab.name}</h3>
      </div>
    );
};

const LeftBar = ({ 
      data, setData, 
      children,code,
      setChildren, value,
      changeValue,setCode
     }) => {

    const props = {
      data: data,
      code: code,
      setCode: setCode,
      setData: setData,
      children: children,
      setChildren: setChildren,
    };

    const allTabs = [
        {
          name: "home",
          icon: <FiEdit style={{fontSize:"20px"}} />
        },
        {
          name: "codesnap",
          icon: <AiOutlineCode style={{fontSize:"20px"}} />,
        },
        {
          name: "header",
          icon: <BiText style={{fontSize:"20px"}} />,
        },
        {
          name: "assets",
          icon: <IoShapesOutline style={{fontSize:"20px"}} />,
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
                      <img src={LOGO_IMG}/>
                    </div>
                    <div className="title-wrapper">
                      <Typography className="logo-title ">breeze.</Typography>
                    </div>
                    <Tabs
                        value={value}
                        onChange={changeValue}
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

                { value === "home" && <CustomArea data={data} {...props} /> }
                { value === "codesnap" && <CodeEditor setCode={setCode} code={code} {...props} />}  
                { value === "header" && <TextEditor data={data} code={code} {...props} />}  

        </LeftBarStyled>
        </>
     );
}
 
export default LeftBar;