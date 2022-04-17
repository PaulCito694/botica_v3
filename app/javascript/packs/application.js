// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import DateFnsUtils from '@date-io/date-fns'

require('@rails/activestorage').start()
require('channels')

const csrf = document.querySelector("meta[name='csrf-token']").getAttribute('content')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['X-CSRF-Token'] = csrf

const queryClient = new QueryClient()

const App = () => {
  return (
    <Router>
      <Routes>
        {/*<Route exact path="/" element={<Products/>}/>
        <Route exact path="/algo" element={<Products/>}/>*/}
      </Routes>
    </Router>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.body.appendChild(document.createElement('div')))
  root.render(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <QueryClientProvider client={queryClient}>
        <App/>
      </QueryClientProvider>
    </MuiPickersUtilsProvider>
  )
})

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import '../stylesheets/application'
