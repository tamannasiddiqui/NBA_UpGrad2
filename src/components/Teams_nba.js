import React, { useState } from 'react';
import axios from "axios";
import { Paper, Grid, Typography, Tooltip } from '@material-ui/core';

function Loading() {
    return (
        <Grid item lg={3} md={4} xs={12} style={{ margin: "0 auto", textAlign: "center" }}>
            <Typography variant="h2">
                Loading
            </Typography>
        </Grid>
    )
}

function Teams() {
    const [data, setData] = useState(["Loading"]);
    if (data[0] === "Loading")
        axios.get("https://www.balldontlie.io/api/v1/teams")
            .then(res => setData(res.data.data));
    return (
        <Paper>
            <Grid container wrap="wrap" style={{ textAlign: "center" }} spacing={40}>
                {
                    data[0] === "Loading" ?
                        <Loading /> :
                        data.map((item, idx) => {
                            return (
                               
                            );
                        })
                }
            </Grid>
        </Paper>
    )
}

export default Teams;