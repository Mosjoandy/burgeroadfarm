import React from "react"
import { Container, Col, Row } from "../components/grid";
import { auth, provider } from "../utils/firebase";
import Emailer from "../pages/Emailer/Emailer";

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            user: null,
            current: "/bossjontue",
            boss: "",
            userID: ""
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    };

    logout() {
        auth.signOut()
            .then(() => {
                // this.setState({ user: null });
                this.setState({ userID: "" });
            });
    };

    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({ user });
                this.setState({ boss: user.displayName });
                this.setState({ userID: user.uid });
            });
    };

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user.uid === "aXKEZAlJKpdlb0wm1NWEFHHQgFh1") {
                this.setState({ user });
            };
        });
    };

    render() {
        return (
            <Container>
                {
                    this.state.userID === "aXKEZAlJKpdlb0wm1NWEFHHQgFh1" ?
                        <div>
                            <Row>
                                <Col size="md-12">
                                    <div className="card-body text-center">
                                        <div>Welcome {this.state.boss}</div>
                                        <br />
                                        <button type="btn" className="btn button-secondary" onClick={this.logout}>Log Out</button>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                            <Emailer />
                        </div>
                        :
                        <Col size="md-12">
                            <div className="card-body text-center">
                                <div>You've reached a nondescript door.</div>
                                <br />
                                <div>If you are the boss, please {" "}
                                    <button type="btn" className="btn button-primary" onClick={this.login}>Knock</button>
                                </div>
                            </div>
                        </Col>
                }
            </Container>
        )
    }

}

export default Login