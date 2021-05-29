import {
  AppBar,
  Button,
  Box, 
  Toolbar,
  makeStyles,
  Hidden,
  Paper,
  InputBase,
  IconButton,
  Avatar,
} from '@material-ui/core';

  
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    cursor: 'pointer',
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  avatar: {
    height: 32,
    width: 32,
  },
  popover: {
    width: 200,
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700,
  },
  input: {
    flex: 1,
  },
  icons: {
    paddingRight: theme.spacing(2),
  },
}));

  

function TopBar() {
  const classes = useStyles();

  return (
       <AppBar className={classes.root} color="default">
          <Toolbar className={classes.toolbar}>
            <Box display="flex" alignItems="center">
              <MenuIcon />
              <img src="/new-youtube-logo.svg" alt="logo" className={classes.logo} />
            </Box>

            <Hidden mdDown> 
            <Box>
              <Paper component="form" className={classes.search}>
                <InputBase
                  className={classes.input}
                  placeholder="Pesquisar"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
          </Box>
          </Hidden>
          <Box display="flex">
          <IconButton className={classes.icons}> 
          </IconButton>

          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>

          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>

          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>

          <Button
              color="secondary"
              component="a"
              variant="outlined"
              startIcon={<AccountCircle />}
              
            >
              Fazer Login
            </Button>
        </Box>
           
           


          </Toolbar>
       </AppBar>
  )
}
   

export default TopBar;