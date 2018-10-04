import React from 'react';
import { Container, Col, Row } from "../components/grid";
// import Slide from 'react-reveal/Slide';
// import Fade from 'react-reveal/Fade';
import firebase from "../firebase";

class Emailer extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            name: "",
            mailerList: [],

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
            }
            this.setState({
                mailerList: newState
            });
            console.log(this.state.mailerList)
        });
    }

    removeItem(mailer) {
        const emailer = firebase.database().ref(`/mailer/${mailer}`);
        emailer.remove();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-5">
                        <div>
                            {this.state.mailerList.map((mailer) =>
                                <div key={mailer.id}>
                                    <p>{mailer.email}</p>
                                    <p>{mailer.name}</p>

                                    <button onClick={() => this.removeItem(mailer.id)}>X</button>

                                </div>
                            )}
                        </div>
                    </Col>
                    <Col size="md-5">
                        hi jon2
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Emailer
