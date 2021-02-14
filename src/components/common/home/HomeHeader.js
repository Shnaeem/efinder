import React, { useEffect } from 'react';
import Card from '../Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataAction } from '../../../action/actions';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mainSectionCss: {
    margin: '24px 32px',
    background: 'white',
    padding: '16px',
  },
}));

function HomeHeader() {
  const classes = useStyles();
  const { mainSectionCss } = classes;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer.data);

  useEffect(() => {
    dispatch(fetchDataAction());
  }, []);

  console.log(data);

  return (
    <section className={mainSectionCss}>
      <Card />
      <Card />
      <Card />
    </section>
  );
}

export default HomeHeader;
