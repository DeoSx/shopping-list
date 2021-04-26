import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AsideBlock from './components/AsideBlock'
import MainPage from './pages/MainPage/MainPage'
import HistoryPage from './pages/HistoryPage/HistoryPage'

import './App.scss'

const App: React.FC = () => {
  return (
    <main className="main-container">
      <BrowserRouter>
        <AsideBlock />
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/history" component={HistoryPage} />
        </Switch>
      </BrowserRouter>
    </main>
  )
}

export default App

