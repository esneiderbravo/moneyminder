import {
    Avatar,
    Container,
    Grid,
    MenuItem,
    OutlinedInput,
    Select,
    Typography,
} from "@mui/material"
import PropTypes from "prop-types"
import usaIcon from "../../../resources/layout/usa.png"
import spainIcon from "../../../resources/layout/spain.png"

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
            <Grid item xs={12} md={12} sx={{ display: "flex", right: 0 }}>
                <Select
                    onChange={handleChangeLanguage}
                    input={<OutlinedInput />}
                    autoWidth
                    defaultValue="en_us"
                >
                    <MenuItem value="en_us">
                        <Avatar src={usaIcon} alt="Usa Icon" />
                        <em> {language["language_titles"]["en_us"]}</em>
                    </MenuItem>
                    <MenuItem value="es_es">
                        <Avatar src={spainIcon} alt="Spain Icon" />
                        <em>{language["language_titles"]["es_es"]}</em>
                    </MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} md={12}>
                <Typography variant="h1" gutterBottom>
                    Money Minder
                </Typography>
            </Grid>
        </Container>
    )
}

LayoutContent.propTypes = {
    language: PropTypes.object.isRequired,
    handleChangeLanguage: PropTypes.func.isRequired,
}

export default LayoutContent
