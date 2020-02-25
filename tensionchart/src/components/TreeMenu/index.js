import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { TreeItem, TreeView } from '@material-ui/lab';
import { Label, Mail, Delete, SupervisorAccount, Info, Forum, LocalOffer, ArrowDropDown, ArrowRight, SettingsRounded, BarChartRounded, AccountTreeRounded, HistoryRounded, PolymerRounded } from '@material-ui/icons';

const useTreeItemStyles = makeStyles(theme => ({
    root: {
      color: theme.palette.text.secondary,
      '&:focus > $content': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
        color: 'var(--tree-view-color)',
      },
    },
    content: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '$expanded > &': {
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
    group: {
      marginLeft: 0,
      '& $content': {
        paddingLeft: theme.spacing(2),
      },
    },
    expanded: {},
    label: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
      marginRight: theme.spacing(1),
    },
    labelText: {
      fontWeight: 'inherit',
      flexGrow: 1,
    },
  }));
  
  function StyledTreeItem(props) {
    const classes = useTreeItemStyles();
    const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;
  
    return (
      <TreeItem
        label={
          <div className={classes.labelRoot}>
            <LabelIcon color="inherit" className={classes.labelIcon} />
            <Typography variant="body2" className={classes.labelText}>
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </div>
        }
        style={{
          '--tree-view-color': color,
          '--tree-view-bg-color': bgColor,
        }}
        classes={{
          root: classes.root,
          content: classes.content,
          expanded: classes.expanded,
          group: classes.group,
          label: classes.label,
        }}
        {...other}
      />
    );
  }
  
  StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
    nodeId: PropTypes.string.isRequired
  };
  
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: "calc(100% - 20px)",
    },
  });
  
  export default function GmailTreeView(props) {
    const classes = useStyles();

    return (
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ArrowDropDown />}
        defaultExpandIcon={<ArrowRight />}
        defaultEndIcon={<div style={{ width: 24 }} />}
        >
        <StyledTreeItem 
        onClick={()=>props.handleValue(0)} 
        nodeId="1" 
        labelText="Grafica" 
        labelIcon={BarChartRounded}/>
        <StyledTreeItem 
        onClick={()=>props.handleValue(1)} 
        nodeId="2" 
        labelText="Datos" 
        labelIcon={AccountTreeRounded} 
        labelInfo="120"/>
        <StyledTreeItem 
        onClick={()=>props.handleValue(2)} 
        nodeId="3" 
        labelText="Historial" 
        labelIcon={HistoryRounded} 
        labelInfo="3"/>
        <StyledTreeItem 
        onClick={()=>props.handleValue(3)} 
        nodeId="4" 
        labelText="Materiales" 
        labelIcon={PolymerRounded} />
        <StyledTreeItem 
        onClick={()=>props.handleValue(4)} 
        nodeId="5" 
        labelText="Configuracion" 
        labelIcon={SettingsRounded} />
    </TreeView>
    );
}