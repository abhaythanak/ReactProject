
import { CreateOutlined } from "@mui/icons-material";
import {  Button, Container, List, ListItem, styled } from "@mui/material";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";

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
        <Container>
           
                <ComposeButton>
                    <CreateOutlined/> Compose
                </ComposeButton>
            
            <List>
                {
                    SIDEBAR_DATA.map((data,i) => (
                        <ListItem key={i}>
                        <data.icon fontSize="small" />{data.title}
                    </ListItem>
                    )

                    )
                    
                }
            </List>
            <ComposeMail/>
        </Container>

    )
}
