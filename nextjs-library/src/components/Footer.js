import React from "react";
import styled from "styled-components";

export default () => {
    return (
        <Footer>
            <div className="container">
                <div className="row">
                <p style={{marginLeft: '30px', marginRight: '30px'}}><span style={{textAlign: 'left', lineHeight: '60px'}}>©2021 <a href="https://mernjs.github.io/create-mern-app" target="_blank"> Create MERN App</a></span><span style={{float: 'right', lineHeight: '60px'}}><b>By:</b> <a href="https://vijay-pratap-singh.netlify.app" target="_blank"> Vijay Pratap Singh</a></span></p>
                </div>
            </div>
        </Footer>
    );
}

const Footer = styled.footer`
    background-color: #fff;
    width: 100%;
`;