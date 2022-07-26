import { useEffect, useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider"; // angle picker
import { colorGradients } from "../../data/gradients";
import Box from "@mui/material/Box";
import { ShotEditorStyled } from "../../styles/ShotEditorStyled";
import { InputLabel } from "@mui/material";

const GradientsPicker = ({ data, setData }) => {
    
    const [gradients, setGradients] = useState([]);

    const [colors, setColors] = useState({
        color1: data.background.color1 ? data.background.color1 : "#ec008c",
        color2: data.background.color2 ? data.background.color2 : "#fc6767"
    });

    const [direction, setDirection] = useState(
        data.background.direction ? data.background.direction : 0
    );

    useEffect(() => {
        setGradients(colorGradients)
    },[])

    return (    
        <>
        <Box className="gradients-div">
        {
            gradients && gradients.map((gradient,key) => {
                return <>
                    <ShotEditorStyled>
                        <div 
                            onClick={() => {
                                setColors({
                                    color1:gradient.colors[0],
                                    color2:gradient.colors[1]
                                })
                                setData({
                                    ...data,
                                    background: {
                                        type:"Gradient",
                                        color1:gradient.colors[0],
                                        color2: gradient.colors[1],
                                        direction: direction
                                    }
                                })

                            } }
                            key={key}
                            className="single-div"
                            style={{
                                background: `linear-gradient(to left, ${gradient.colors[0]}, ${gradient.colors[1]})`,
                            }} > 
                        </div>
                    </ShotEditorStyled>
                </>
            })
        }
  
        </Box>
        <Box m={2}>
            <InputLabel sx={{marginBottom:"15px"}}>Direction</InputLabel>
            <CircularSlider
                width={90}
                valueFontSize="20px"
                labelFontSize="9px"
                verticalOffset="0em"
                onChange={(angle) => {
                    setDirection(angle);
                    setData({
                      ...data,
                      background: {
                        type: "Gradient",
                        color1: colors.color1,
                        color2: colors.color2,
                        direction: direction,
                      },
                    });
                }}
            />
        </Box>
        </>
     );
}
 
export default GradientsPicker;