import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const BiggerBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 600px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.4);
    overflow: hidden;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    hover: { rotateZ: 90 },
    click: { borderRadius: "100px" },
};

function App() {
    const biggerBoxRef = useRef<HTMLDivElement>(null);

    return (
        <Wrapper>
            <BiggerBox ref={biggerBoxRef}>
                <Box drag dragSnapToOrigin dragElastic={1} dragConstraints={biggerBoxRef} variants={boxVariants} whileHover="hover" whileTap="click" />
            </BiggerBox>
        </Wrapper>
    );
}

export default App;
