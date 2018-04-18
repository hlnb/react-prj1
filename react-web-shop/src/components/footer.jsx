import React from 'react';

const Footer = React.createClass({
  render(){
    return(
      <footer className="footer text-center">
      <div className="container">
      <p className="text-muted">Copyright &copy; 2018 Your Web Shop All Rights Reserved</p>
      </div>
    );
  }
});

module.exports = Footer;