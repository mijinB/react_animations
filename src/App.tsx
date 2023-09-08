import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Box = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 1);
    font-size: 28px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: #00a5ff;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
    const [clicked, setClicked] = useState(false);

    const toggleClicked = () => setClicked((prev) => !prev);

    return (
        <Wrapper onClick={toggleClicked}>
            <Box>{!clicked ? <Circle layoutId="circle" style={{ borderRadius: 50 }} /> : null}</Box>
            <Box>{clicked ? <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} /> : null}</Box>
        </Wrapper>
    );
}

export default App;
