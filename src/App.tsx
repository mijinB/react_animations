import styled from "styled-components";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
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
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`;

const Overlay = styled(motion.div)`
    position: absolute;
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
    width: 70px;
    height: 70px;
`;

const boxVariants = {
    hover: (isLeft: boolean) => {
        return {
            scale: 1.1,
            x: isLeft ? -15 : 15,
            y: isLeft ? -10 : 10,
        };
    },
};

function App() {
    const [isLeft, setIsLeft] = useState(true);
    const [id, setId] = useState<null | string>(null);

    return (
        <Wrapper>
            <AnimatePresence custom={isLeft}>
                <Grid>
                    {[1, 2, 3, 4].map((i) =>
                        i === 1 || i === 4 ? (
                            <Box
                                key={i}
                                variants={boxVariants}
                                custom={isLeft}
                                whileHover="hover"
                                transition={{ duration: 0.1 }}
                                onMouseEnter={() => (i === 1 ? setIsLeft(true) : setIsLeft(false))}
                            />
                        ) : (
                            <Box key={i} />
                        )
                    )}
                </Grid>
            </AnimatePresence>
        </Wrapper>
    );
}

export default App;
