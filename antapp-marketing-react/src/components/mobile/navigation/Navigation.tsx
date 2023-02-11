import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import {menuItemType} from "../../../commons/navigationBar";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

type propsType = {
    menuItems:menuItemType[]
};

export const Navigation = ( props:propsType ) => {
    const menuItems = props.menuItems;

    return (
        <motion.ul variants={variants}>
            {menuItems.map((menuItem, i) => (
                <MenuItem key={i} menuItem={menuItems[i]}/>
            ))}
        </motion.ul>
    );
};
