import React from "react"
import { Avatar, Container, Grid, MenuItem, Typography } from "@mui/material"
import PropTypes from "prop-types"
import usaIcon from "../../../resources/layout/usa.png"
import spainIcon from "../../../resources/layout/spain.png"
import {
    CustomSelect,
    GridCustom,
    GridSelect,
} from "../../styles/layout/Layout.styled"

const LayoutContent = ({ language, handleChangeLanguage }) => {
    return (
        <Container
            maxWidth="auto"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <GridSelect item xs={12} md={12}>
                <CustomSelect
                    onChange={handleChangeLanguage}
                    autoWidth
                    defaultValue="en_us"
                    inputProps={{
                        MenuProps: {
                            MenuListProps: {
                                sx: {
                                    backgroundColor: (theme) => theme.body.backgroundColor,
                                },
                            },
                        },
                    }}
                >
                    <MenuItem value="en_us">
                        <GridCustom>
                            <Avatar src={usaIcon} alt="Usa Icon" />
                            <Typography variant="h6" color="white.main">
                                {language["language_titles"]["en_us"]}
                            </Typography>
                        </GridCustom>
                    </MenuItem>
                    <MenuItem value="es_es">
                        <GridCustom>
                            <Avatar src={spainIcon} alt="Spain Icon" />
                            <Typography variant="h6" color="white.main">
                                {language["language_titles"]["es_es"]}
                            </Typography>
                        </GridCustom>
                    </MenuItem>
                </CustomSelect>
            </GridSelect>
            <Grid item xs={12} md={12}>
                <Typography variant="h1" gutterBottom>
                    Money Minder
                </Typography>
            </Grid>
            <Grid item xs={12} md={12}>

            </Grid>
        </Container>
    )
}

LayoutContent.propTypes = {
    language: PropTypes.object.isRequired,
    handleChangeLanguage: PropTypes.func.isRequired,
}

export default LayoutContent
