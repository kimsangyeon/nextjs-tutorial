/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Head from 'next/head';
import { Divider, Header } from 'semantic-ui-react';
import ItemList from '../src/components/ItemList';

const Home = ({ list }) => {
  return (
    <div>
      <Head>
        <title>HOME | Luffy</title>
        <meta name="description" content="nextjs tutorial" />
      </Head>
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            Best Products
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            New Products
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
    </div>
  );
};

Home.propTypes = {
  list: PropTypes.array,
};

export default Home;

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    }
  };
}