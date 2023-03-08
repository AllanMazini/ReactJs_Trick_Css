import { motion } from "framer-motion";

function Contact() {
    return (
        <motion.div style={{ width: '100%', height: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}

            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -500, opacity: 0 }}

        >
            <h1>Em Construcao | Contacto</h1>

        </motion.div>
    )
}
export default Contact;

