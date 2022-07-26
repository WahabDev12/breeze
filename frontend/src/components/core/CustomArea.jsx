import { CustomAreaStyled } from "../../styles/CustomAreaStyled";
import Watermark from "../atoms/Watermark";
import ShotsEditor from "./ShotsEditor";

const CustomArea = ({ data, setData }) => {
    return (  
        <>
            <CustomAreaStyled>
                <Watermark/>
                <ShotsEditor data={data} setData={setData} />
            </CustomAreaStyled>
        </>
    );
}
 
export default CustomArea;