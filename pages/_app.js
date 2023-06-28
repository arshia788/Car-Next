import '../styles/globals.css';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {

  return (
    <Layout a="milad" >
      <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp