import { Avatar, Grid, MenuItem, Typography } from "@mui/material"
import NotificationContent from "../notification/NotificationContent"
import {
    CustomSelect,
    GridCustom,
    GridSelect,
} from "../../styles/layout/Layout.styled"
import usaIcon from "../../../resources/layout/usa.png"
import spainIcon from "../../../resources/layout/spain.png"
import React from "react"
import { useAppContext } from "../../providers/AppProvider"

const HeaderContent = () => {
    const { language, handleChangeLanguage } = useAppContext()
    return (
        <Grid container spacing={2} display="flex">
            <Grid
                item
                xs={10.5}
                md={10.5}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <NotificationContent />
            </Grid>
            <GridSelect item xs={1.5} md={1.5}>
                <CustomSelect
                    onChange={handleChangeLanguage}
                    autoWidth
                    defaultValue="en_us"
                    inputProps={{
                        MenuProps: {
                            MenuListProps: {
                                sx: {
                                    backgroundColor: (theme) =>
                                        theme.body.backgroundColor,
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
        </Grid>
    )
}

HeaderContent.propTypes = {}

export default HeaderContent
