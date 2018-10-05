import React from 'react';
import { Container, Col, Row } from "../components/grid";
import "./Emailer.css"
import Fade from 'react-reveal/Fade';
// import Fade from 'react-reveal/Fade';
import firebase from "../firebase";

class Emailer extends React.Component {

    constructor() {
        super()
        this.state = {
            // email: "",
            // name: "",
            mailerList: [],
            copySuccess: "",
        };
        this.removeItem = this.removeItem.bind(this);
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
            console.log(this.state.mailerList)
        });
    };

    removeItem(mailer) {
        const emailer = firebase.database().ref(`/mailer/${mailer}`);
        emailer.remove();
    };

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        this.setState({ copySuccess: 'Copied!' });
    };
    
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
                        {this.state.mailerList.map((mailer) =>
                            <span key={mailer.id}>{mailer.email},{" "}
                            </span>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Emailer
