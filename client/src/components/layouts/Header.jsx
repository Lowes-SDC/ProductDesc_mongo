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
        width: 300, //300 for div
      },
    },
    inputInputFocus: {
      padding: theme.spacing(1, 8, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 642, //700 for no div
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
  let hide = true;
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

  document.addEventListener('click', function(event) {
    var isClickInside = document.getElementById("searchBar").contains(event.target);
    if (!isClickInside) {
      document.getElementById("searchBarLong").style.display = "none";
      document.getElementById("searchBarShort").style.display = "block";
      document.getElementById("tab1").style.display = "block";
      document.getElementById("tab2").style.display = "block";
      document.getElementById("tab3").style.display = "block";
  
    } else {
      document.getElementById("searchBarLong").style.display = "block";
      document.getElementById("searchBarShort").style.display = "none";
      document.getElementById("tab1").style.display = "none";
      document.getElementById("tab2").style.display = "none";
      document.getElementById("tab3").style.display = "none";
    }
  });

  

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
            <React.Fragment>
              <button className="headerCat" id="tab1" title="Shop">Shop</button>
              <button className="headerCat" id="tab2" title="Ideas">Ideas</button>
              <button className="headerCat" id="tab3" title="Savings">Savings</button>
            </React.Fragment>
              

          <Paper className={classes.search} id="searchBar">
            <IconButton className={classes.searchIcon} aria-label="menu">
              <SearchIcon />
            </IconButton>

            <InputBase id="searchBarShort"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              placeholder="What are you looking for today?"
              inputProps={{ 'aria-label': 'search' }}
            />
            <InputBase id="searchBarLong"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInputFocus,
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

