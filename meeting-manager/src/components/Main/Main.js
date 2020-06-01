import React from 'react';
import "./styles.js"
import { Route, Switch } from "react-router-dom"
import routes from "../../routes"

const Main = () => {
    return (
        <div>
            <Switch>
                {
                routes.map(item => {
                    return(
                        <Route 
                            path={item.path}
                            exact={item.exact}
                            component={item.component}
                        />
                            )
                    })
                } 
            </Switch>     
        </div>
    );
}

export default Main;
