import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import {DataComponet} from "./Components/DataComponet";
// import * as serviceWorker from "./serviceWorker";


import "/style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <BrowserRouter>
  <DataComponet />
// </BrowserRouter>,

)
// serviceWorker.unregister();