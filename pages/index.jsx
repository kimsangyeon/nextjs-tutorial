import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Divider, Header, Loading } from 'semantic-ui-react';
import ItemList from '../src/components/ItemList';

// eslint-disable-next-line no-undef
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Home = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getData() {
    axios.get(API_URL).then(res => {
      if (Array.isArray(res.data) && res.data.length > 0) {
        setList(res.data);
        setIsLoading(false);
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
        <meta name="description" content="nextjs tutorial" />
      </Head>
      {isLoading ? (
        <div style={{ padding: '300px 0' }}>
          <Loading inline="centered" active>
            Loading
          </Loading>
        </div>
      ) : (
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
      )}
      
    </div>
  );
};

export default Home;
