import {Homepage, AddParticipant} from "./containers"

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
    
]

export default routes