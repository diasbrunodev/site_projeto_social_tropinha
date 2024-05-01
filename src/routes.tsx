import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { Guidelines } from './pages/Guidelines'
import { PartnersPage } from './pages/PartnersPage'
import { ActivitiesPage } from './pages/Activities'
import { Contact } from './pages/Contacts'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre-nos" element={<AboutUs />} />
    <Route path="/diretrizes" element={<Guidelines />} />
    <Route path="/parceiros" element={<PartnersPage />} />
    <Route path="/atividades" element={<ActivitiesPage />} />
    <Route path="/contato" element={<Contact />} />
  </Routes>
)
