import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import {menuItemType} from "../../../commons/navigationBar";

type propsType = {
    menuItems:menuItemType[]
};

export const Navigation = ( props:propsType ) => {
    const menuItems = props.menuItems;

    return (
        <motion.ul>
            {menuItems.map((menuItem, i) => (
                <MenuItem key={i} menuItem={menuItems[i]}/>
            ))}
        </motion.ul>
    );
};
