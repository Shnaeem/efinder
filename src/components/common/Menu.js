import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Paper } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import {
  fontFamily,
  secondaryColor,
  textColor,
  activeColor,
} from '../common/Scheme';

const menuData = [
  { menuName: 'Home', to: '/' },
  { menuName: 'Concerts', to: '/concerts' },
  { menuName: 'Sports', to: '/sports' },
  { menuName: 'About Us', to: '/aboutus' },
];

const useStyles = makeStyles((theme) => ({
  menuBtnIcon: {
    color: textColor,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  paper: {
    padding: '20px',
    backgroundColor: secondaryColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    borderRadius: '0px',
  },
  navLink: {
    textDecoration: 'none',
    color: textColor,
    '&:hover': {
      color: textColor,
      opacity: '0.7',
      transition: '0.2s ease-in-out',
    },
  },
  activeNavLink: {
    color: activeColor,
  },
  menuBtn: {
    textTransform: 'capitalize',
    fontFamily,
  },
}));

function Menu() {
  const classes = useStyles();
  const { menuBtnIcon, menuBtn, paper, navLink, activeNavLink } = classes;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Fragment>
      <Button
        aria-describedby={id}
        className={menuBtnIcon}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Paper className={paper}>
          {menuData.map((menu, index) => {
            return (
              <Button className={menuBtn} key={index}>
                <NavLink
                  to={menu.to}
                  exact
                  className={navLink}
                  activeClassName={activeNavLink}
                >
                  {menu.menuName}
                </NavLink>
              </Button>
            );
          })}
        </Paper>
      </Popover>
    </Fragment>
  );
}

export default Menu;
