import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Menu from './Menu';
import {
  primaryColor,
  secondaryColor,
  textColor,
  flexBetween,
  flexStart,
  activeColor,
  fontFamily,
} from '../common/Scheme';

const menuData = [
  { menuName: 'Home', to: '/' },
  { menuName: 'Concerts', to: '/concerts' },
  { menuName: 'Sports', to: '/sports' },
  { menuName: 'About Us', to: '/aboutus' },
];

const useStyles = makeStyles((theme) => ({
  navContainerCss: {
    background: primaryColor,
    padding: '14px 8px',
    ...flexBetween,
  },
  inputCss: {
    background: secondaryColor,
    padding: '8px 16px',
    color: textColor,
    fontSize: '12px',
    borderRadius: '5px',
    border: 'none',
    width: '300px',
    marginLeft: '20px',
    fontFamily,
    '&::placeholder': {
      color: 'white',
      fontSize: '12px',
    },
    '&:focus': {
      outline: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: '5px',
    },
  },
  logoWrapper: {
    ...flexStart,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  btnCss: {
    color: textColor,
    textTransform: 'capitalize',
    fontFamily,
    margin: 'auto 10px',
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: activeColor,
      transition: '0.2s ease-in-out',
    },
  },
  activeNavLink: {
    color: activeColor,
  },
  btnContainerCss: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const {
    navContainerCss,
    inputCss,
    logoWrapper,
    btnCss,
    activeNavLink,
    navLink,
    btnContainerCss,
  } = classes;

  return (
    <div className={navContainerCss}>
      <div className={logoWrapper}>
        <img src={logo} alt="eFinder-logo" />
        {/* <input
          type="text"
          className={inputCss}
          placeholder="Search by artist , sports or zip code"
        />
        <button onclick={}>Search</button> */}
      </div>
      <Menu />
      <div className={btnContainerCss}>
        {menuData.map((menu, index) => {
          return (
            <Button className={btnCss} key={index}>
              <NavLink
                exact
                to={menu.to}
                className={navLink}
                activeClassName={activeNavLink}
              >
                {menu.menuName}
              </NavLink>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
