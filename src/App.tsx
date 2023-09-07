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
    width: 200px;
    height: 200px;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
    return (
        <Wrapper>
            <Box
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotateZ: 360 }}
                transition={{
                    type: "spring",
                    //Chrome⇒ delay해줘야 작아지는 게 보임
                    delay: 0.5,
                }}
            />
        </Wrapper>
    );
}

export default App;
