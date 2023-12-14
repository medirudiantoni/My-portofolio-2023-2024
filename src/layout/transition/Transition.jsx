import { motion } from "framer-motion";
import './Transition.css'

const transitionPage = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div 
                className="slide-in fixed"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div 
                className="slide-out fixed"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    )
}

export default transitionPage;