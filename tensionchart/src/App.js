import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Tabs, Tab, Typography, CardContent, Card, makeStyles, Grid, Divider, TextField, Button, CardHeader, CardActions, Tooltip, Fab, Link, Hidden, Dialog, useTheme, useMediaQuery, DialogTitle, DialogContentText, DialogContent, DialogActions, MenuItem, Switch, FormControlLabel, Fade } from '@material-ui/core';
import { MenuOpenRounded, GitHub, TimelineRounded, SettingsApplicationsRounded, MoreRounded, AddRounded, Instagram, SupervisorAccount, SupervisorAccountRounded} from '@material-ui/icons';
//Importo los componentes requeridos para modificar los componentes
import Charts from './components/charts/index';
import TreeMenu from './components/TreeMenu/index';
import Datamenu from './components/data/index';
import SidebarMenu from './components/sidebar/index';
import SettingsChart from './components/settings/index';
import TabsGradient from './components/visuals/Tabsmenu/index';
//Creo estilo de menu para poder utilizar
const useStyle = makeStyles(theme => ({
  marign:{
    margin: theme.spacing(1)
  },
  fabButton:{
    background: theme.palette.background.paper,
    boxShadow:"none",
    border: "1px solid #ddd"
  },
  layerGrid:{
    top:"200px"
  },
  card:{
    height:"calc(100vh - 90px)",
    boxShadow:"none",
    margin:0
  },
  textfield:{
    width:`calc(50% - 20px)`,
    margin:theme.spacing(1)
  }
}));

function App() {
  const [selection, setSelection] = useState(0);
  const [dataSeries, setDataSeries] = useState([]);
  const [dialog, setDialog] = useState(false);
  const classes = useStyle();
  const theme = useTheme();
  const fullscreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
      setDataSeries([
    {
        "x": 450,
        "y": 362,
    }, {
        "x": 269,
        "y": 450,
    }, {
        "x": 700,
        "y": 758,
    }]);
  },[]);

  return (
    <div>
     <AppBar style={{
            boxShadow:"none",
            background:"linear-gradient(to top, #ee0979, #ff6a00)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent"}}>
       <Toolbar>
          <Hidden smUp>
          <SidebarMenu 
          handleNewchart={(openDialog) => setDialog(openDialog)} 
          handleSelection={(selectionvalue) => setSelection(selectionvalue)}/>
          </Hidden>
          <Typography 
          variant="h4"
          style={{
            background:"linear-gradient(to right, #ee0979, #ff6a00)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent"
          }}>
            <b>Tension</b> Charts
          </Typography>
          <div style={{flexGrow:1}}/>
          <Tooltip title="Ver codigo">
          <IconButton href="https://github.com/maldos23/tension_chart">
          <GitHub style={{color:"#ee0979"}}/>
          </IconButton>
          </Tooltip>
        </Toolbar>
     </AppBar>
     <div style={{height:'70px'}}/>
      <Card className={classes.card}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={3} lg={2}>
              <Hidden xsDown>
                <CardContent>
                <Fab
                onClick={()=>setDialog(true)}
                className={classes.fabButton} 
                variant="extended">
                  <AddRounded style={{color:"#ee0979",height:40,width:40}}/>
                  Nueva Grafica
                </Fab>
                </CardContent>
                <TreeMenu handleValue={(selectionvalue) => setSelection(selectionvalue)}/>
                <br/>
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
              </Hidden>
            </Grid>
            <Grid item xs={12} sm={9} lg={10}>
            <div>
            <Fade 
            in={true}>
            <div>
              {selection === 0 && <CreateCharts dataChart={dataSeries}/>}
              {selection === 1 && <Datamenu/>}
              {selection === 4 && <SettingsChart />}
            </div>
            </Fade>
            </div>
            </Grid>
          </Grid>
      </Card>
      <Dialog
      onClose={() => setDialog(false)}
      open={dialog}
      fullScreen={fullscreen}>
        <DialogTitle
        style={{
          background:"linear-gradient(to right, #ee0979, #ff6a00)", 
          color:"#FFF"
        }}
        color="primary">
          Nueva grafica
        </DialogTitle>
        <form>
        <DialogContent>
          <DialogContentText>
            Ingresa las opciones de creacion de grafica
          </DialogContentText>
          
          <TextField
          fullWidth
          autoFocus
          required
          className={classes.marign} 
          variant="outlined"
          margin="normal"
          label="Nombre de grafico"/>
          <TextField
          required
          className={classes.textfield} 
          variant="outlined"
          margin="normal"
          label="Nombre de Seudo-Material"/>
          <TextField
          select
          required
          className={classes.textfield}
          variant="outlined"
          margin="normal"
          label="Tipo de grafico">
            <MenuItem>
              Tiempo Deformacion
            </MenuItem>
            <MenuItem>
              Tiempo Carga
            </MenuItem>
          </TextField>
          <TextField
          select
          required
          className={classes.textfield}
          variant="outlined"
          margin="normal"
          label="Material">
            <MenuItem>
              Tiempo Deformacion
            </MenuItem>
            <MenuItem>
              Tiempo Carga
            </MenuItem>
          </TextField>
          <Switch>
            Mutiples ejes
          </Switch>
        </DialogContent>
        <DialogActions>
          <Button
          onClick={() => setDialog(false)}
          color="secondary">
            Cancelar
          </Button>
          <Button
          variant="outlined"
          color="secondary">
            Aplicar
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

function CreateCharts(props){
  const [selection, setSelection] = useState(0);
  const classes = useStyle();

  return(
    <div>
      <TabsGradient
      title="Graficas"
      items={[
          {label:"Grafica"},
          {label:"Info"},
      ]}
      getValue={(valueTabs) => setSelection(valueTabs)}
      />
      <CardContent>
      {selection === 0 && <Charts dataSeries={props.dataChart}/>}
      </CardContent>
    </div>
  )
}

export default App;
