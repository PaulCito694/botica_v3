// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import React from 'react'
import {createRoot} from 'react-dom/client'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'
import axios from 'axios'
import '../stylesheets/application'
import Products from "../pages/Products";

require('@rails/activestorage').start()
require('channels')

const csrf = document.querySelector("meta[name='csrf-token']").getAttribute('content')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['X-CSRF-Token'] = csrf

const queryClient = new QueryClient()

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productos" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.body.appendChild(document.createElement('div')))
  root.render(/*<MuiPickersUtilsProvider utils={DateFnsUtils}>

    </MuiPickersUtilsProvider>*/
    <QueryClientProvider client={queryClient}>
      <App/>
    </QueryClientProvider>)
})

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
