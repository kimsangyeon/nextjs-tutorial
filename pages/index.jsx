import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Divider, Header } from 'semantic-ui-react';
import ItemList from '../src/components/ItemList';

const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

const Home = () => {
  const [list, setList] = useState([]);

  function getData() {
    axios.get(API_URL).then(res => {
      if (Array.isArray(res.data) && res.data.length > 0) {
        setList(res.data);
      }
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | Luffy</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        Best Products
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 40 }}>
        New Products
        <Divider />
        <ItemList list={list.slice(9)} />
      </Header>
    </div>
  );
};

export default Home;
