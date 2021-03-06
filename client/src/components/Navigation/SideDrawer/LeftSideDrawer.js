import React from 'react';

import classes from './LeftSideDrawer.module.css';
import SideDrawerToggle from './SideDrawerToggle/SideDrawerToggle';
import Logo from  '../../utils/Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems"

export default function LeftSideDrawer(props){

    let attachedClasses = (props.show)? 
        [classes.Open, classes.SideDrawer] : [classes.Close, classes.SideDrawer];

    return (
        <div className={attachedClasses.join(' ')}>           
            <div className={ `${classes.Header} ${classes.Section}`  }>
                <div className={classes.SideDrawerToggleContainer}>
                    <SideDrawerToggle clicked={props.toggleSideDrawer} />
                </div>
                <div className={classes.LogoContainer}>
                    <Logo height="40px"/>
                </div>       
            </div>               
            <nav className={classes.Section}>
                <NavigationItems />
            </nav>
        </div>
    )
}