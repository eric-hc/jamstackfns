import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

const GA_TRACKING_ID = 'UA-131784128-2';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="#da532c" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="/favicons/browserconfig.xml"
            name="msapplication-config"
          />
          <meta name="yandex-verification" content="ac24b3c8c045859c" />
          <meta
            name="msvalidate.01"
            content="D3F1E027D2CE5F0BC924EB159C60EA9A"
          />
          <meta
            content="96-GEk0BvQPcuNoT4qfe28GDAmmS4Z7PJbhWPbjYtKc"
            name="google-site-verification"
          />
          <link href="/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/favicons/site.webmanifest" rel="manifest" />
          <link
            href="https://fonts.googleapis.com/css?family=Inter:400,600,700,800&display=swap"
            rel="stylesheet"
          />
          <link
            href="/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#5bbad5"
            href="/favicons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
            `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
