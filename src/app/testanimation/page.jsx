"use client"
import {motion} from "framer-motion"

const TestPage = () => {
    const variants = {
        variant1:{
            x:400,
            y:300,
            opacity:0.5,
            transition:{
                duration:3
            }
        },
        variant2:{
            x: 100, 
            y: -300,
            rotation:90
        }
    }
    return(
        <div className="h-full flex items-center justify-center">
            <motion.div 
            className="h-96 w-96 bg-red-400 rounded" 
            initial={{ x: -100}} 
            /* variants={variants}
            animate={condition ? "variant2" : "variant1"} */
            animate={{ x: 200, y: 100, opacity: 0.5}} 
            transition = {{delay: 2, duration:4}}
            >
            </motion.div>
        </div>
    )
};
export default TestPage;