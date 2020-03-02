import React, { Fragment, useState } from 'react';
import { Grid, Typography, makeStyles, Toolbar, CardActions, Button, CardContent, Tabs, Tab } from '@material-ui/core';
import TabsGradient from '../visuals/Tabsmenu/index';

//Creo estilos de menu
const useStyle = makeStyles(theme => ({
    margin:{
        margin: theme.spacing(1)
    }
}));

export default function Main_Component(props){
    const [selection, setSelection] = useState(0);
    const classes = useStyle();

    return(
        <Fragment>
            <TabsGradient
            getValue={(valueTab) => setSelection(valueTab)}
            title="configuracion"
            items={[
                {label:"Graficos"},
                {label:"Datos"},
                {label:"Acerca de"},
            ]}
            />
            <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>

                </Grid>
            </Grid>
            </CardContent>
            <CardActions>
                <Button>
                    Aplicar
                </Button>
            </CardActions>
        </Fragment>
    )
}