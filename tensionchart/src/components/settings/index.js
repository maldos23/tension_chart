import React, { Fragment } from 'react';
import { Grid, Typography, makeStyles, Toolbar, CardActions, Button, CardContent } from '@material-ui/core';


//Creo estilos de menu
const useStyle = makeStyles(theme => ({
    margin:{
        margin: theme.spacing(1)
    }
}));

export default function Main_Component(props){
    const classes = useStyle();

    return(
        <Fragment>
            
            <Toolbar>
            <div style={{borderRadius:"5px",background:"linear-gradient(to right, #ee0979, #ff6a00)", color:"#FFF"}}>
                <Typography className={classes.margin} variant="h6">
                    Configuracion
                </Typography>
            </div>
            </Toolbar>
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