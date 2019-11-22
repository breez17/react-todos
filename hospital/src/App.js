import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Pages/Home"
import {About} from "./Pages/About"
import {Navbar} from "./Components/Navbar";
import {Alert} from "./Components/Alert";
import AlertState from "./context/alert/alertState";
import {FirebaseState} from "./context/firebase/FirebaseState";

function App() {
    return (
        <FirebaseState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert

                        />
                        <Switch>
                            <Route
                                path={"/"} exact component={Home}
                            />
                            <Route
                                path={"/about"} exact component={About}
                            />
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </FirebaseState>
    );
}

export default App;
