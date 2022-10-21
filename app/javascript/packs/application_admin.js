import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import DateFnsUtils from '@date-io/date-fns'
import Products from '../pages/admin/Products'
import axios from 'axios'
import '../stylesheets/application'
import ManageLaboratories from "../pages/admin/ManageLaboratories";
import ManageCategories from "../pages/admin/ManageCategories";
import ManageBrands from "../pages/admin/ManageBrands";

require('@rails/activestorage').start()
require('channels')

const csrf = document.querySelector("meta[name='csrf-token']").getAttribute('content')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['X-CSRF-Token'] = csrf

const queryClient = new QueryClient()

const App = () => {
  return (
    <BrowserRouter basename={'admin'}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/gestion_laboratorios" element={<ManageLaboratories />} />
        <Route path="/gestion_categorias" element={<ManageCategories />} />
        <Route path="/gestion_marcas" element={<ManageBrands />} />
      </Routes>
    </BrowserRouter>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.body.appendChild(document.createElement('div')))
  root.render(
    /*<MuiPickersUtilsProvider utils={DateFnsUtils}>

    </MuiPickersUtilsProvider>*/
    <QueryClientProvider client={queryClient}>
      <App/>
    </QueryClientProvider>
  )
})