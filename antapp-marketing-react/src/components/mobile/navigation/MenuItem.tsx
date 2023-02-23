import * as React from "react";
import {Link} from "react-router-dom";
import {motion, useIsPresent} from "framer-motion";
import {menuItemType} from "../../../commons/navigationBar";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

type propsType = {
    menuItem:menuItemType
};

export const MenuItem = ( props: propsType) => {
    // const style = { border: `2px solid ${colors[menuItem]}` };
    const isPresent = useIsPresent();    // 切り替えスクリーンで使用
    const itemName = props.menuItem.name;
    const itemPath = props.menuItem.path;
    // const className    = props.menuItem.className;
    const className    = "text-placeholder";

    const style = { border: `2px solid ${colors[0]}` };

    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="icon-placeholder" style={style}/>
            <div className="text-placeholder" style={style}>
                <Link to={itemPath} className={className}>
                    {itemName}
                </Link>
            </div>

            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="privacy-screen"
            />
        </motion.li>
    );
};