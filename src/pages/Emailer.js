import React from 'react';
import { Container, Col, Row } from "../components/grid";
import "./Emailer.css"
import firebase from "../firebase";
import Fade from "react-reveal/Fade";

class Emailer extends React.Component {

    constructor() {
        super()
        this.state = {
            mailerList: [],
            copied: false,
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
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col size="md-7">
                        <Fade>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th className="text-center">Remove</th>
                                    </tr>
                                    {this.state.mailerList.map((mailer) =>
                                        <tr key={mailer.id}>
                                            <Fade delay={1000} duration={2000}>
                                                <td>{mailer.name}</td>
                                                <td>{mailer.email}</td>
                                                <td className="text-center"><button type="button" className="btn btn-danger" onClick={() => this.removeItem(mailer.id)}>X</button></td>
                                            </Fade>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
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
                                <img className="pl-2" id="smolCheck" src={require("../images/check.png")} alt="check mark" /><span>Copied to Clipboard</span>
                            </Fade>
                        }
                        <div className="card-body">
                            {this.state.mailerList.map((mailer) =>
                                <span key={mailer.id}>{mailer.email}, </span>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Emailer
