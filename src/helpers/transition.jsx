import { motion } from "framer-motion"

const transition = (OgComponent) => {

    function getTransformOrigin(direction) {
        let origins = direction === "vertical" ? ["left", "right", "center"] : ["top", "bottom", "center"];
        const randomIndex = Math.floor(Math.random() * origins.length);
        return origins[randomIndex];
    }

      
    return () => (
        <>
            <OgComponent />
            <motion.div
                className="transition-slide-in"
                style={{transformOrigin: getTransformOrigin("horizontal")}}
                initial={{scaleY: 0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{duration: .5, ease: [0.22, 1, 0.36, 1]}}
            />
            <motion.div
                className="transition-slide-out"
                style={{transformOrigin: getTransformOrigin("vertical")}}
                initial={{scaleX: 1}}
                animate={{scaleX: 0}}
                exit={{scaleX: 0}}
                transition={{duration: .5, ease: [0.22, 1, 0.36, 1]}}
            />
        </>
    )
}

export default transition;