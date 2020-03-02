import React, { Fragment } from 'react';
import { Grid, Typography, makeStyles, Toolbar, ExpansionPanel, ExpansionPanelSummary, TextField, ListItem, List, ListItemText, ListSubheader, Divider, Tabs, Tab } from '@material-ui/core';
import TabsGradient from '../visuals/Tabsmenu/index';

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
            <TabsGradient
            title="Datos"
            items={[
                {label:"Series"},
                {label:"Historial"},
            ]}
            getValue={(valueTabs) => console.log(valueTabs)}
            />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <List>
                        <ListSubheader>
                            Series en uso
                        </ListSubheader>
                        <ListItem button>
                            <ListItemText
                            primary="serie1"
                            secondary="Acero A-36"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText
                            primary="serie1"
                            secondary="Acero A-36"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText
                            primary="serie1"
                            secondary="Acero A-36"/>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={9}>
                </Grid>
            </Grid>
        </Fragment>
    )
}