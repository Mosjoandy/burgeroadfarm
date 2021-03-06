import React from 'react';
import { Col, Row } from "../../components/grid";
import "./Emailer.css"
import firebase from "../../utils/firebase";
import Fade from "react-reveal/Fade";

class Emailer extends React.Component {

    constructor() {
        super()
        this.state = {
            mailerList: [],
            copied: false
        };
        this.copyToClipboard = this.copyToClipboard.bind(this)
    };

    componentDidMount() {
        const mailer = firebase.database().ref('mailer');
        mailer.on('value', (snapshot) => {
            let mailer = snapshot.val();
            let newState = [];
            for (let info in mailer) {
                newState.push({
                    id: info,
                    name: mailer[info].name,
                    email: mailer[info].email
                });
            };
            this.setState({
                mailerList: newState
            });
        });
    };

    removeItem(mailer) {
        const emailer = firebase.database().ref(`/mailer/${mailer}`);
        emailer.remove();
    };

    copyToClipboard() {
        this.setState({ copied: true });
        let theList = this.state.mailerList.map((index) =>
            " " + index.email)
        let textField = document.createElement('textarea')
        textField.innerText = theList
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    };

    render() {

        return (
            <Row>
                <Col size="md-7">
                    <Fade>
                        <div className="card">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th className="text-center">Remove</th>
                                    </tr>
                                    {this.state.mailerList.map((mailer, index) =>
                                        <Fade key={index}>
                                            <tr key={mailer.id}>

                                                <td>{mailer.name}</td>
                                                <td>{mailer.email}</td>
                                                <td className="text-center"><button type="button" className="btn btn-danger" onClick={() => this.removeItem(mailer.id)}>X</button></td>

                                            </tr>
                                        </Fade>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </Fade>
                </Col>
                <Col size="md-5">
                    {!this.state.copied ?
                        <Fade>
                            <button className="btn btn-success" type="button" onClick={this.copyToClipboard}>
                                Copy All
                               </button>
                        </Fade>
                        :
                        <Fade>
                            <img className="pl-2" id="smolCheck" src={require("../../images/check.png")} alt="check mark" /><span>Copied to Clipboard</span>
                        </Fade>
                    }
                    <div className="card-body">
                        {this.state.mailerList.map((mailer) =>
                            <span key={mailer.id}>{mailer.email}, </span>
                        )}
                    </div>
                </Col>
            </Row>
        );
    };
};

export default Emailer
