import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * <Head />여기에 사용 된 구성 요소는 의 구성 요소와 다릅니다.
 * next/head. <Head />여기에 사용 된 구성 요소 <head>는 모든 페이지에 공통적 인 코드 에만 사용해야 합니다.
 * <title>태그 와 같은 다른 모든 경우에는 next/head페이지 또는 구성 요소에서 사용 하는 것이 좋습니다 .
 */

class MyDocument extends Document {
  render() {
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}

export default MyDocument;
