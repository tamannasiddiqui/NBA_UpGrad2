import React, { useState } from 'react';
import axios from "axios";
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import DialogGames from './DialogGames';

function Loading() {
    return (
        <Grid item lg={3} md={4} xs={12} style={{ margin: "0 auto", textAlign: "center" }}>
            <Typography variant="h2">
                Loading
            </Typography>
        </Grid>
    )
}


    return (
        <Paper>
            <Grid container wrap="wrap" style={{ textAlign: "center" }} spacing={40}>
                {
                    loading ?
                        <Loading /> :
                        data.map((item, idx) => {
                            return (
                                <Grid item md={4} lg={3} xs={12} key={idx} onClick={(e) => {return openModal(e,idx)}}>
                                    <Typography variant="title">
                                        {(new Date(item.date)).toLocaleDateString("latn", options)}
                                        <Typography variant="subtitle1">
                                            {item.status}
                                        </Typography>
                                    </Typography>
                                    <DialogGames data={item} open={modalOpen[idx]} close={() => {return closeModal(idx)}}/>
                                </Grid>
                            );
                        })
                }
            </Grid>
            
        </Paper>
    )
}

export default Games;