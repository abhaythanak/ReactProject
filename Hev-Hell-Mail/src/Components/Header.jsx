import { AppBar, Toolbar, styled, InputBase, Box} from '@mui/material'
import { Menu as MenuIcon, Search, Tune, HelpOutlineOutlined, SettingsOutlined, AppsOutlined, AccountCircleOutlined } from '@mui/icons-material'
import { GmailLogo } from '../constant/constant'

const StyledAppBar = styled(AppBar)({
    background:'#f5f5f5',
    boxShadow:'none'
})

const SearchWrapper = styled(Box)({
    background:'#EAF1FB',
    marginLeft:80,
    borderRadius:8,
    minWidth: 690,
    maxWidth:720,
    height:48,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    '& > div': {
        width: '100%',
        padding: '0 10px'
    }
})

const OptionWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    '& > svg': {
        marginLeft: '20px'
    }
})

export default function Header() {

    return(
        <StyledAppBar   position='static'>
            <Toolbar>
                <MenuIcon color='action'/>
                <img src={GmailLogo} style={{width:100, marginLeft:15}} alt="logo" />
                <SearchWrapper>
                    <Search color='action'/>
                    <InputBase placeholder='Search mail'/>
                    <Tune color='action'/>
                </SearchWrapper>
                <OptionWrapper>
                    <HelpOutlineOutlined color='action'/>
                    <SettingsOutlined color='action'/>
                    <AppsOutlined color='action'/>
                    <AccountCircleOutlined color='action'/>
                </OptionWrapper>
            </Toolbar>
        </StyledAppBar  >
    )
}
