import React from "react"
import { auth, provider } from "../firebase";

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            user: null,
            current: "/bossjontue",
            boss: "",
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    };

    logout() {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    };

    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({ user });
                console.log(user);
            });
    };

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user.uid === "aXKEZAlJKpdlb0wm1NWEFHHQgFh1") {
                console.log("there's poop with " + user.uid);
                this.setState({ boss: user.displayName })
                this.setState({ user });
            };
        });
    };

    routeCheck = (string) => {
        if (this.state.current !== string) {
            this.setState({
                current: string
            });
        };
    };

    render() {
        return (
            <div>
                {
                    this.state.user ?
                        <div>
                            <div>Welcome {this.state.boss}</div>

                            <a type="btn" className="mr-3 btn button" onClick={this.logout}>Log Out</a>
                        </div>
                        :
                        <div>
                            <button type="btn" className="mr-3 btn button" onClick={this.login}>Log In</button>
                        </div>
                }
            </div>
        )
    }

}

export default Login