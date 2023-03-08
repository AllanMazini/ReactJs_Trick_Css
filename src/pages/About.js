
import { motion } from "framer-motion";

function About() {
    return (
        <motion.div style={{ width: '100%', height: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}

            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 500, opacity: 0 }}

        >
            <h1>Em Construcao | About</h1>

        </motion.div>
    )
}
export default About;

