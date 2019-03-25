import React from "react";
import "./style.css"
import Grid from '@material-ui/core/Grid';
import Form from "../../components/Forms/Input"


function Main() {
    return (

        <main>
            <Grid>
                <Grid className="spaces" item xs={24}></Grid>
                <Grid item xs={24}></Grid>
                <Grid item xs={24}></Grid>
                <Grid spacing={16} justify="center">

                    <div>
                        <h1 justify="center" >Enter a </h1>
                    </div>
                    <div>
                        <Form></Form>
                    </div>

                </Grid >
            </Grid>

            <div className="main">
                <row>

                </row>
            </div>

        </main >
    )
}
export default Main;