import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Head from 'next/head';
import Item from '../../src/components/Item';

/**
 * const router = useRouter();
 * const { id } = router.query;
 */

const Post = ({ item, name }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.title}</title>
            <meta name="description" content={item.description} />
          </Head>
          {name} 환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

Post.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  name: PropTypes.string,
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
      // eslint-disable-next-line no-undef
      name: process.env.name,
    },
  };
}
