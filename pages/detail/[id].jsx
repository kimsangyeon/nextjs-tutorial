/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/components/Item';

/**
 * const router = useRouter();
 * const { id } = router.query;
 */

const Post = ({ item, name }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div style={{ padding: '100px 0' }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    )
  }

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

export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    // paths: [
    //   { params: { id: '729' } },
    //   { params: { id: '730' } },
    //   { params: { id: '740' } },
    // ],
    paths: data.slice(0, 9).map(item => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
    // fallback: true 접속시 빌드 생성하여 static html 생성해둠 이후 접속시 static html 사용
  };
}

export async function getStaticProps(context) {
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
