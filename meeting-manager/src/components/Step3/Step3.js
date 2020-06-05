import React, { Component } from 'react';
import {StyledWorkshop} from "./styles.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux"
import { addWorkshop } from "../../state/ducks/appState/actions"

class Step3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount() {
        console.log(this.props)
    }
    
    render() {
        
        const { workshop, numberOfWorkshops } = this.props.appState
        const { addWorkshop } = this.props
        return (
            <StyledWorkshop>
                <div>
                    <div className="tools">
                        <FontAwesomeIcon id="idTools" icon={faTools}/>
                        <h2>Workshop</h2>
                    </div>
                    <div className="workshop">
                        <h3>Deep Dive with Vue3</h3>
                        <hr />
                        <div>
                            <p> {
                                numberOfWorkshops > 0 && ({numberOfWorkshops}) 
                            }
                            $ {workshop*numberOfWorkshops}.00</p>
                            <button id="addWorkshop" >+</button>
                        </div>
                    </div>
                </div>
            </StyledWorkshop>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        appState: state.appReducer.appState
    }
}

const mapDispatchToProps = {
    addWorkshop
}
export default connect(mapStateToProps, mapDispatchToProps)(Step3);

