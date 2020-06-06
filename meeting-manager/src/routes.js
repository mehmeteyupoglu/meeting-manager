import {Homepage, Step1, Step2, Step3} from "./containers"
import {  } from "./components"

const routes = [
    {
        title: "Home Page", 
        path: "/", 
        exact: true, 
        component: Homepage, 
    }, 
    {
        title: "Step 1", 
        path: "/step-1", 
        exact: false, 
        component: Step1
    }, 
    {
        title: "Step 2", 
        path: "/step-2", 
        exact: false, 
        component: Step2 
    },
    {
        title: "Step 3", 
        path: "/step-3", 
        exact: false, 
        component: Step3 
    }
    
]

export default routes