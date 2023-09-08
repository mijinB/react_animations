import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`;

const Overlay = styled(motion.div)`
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Box = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 28px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
`;

const Switch = styled(motion.button)`
    position: absolute;
    bottom: 170px;
    margin-top: 50px;
    padding: 7px;
    border: none;
    border-radius: 5px;
    background-color: white;
    font-weight: 600;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    color: rgb(0, 0, 255);
    cursor: pointer;
`;

const boxVariants = {
    hover: (isLeftHover: boolean) => {
        return {
            scale: 1.1,
            x: isLeftHover ? -15 : 15,
            y: isLeftHover ? -10 : 10,
        };
    },
};

const switchVariants = {
    click: {
        scale: 1.2,
        color: "rgb(255, 99, 71)",
    },
};

function App() {
    const [isLeftHover, setIsLeftHover] = useState(true);
    const [isRightCircle, setIsRightCircle] = useState(true);
    const [id, setId] = useState<null | string>(null);

    /**@function toggleSwitch
     * 1. isRightCircle의 bool 값을 변경(true ↔ false)
     */
    const toggleSwitch = () => {
        setIsRightCircle((prev) => !prev);
    };

    return (
        <Wrapper>
            <AnimatePresence>
                <Grid key="grid">
                    {["1", "2", "3", "4"].map((i) =>
                        i === "1" || i === "4" ? (
                            <Box
                                key={i}
                                layoutId={i}
                                variants={boxVariants}
                                custom={isLeftHover}
                                whileHover="hover"
                                onMouseEnter={() => (i === "1" ? setIsLeftHover(true) : setIsLeftHover(false))}
                                onClick={() => setId(i)}
                            />
                        ) : (
                            <Box key={i}>
                                {i === "2" ? (
                                    isRightCircle ? (
                                        <Circle layoutId="circle" />
                                    ) : null
                                ) : !isRightCircle ? (
                                    <Circle layoutId="circle" />
                                ) : null}
                            </Box>
                        )
                    )}
                </Grid>
                {id && (
                    <Overlay
                        key="overlay"
                        initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                        animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                        exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                        onClick={() => setId(null)}
                    >
                        <Box layoutId={id} style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} />
                    </Overlay>
                )}
                {isRightCircle ? (
                    <Switch onClick={toggleSwitch}>Switch</Switch>
                ) : (
                    <Switch variants={switchVariants} animate="click" onClick={toggleSwitch}>
                        Switch
                    </Switch>
                )}
            </AnimatePresence>
        </Wrapper>
    );
}

export default App;
