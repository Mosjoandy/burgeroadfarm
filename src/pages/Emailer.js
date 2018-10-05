import React from 'react';
import { Container, Col, Row } from "../components/grid";
import "./Emailer.css"
import firebase from "../firebase";

class Emailer extends React.Component {

    constructor() {
        super()
        this.state = {
            mailerList: [],
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
                    <Col size="md-5">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Remove</th>
                                </tr>
                                {this.state.mailerList.map((mailer) =>
                                    <tr key={mailer.id}>
                                        <td>{mailer.name}</td>
                                        <td>{mailer.email}</td>
                                        <td className="text-center"><button type="button" className="btn btn-danger" onClick={() => this.removeItem(mailer.id)}>X</button></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </Col>
                    <Col size="md-5">
                        <button
                            className="btn btn-success"
                            type="button"
                            onClick={this.copyToClipboard}
                            data-toggle="popover"
                            data-trigger="focus"
                            title="Copy All"
                            data-content="Copied to Clipboard"
                        >
                            Copy All
                        </button>
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
