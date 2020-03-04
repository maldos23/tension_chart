import React, { Fragment, useState } from 'react';
import { IconButton, SwipeableDrawer, List, ListItem, ListItemText, CardContent, Fab, makeStyles, ListItemIcon, Typography, Button, Divider } from '@material-ui/core';
import { MenuRounded, AddRounded, BarChartRounded, SettingsRounded, PolymerRounded, HistoryRounded, AccountTreeRounded, SupervisorAccountRounded } from '@material-ui/icons';
import PropTypes from 'prop-types';

const useStyle = makeStyles(theme => ({
    fabButton:{
        background: theme.palette.background.paper,
        boxShadow:"none",
        border: "1px solid #ddd"
    },
}));

export default function Main_Component(props){
    const classes = useStyle();
    const [ open, setOpen ] = useState(false);

    return(
        <Fragment>
            <IconButton 
            onClick={() => setOpen(true)}>
                <MenuRounded style={{
                    color:"#ee0979",
                    height:35,
                    width:35
                }}/>
            </IconButton>
            <SwipeableDrawer
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}>
                <div style={{width:"220px"}}>
                <CardContent>
                <Fab 
                onClick={()=> props.handleNewchart(true)}
                className={classes.fabButton} variant="extended">
                  <AddRounded style={{color:"#ee0979",height:40,width:40}}/>
                  Nueva Grafica
                </Fab>
                </CardContent>
                <List>
                    <ListItem
                    button 
                    onClick={() => {
                        props.handleSelection(0);
                        setOpen(false);
                    }}>
                        <ListItemIcon>
                            <BarChartRounded/>
                        </ListItemIcon>
                        <ListItemText
                        secondary="Grafica"/>
                    </ListItem>
                    <ListItem 
                    button 
                    onClick={() => {
                        props.handleSelection(1);
                        setOpen(false);
                    }}>
                        <ListItemIcon>
                            <AccountTreeRounded/>
                        </ListItemIcon>
                        <ListItemText
                        secondary="Datos"/>
                    </ListItem>
                    <ListItem
                    button 
                    onClick={() => {
                        props.handleSelection(2);
                        setOpen(false);
                    }}>
                        <ListItemIcon>
                            <HistoryRounded/>
                        </ListItemIcon>
                        <ListItemText
                        secondary="Historial"/>
                    </ListItem>
                    <ListItem
                    button 
                    onClick={() => {
                        props.handleSelection(3);
                        setOpen(false);
                    }}>
                        <ListItemIcon>
                            <PolymerRounded/>
                        </ListItemIcon>
                        <ListItemText
                        secondary="Materiales"/>
                    </ListItem>
                    <ListItem
                    button 
                    onClick={() => {
                        props.handleSelection(4);
                        setOpen(false);
                    }}>
                        <ListItemIcon>
                            <SettingsRounded/>
                        </ListItemIcon>
                        <ListItemText
                        secondary="Configuracion"/>
                    </ListItem>
                </List>
                <Divider/>
                <CardContent style={{textAlign:"center"}}>
                <Typography variant="caption">
                  Si deseas guardar datos inicia sesion
                </Typography>
                <br/>
                <br/>
                <Button
                color="primary"
                variant="outlined"
                startIcon={<SupervisorAccountRounded/>}>
                  Iniciar sesion
                </Button>
                <br/>
                <br/>
                <Button
                color="secondary"
                variant="outlined"
                startIcon={<SupervisorAccountRounded/>}>
                  Registrarse
                </Button>
                </CardContent>
                </div>
            </SwipeableDrawer>
        </Fragment>
    )
};

Main_Component.propTypes = {
    handleSelection: PropTypes.func.isRequired
};