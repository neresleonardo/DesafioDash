import React from "react";
import { Aside } from "../Aside";
import MainHeader from "../MainHeader";

// styles
import { Grid } from './styles'


    const Layout = (props:any) => {
        return (
            <Grid>
                <MainHeader></MainHeader>
                <Aside></Aside>
            </Grid>
        );
}

export default Layout;