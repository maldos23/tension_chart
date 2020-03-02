import React from 'react';
import { ClearAllRounded } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

class table_assets {
    contructor(){
        /* creo clase con los items para
        crear una tabla de manera mas sencilla.
        uso las siguientes librerias:
            @material-table
            @@material-ui/icons
        */
        this.icons = {
            clear:ClearAllRounded,  
        };
    }
    //Creo titulo de tablas
    createTitle(title){

        let style = {
            background:"linear-gradient(to right, #ee0979, #ff6a00)",
            color:"#FFF"
        };

        return(
            <div style={style}>
                <Typography 
                style={{
                    margin:"15px"
                }}
                variant="h6">
                    {
                        typeof title === "string"?
                        title:
                        "Texto indefinido"
                    }
                </Typography>
            </div>
        );
    }


}

export default table_assets;