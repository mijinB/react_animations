import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 50vw;
    div:first-child,
    div:last-child {
        grid-column: span 2;
    }
`;

const Box = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 1);
    font-size: 28px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

function App() {
    const [clicked, setClicked] = useState(false);

    /**@function toggle
     * 1. clicked의 bool 값을 toggle
     */
    const toggle = () => setClicked((prev) => !prev);

    return (
        <Wrapper onClick={toggle}>
            <Grid>
                <Box layoutId="hello" />
                <Box />
                <Box />
                <Box />
            </Grid>
            <AnimatePresence>
                {clicked ? (
                    <Overlay
                        initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                        animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                        exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                    >
                        <Box layoutId="hello" style={{ width: 400, height: 200 }} />
                    </Overlay>
                ) : null}
            </AnimatePresence>
        </Wrapper>
    );
}

export default App;
