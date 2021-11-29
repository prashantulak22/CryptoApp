import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchanges, Homepage, CryptoDetails, CryptoCurrencies, News } from './components';


const App = () => {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ color: "white", textAlign: 'center' }}>
            Crypto<br />
            All right reserved.
          </Typography.Title>


        </div>
      </div>

    </div>
  )
}

export default App

