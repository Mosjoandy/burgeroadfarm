import React, { Component } from 'react';
import "./Social.css"

class Social extends Component {
    render() {
        return (
            <div id="socialBar">
                <div>
                    <a rel="noopener noreferrer" href="https://www.facebook.com/burgeroadfarm/" target="_blank">
                        <img id="socialIco" src={require("../../images/facebook.png")} alt="facebook burge road farm" />
                    </a>
                </div>
                <div>
                    <a rel="noopener noreferrer" href="https://www.instagram.com/burgeroadfarm/" target="_blank">
                        <img id="socialIco" src={require("../../images/instagram.png")} alt="instagram burge road farm" />
                    </a>
                </div>
                <div>
                    <a rel="noopener noreferrer" href="https://www.yelp.com/biz/burge-road-farm-stockton" target="_blank">
                        <img id="socialIco" src={require("../../images/yelp.png")} alt="yelp burge road farm" />
                    </a>
                </div>
                <div>
                    <a rel="noopener noreferrer" href="https://bit.ly/2S04Dua" target="_blank">
                        <img id="socialIco" src={require("../../images/google.png")} alt="google burge road farm" />
                    </a>
                </div>
            </div>
        );
    };
};

export default Social

