import React from 'react';
import "./styles.js"
import { Route, Switch } from "react-router-dom"
import routes from "../../routes"

const Main = () => {
    return (
        <div>
           {
               routes.map(item => {
                   return(
                       <Route 
                           path={item.path}
                           exact={item.exact}
                           component={item.exact}
                       />
                       )
               })
           } 
        </div>
    );
}

export default Main;
