import React from 'react';
import Header from '../../components/navbar'


const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <div className="pt-20"> 
        {children}
      </div>
    </>
  );
};

export default Layout;