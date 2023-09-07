import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Box = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 200px;
    height: 200px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
    place-self: center;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background-color: white;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    start: {
        scale: 0.5,
        opacity: 0,
    },
    end: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1,
            bounce: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.2,
        },
    },
};

const circleVariants = {
    start: {
        opacity: 0,
        y: 10,
    },
    end: {
        opacity: 1,
        y: 0,
    },
};

function App() {
    return (
        <Wrapper>
            <Box variants={boxVariants} initial="start" animate="end">
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
            </Box>
        </Wrapper>
    );
}

export default App;
