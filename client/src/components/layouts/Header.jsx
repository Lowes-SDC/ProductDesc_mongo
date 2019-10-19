import React from 'react';
import ReactDOM from "react-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import MoreIcon from '@material-ui/icons/MoreVert';
import Icon from '@mdi/react';
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
import Paper from '@material-ui/core/Paper';
import StepLabel from "@material-ui/core/StepLabel";
import { mdiCartOutline } from '@mdi/js';

const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
    },
    searchIcon: {
      padding: theme.spacing(1, 1, 1, 5),
      width: '0%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex'
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 8, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 300,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >      
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          title="MyHallowes"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PersonIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={7} color="secondary">
                <Icon path={mdiCartOutline}
                    title="Cart Count"
                    size={1}
                    color="black"
                />
              </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className="header" color='inherit'>
        <Toolbar>
            <StepLabel icon={ <img src="https://fec-hallowes.s3.amazonaws.com/Hallowes.png" alt="" width="75" height="65" /> } />
            <div>
              <span><button className="headerCat" title="Shop">Shop</button></span>
              <span><button className="headerCat" title="Ideas">Ideas</button></span>
              <span><button className="headerCat" title="Savings">Savings</button></span>
              
              
              
              
              
            </div>
            
          {/* <div className={classes.search}>
            <IconButton className={classes.searchIcon} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="What are you looking for today?"
              fullWidth
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          <Paper className={classes.search}>
            <IconButton className={classes.searchIcon} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              placeholder="What are you looking for today?"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Paper>

          <div className={classes.grow} />
            <div className={classes.sectionDesktop}>            
              <IconButton className="iconPersonSize"
                title="MyHallowes"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <PersonIcon className="iconPerson"/>
              </IconButton>
              <IconButton aria-label="Cart" className="iconCartSize">
                <Badge badgeContent={3} color="secondary">
                  <Icon  className="iconCart" path={mdiCartOutline}
                    title="Cart Count"
                    size={1}
                    color="black"
                    />
                </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

ReactDOM.render(<Header />, document.getElementById("head"));


{/* <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
              <Icon path={mdiCartOutline}
                title="User Profile"
                size={1}
                horizontal
                vertical
                rotate={90}
                color="black"
                spin/>
              </Badge>
            </IconButton> */}


{/* <script>
                {
                    function onHover(object){
                        object.style.textDecorationLine = "underline";
                     }
                    function offHover(object){
                        object.style.textDecorationLine = "none";
                    }
                }
           </script>


            <button style="background-color:white; border: none; outline: none;" onmouseover={onHover(this)}
                 onmouseout={offHover(this)}>Shop
            </button> */}

            //<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>


            
// const useStyles = makeStyles(theme => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     borderColor: 'green',
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(1, 1, 1, 7),
//     width: '0%',
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex'
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 100),
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: 200,
//     },
//   },
//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//     },
//   },
//   sectionMobile: {
//     display: 'flex',
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
// }));

