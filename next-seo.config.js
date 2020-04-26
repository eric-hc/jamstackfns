const title =
  'jamstackfns – The best serverless functions for JAMstack applications.';
const description =
  'Deploy serverless functions to Vercel or Netlify for your static site.';

const SEO = {
  title,
  description,
  canonical: 'https://jamstackfns.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://jamstackfns.com',
    title,
    description,
    images: [
      {
        url: 'https://jamstackfns.com/og.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@jamstackfns',
    site: '@jamstackfns',
    cardType: 'summary_large_image'
  }
};

export default SEO;
