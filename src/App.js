import { Route, Redirect } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
// import logo from './logo.svg';
import './App.css';
import { SearchAll } from "./button/SearchAllButton";
import { ApplicationViews } from "./ApplicationViews"


export const App = () => (
    <>

        <Route render={() => {
            // The user id is saved under the key app_user_id in local Storage. Change below if needed!
            if (localStorage.getItem("app_user_id")) {
                return (
                    <>
                        <h2>crèche</h2>
                        <p>Hello, let us help you find the perfect child care provider!</p>
                        <Route render={props => <SearchAll {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                        

                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />

    </>

)
