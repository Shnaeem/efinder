import React from 'react';
import { makeStyles } from '@material-ui/core';
import { primaryColor, textColor, fontFamily } from '../common/Scheme';


const useStyles = makeStyles((theme) => ({
  footerContainerCss: {
    background: primaryColor,
    fontFamily,
    width: '100%',
    '& p': {
      padding: '16px',
      textAlign: 'center',
      color: textColor,
      fontSize: '14px',
      margin: '0',
      [theme.breakpoints.down('xs')]: {
        fontSize: '12px',
      },
    },
  },
}));

function Fooer() {
  const classes = useStyles();
  const { footerContainerCss } = classes;

  return (
    <div className={footerContainerCss}>
      <p>Copyright @ eFinder 2021. All rights reserved.</p>
    </div>
  );
}

export default Fooer;
