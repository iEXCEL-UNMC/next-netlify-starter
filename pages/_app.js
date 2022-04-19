import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application


