import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Head from 'next/head';
import Item from '../../src/components/Item';

const Post = ({ item }) => (
  <>
    {item && (
      <>
        <Head>
          <title>{item.title}</title>
          <meta name="description" content={item.description} />
        </Head>
        <Item item={item} />
      </>
    )}
  </>
);

Post.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  })
}

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
