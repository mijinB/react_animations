import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const Wrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 200vh;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
    const x = useMotionValue(0);
    const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
    const gradient = useTransform(
        x,
        [-800, 800],
        [
            "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
            "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
        ]
    );
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

    return (
        <Wrapper style={{ background: gradient }}>
            <Box drag="x" dragSnapToOrigin style={{ x, rotateZ, scale }} />
        </Wrapper>
    );
}

export default App;
