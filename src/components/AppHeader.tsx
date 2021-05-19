import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';

export default class AppHeader extends React.Component {
  render() {
    return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Benepeak</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
            <Link className="mr-5 hover:text-gray-900" to="/ecommerce">E-Commerce</Link>
            <Link className="mr-5 hover:text-gray-900" to="/blog">Blog</Link>
            <Link className="mr-5 hover:text-gray-900" to="/about">About</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Sign in
            <ArrowRightOutlined className="w-4 h-4 ml-1" />
          </button>
        </div>
      </header>
    )
  }
}
