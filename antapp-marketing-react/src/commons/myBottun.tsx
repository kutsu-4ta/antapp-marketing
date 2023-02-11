import React from "react";
import {motion, useIsPresent} from "framer-motion";
import {Link} from "react-router-dom";

type info = {
    text: string;
    path: string;
    className: string;
};

const MyButton = (props: info) => {
    const isPresent = useIsPresent();
    const text = props.text
    const path = props.path
    const className = props.className

    return (
        <div>
        <span className={className}>
            <Link to={path}>
                {text}
            </Link>
        </span>
            <motion.div
                initial={{scaleX: 1}}
                animate={{scaleX: 0, transition: {duration: 0.5, ease: "circOut"}}}
                exit={{scaleX: 1, transition: {duration: 0.5, ease: "circIn"}}}
                style={{originX: isPresent ? 0 : 1}}
                className="privacy-screen"
            />
        </div>
    );
};

export default MyButton;