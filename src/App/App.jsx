import React from "react"
import SignIn from "./SignIn.jsx"
import SignUp from "./SignUp.jsx"
import { users, addUser, checkCompatibility } from "./Users.js"
import Logged from "./Logged.jsx"
import validateEmail from "./Validation.js"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoginForm: true,
            isLogged: false,
            login: "",
            password: "",
            secondPassword: "",
            email: ""
        }
    }

    handleLoginAndPasswordChange = (e) => {
         this.setState(
            {
                [e.target.name]: e.target.value
            }
         )
    }

    clearStateForm = (e) => {
        this.setState(
            {
                login: "",
                email: "",
                password: "",
                secondPassword: ""
            }
        )
    }

    changeForm = (e) => {
        this.setState(prevState => ({
            isLoginForm: !prevState.isLoginForm
        }));
        this.clearStateForm()
    }

    changeLoginStatus = (e) => {
        this.setState(prevState => ({
            isLogged: !prevState.isLogged
        }));
    }

    displayFormData = (e) => {
        if(this.state.isLoginForm){
            if(checkCompatibility(this.state.login, this.state.password)) {
                alert("Congratulation")
                this.changeLoginStatus()
            }
        }else {
            if(checkCompatibility(this.state.login, this.state.password, this.state.email)) {
                addUser(this.state.login,this.state.email,this.state.password)
                this.changeForm()
            }  
        }
    }

    render(){
        return(
                <div className="main">
                    {

                    !this.state.isLogged ?
                        this.state.isLoginForm ? 
                            <SignIn 
                                placeholder = {this.state.answer}
                                login = {this.state.login}
                                password = {this.state.password}
                                onChange = {this.handleLoginAndPasswordChange}
                                onClick = {this.displayFormData}
                                onClickChangeForm = {this.changeForm}
                            /> :
                            <SignUp 
                                login = {this.state.login}
                                email = {this.state.email}
                                password = {this.state.password}
                                secondPassword = {this.state.secondPassword}
                                onChange = {this.handleLoginAndPasswordChange}
                                onClick = {this.displayFormData}
                                onClickChangeForm = {this.changeForm}/>
                    :
                    <Logged login = {this.state.login}/>
                    }
                </div>
            );
    }

}

export default App;