import React from "react";
import {motion} from 'framer-motion';

const loaderVariants = {
    animateOne:{
        x: [-20,20],
        y: [0,-30],
        transition:{
            x:{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 0.5
            },
            y:{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 0.25,
                ease: "easeOut"
            },

        }
    }
}
const Loader = ()=>{
    return(
        <>
        <motion.div className="loader"
            variants = {loaderVariants}
            animate="animateOne"
        >

        </motion.div>
        </>
    )
}
export default Loader;