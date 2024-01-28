import React from "react"
import { Container, Grid, Typography } from "@mui/material"
import GoogleSignInContainer from "../../containers/google/GoogleSignInContainer"

const LayoutContent = () => {
    return (
        <Container
            maxWidth="auto"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Grid item xs={12} md={12}>
                <Typography variant="h1" gutterBottom>
                    Money Minder
                </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
                <GoogleSignInContainer />
            </Grid>
        </Container>
    )
}

LayoutContent.propTypes = {}

export default LayoutContent
