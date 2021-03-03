import '../style/index.css'
import {CurrentUser} from '../src/context/UserGroup.context'

export default function MyApp({ Component, pageProps }) {
  return (
  <CurrentUser.Provider value="Hannah">
  <Component {...pageProps} />
  </CurrentUser.Provider>
  )
}
