import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Tabs, Tab, Typography, CardContent, Card, makeStyles, Grid, Divider, TextField, Button, CardHeader, CardActions, Tooltip, Fab, Link, Hidden, Dialog, useTheme, useMediaQuery, DialogTitle, DialogContentText, DialogContent, DialogActions, MenuItem, Switch, FormControlLabel } from '@material-ui/core';
import { MenuOpenRounded, GitHub, TimelineRounded, SettingsApplicationsRounded, MoreRounded, AddRounded, Instagram, SupervisorAccount, SupervisorAccountRounded} from '@material-ui/icons';
//Importo los componentes requeridos para modificar los componentes
import Charts from './components/charts/index';
import TreeMenu from './components/TreeMenu/index';
import Datamenu from './components/data/index';
import SidebarMenu from './components/sidebar/index';
import SettingsChart from './components/settings/index';

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
    height:"calc(100vh - 90px)"
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
     <AppBar style={{background:"linear-gradient(to right, #606c88, #3f4c6b)"}}>
       <Toolbar>
          <Hidden smUp>
          <SidebarMenu 
          handleNewchart={(openDialog) => setDialog(openDialog)} 
          handleSelection={(selectionvalue) => setSelection(selectionvalue)}/>
          </Hidden>
          <TimelineRounded 
          style={{
            color:"#FFF",
            height:40,
            width:40,
            marginRight:10
          }}/>
          <Typography variant="h5">
            <b>Tension</b> Charts
          </Typography>
          <div style={{flexGrow:1}}/>
          <Tooltip title="Ver codigo">
          <IconButton href="https://github.com/maldos23/tension_chart">
          <GitHub style={{color:"#FFF"}}/>
          </IconButton>
          </Tooltip>
        </Toolbar>
     </AppBar>
     <div style={{height:'70px'}}/>
      <Card className={classes.card}>
        <div>
          <Grid container spacing={2}>
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
            {selection === 0 && <CreateCharts dataChart={dataSeries}/>}
            {selection === 1 && <Datamenu/>}
            {selection === 4 && <SettingsChart />}
            </Grid>
          </Grid>
        </div>
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
      </Dialog>
    </div>
  );
}

function CreateCharts(props){
  const classes = useStyle();

  return(
    <div>
      <Toolbar>
        <div style={{borderRadius:"5px",background:"linear-gradient(to right, #ee0979, #ff6a00)", color:"#FFF"}}>
        <Typography className={classes.marign} variant="h6">
          Vista previa
        </Typography>
        </div>
      </Toolbar>
      <CardContent>
      <Charts dataSeries={props.dataChart}/>
      </CardContent>
    </div>
  )
}

export default App;
