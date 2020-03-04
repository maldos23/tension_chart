import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    margin:{
        margin: theme.spacing(1)
    }
}));

//Tabs y menu de interface
function Main_Component(props){
    const classes = useStyle();
    const [selection,setSelection] = useState(0);
    const { title, getValue, items } = props;
    const GetValue = (vale) => getValue(vale);
    useEffect(() => {
        GetValue(selection);
    },[selection]);

    return(
        <Fragment>
            <div style={{display:"flex"}}>
            <div style={{
                borderTopLeftRadius:"30px",
                borderBottomLeftRadius:"30px",
                background:"linear-gradient(to right, #ee0979, #ff6a00)", 
                color:"#FFF"
                }}>
                <Typography className={classes.margin} variant="h6">
                {title}
                </Typography>
            </div>
            <Tabs
            value={selection}>
            {Array.isArray(items) === true &&

                items.map((item, index) => {
                    
                    return(
                    <Tab
                    key={index} 
                    onClick={() => setSelection(index)}
                    label={
                        typeof item.label === "string"?
                        item.label:"Sin Definir"
                    }
                    value={index}/>
                    );
                })
            }
            </Tabs>
            </div>
        </Fragment>
    )
}

Main_Component.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

export default Main_Component;