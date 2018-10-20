import React, { Component } from 'react';
import "./Social.css"

class Social extends Component {
    render() {
        return (
            <div id="socialBar">
                <div>
                    <img id="socialIco" src={require("../../images/facebook.png")} alt="facebook burge road farm" />
                </div>
                <div>
                    <img id="socialIco" src={require("../../images/instagram.png")} alt="instagram burge road farm" />

                </div>
                <div>
                    <img id="socialIco" src={require("../../images/yelp.png")} alt="yelp burge road farm" />

                </div>
                <div>
                    <img id="socialIco" src={require("../../images/google.png")} alt="google burge road farm" />
                </div>
            </div>
        );
    };
};

export default Social

