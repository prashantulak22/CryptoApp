import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import logo from '../images/logo.png'

const Navbar = () => {
      return (
            <div className='navbar-conatiner'>
                  <div className="logo-container">
                        <Avatar src={logo} />
                        <Typography.Title level={2} className='logo'>
                              <Link to="/">Crypto</Link>
                        </Typography.Title>
                        <Menu theme='dark'>
                              <Menu.Item icon={<HomeOutlined/>}>
                                    <Link to='/'>Home</Link>
                              </Menu.Item>
                              <Menu.Item icon={<FundOutlined/>}>
                                    <Link to='/cryptocurrencies'>CryptoCurrencies</Link>
                              </Menu.Item>
                              <Menu.Item icon={<MoneyCollectOutlined/>}>
                                    <Link to='/exchanges'>Exchanges</Link>
                              </Menu.Item>
                              <Menu.Item icon={<BulbOutlined/>}>
                                    <Link to='/news'>News</Link>
                              </Menu.Item>
                        </Menu>
                  </div>

            </div>
      )
}

export default Navbar
