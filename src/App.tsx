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
    invisible: {
        x: 500,
        opacity: 0,
        scale: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        },
    },
    exit: {
        x: -500,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 1,
        },
    },
};

function App() {
    const [visible, setVisible] = useState(1);

    /**@function nextPlease
     * 1. 값이 10이면 10을 반환하고 10이 아니면 +1한 값을 반환
     */
    const nextPlease = () => {
        setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    };

    return (
        <Wrapper>
            <AnimatePresence>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
                    i === visible ? (
                        <Box key={i} variants={box} initial="invisible" animate="visible" exit="exit">
                            {i}
                        </Box>
                    ) : null
                )}
            </AnimatePresence>
            <button onClick={nextPlease}>next</button>
        </Wrapper>
    );
}

export default App;
