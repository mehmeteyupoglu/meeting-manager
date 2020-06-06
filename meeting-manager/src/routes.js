import {Homepage, AddParticipant} from "./containers"
import { Step1, Step2, Step3 } from "./components"

const routes = [
    {
        title: "Home Page", 
        path: "/", 
        exact: true, 
        component: Homepage, 
    }, 
    {
        title: "Add Participant", 
        path: "/add-participant",
        exact: false, 
        component: AddParticipant
    },
    {
        title: "Step 1", 
        path: "/add-participant/step-1", 
        exact: true, 
        component: Step1
    }, 
    {
        title: "Step 2", 
        path: "/add-participant/step-2", 
        exact: true, 
        component: Step2 
    },
    {
        title: "Step 3", 
        path: "/add-participant/step-3", 
        exact: true, 
        component: Step3 
    }
    
]

export default routes