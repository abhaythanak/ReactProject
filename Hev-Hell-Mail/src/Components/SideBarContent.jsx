import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";

const ComposeButton = styled(Button)({
    background: '#c2e7ff',
    color:'#001d35',
    padding: 15,
    minWidth: 140,
    borderRadius: 15,
    textTransform:'none'

})

export default function SideBarContent() {
    return(
        <Box>
            <Box>
                <ComposeButton><CreateOutlined/> Compose</ComposeButton>
            </Box>
            <Box></Box>
        </Box>

    )
}
