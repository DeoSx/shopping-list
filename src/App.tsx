import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AsideBlock from './components/AsideBlock'
import MainPage from './pages/MainPage/MainPage'
import HistoryPage from './pages/HistoryPage/HistoryPage'
import HistorySlugPage from './pages/HistoryPage/HistorySlugPage'

import './App.scss'

const App: React.FC = () => {
  return (
    <main className="main-container">
      <BrowserRouter>
        <AsideBlock />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/history" component={HistoryPage} />
          <Route path="/history/:id" component={HistorySlugPage} />
        </Switch>
      </BrowserRouter>
    </main>
  )
}

export default App
