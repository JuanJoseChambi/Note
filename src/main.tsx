import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './Style/_global.scss';
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode>, */}
  </BrowserRouter>
)
