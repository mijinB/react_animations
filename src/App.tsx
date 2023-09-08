import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Box = styled(motion.div)`
    position: absolute;
    top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 200px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 1);
    font-size: 28px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
    entry: (isBack: boolean) => {
        return {
            x: isBack ? -500 : 500,
            opacity: 0,
            scale: 0,
        };
    },
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        },
    },
    exit: (isBack: boolean) => {
        return {
            x: isBack ? 500 : -500,
            opacity: 0,
            scale: 0,
            transition: {
                duration: 1,
            },
        };
    },
};

function App() {
    const [visible, setVisible] = useState(1);
    const [isBack, setIsBack] = useState(false);

    /**@function nextPlease
     * 1. isBack을 false로 변경
     * 2. 값이 10이면 10을 반환하고 10이 아니면 +1한 값을 반환
     */
    const nextPlease = () => {
        setIsBack(false);
        setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    };

    /**@function nextPlease
     * 1. isBack을 true로 변경
     * 2. 값이 1이면 1을 반환하고 1이 아니면 -1한 값을 반환
     */
    const prevPlease = () => {
        setIsBack(true);
        setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    };

    return (
        <Wrapper>
            <AnimatePresence mode="wait" custom={isBack}>
                <Box key={visible} variants={box} initial="entry" animate="center" exit="exit" custom={isBack}>
                    {visible}
                </Box>
            </AnimatePresence>
            <button onClick={nextPlease}>next</button>
            <button onClick={prevPlease}>next</button>
        </Wrapper>
    );
}

export default App;
