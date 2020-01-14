import React, { Component } from 'react'
import {connect} from 'react-redux'

class BilderMenu extends Component {

    componentDidMount() {
        console.log('BilderMenuDidMount');
        
    }

    componentDidUpdate() {
    console.log('BilderMenuDidUpdate');
    
    }

    render() {

        return (
            <div className="topMenu">
               {this.props.letters.map((el, ind) => {
                   return (
                    <div key={el.id} className="topMenuDiv">
                        {
                            el.dataUrl ?
                            <img alt={`letter${el.name}`} src={el.dataUrl}></img> :
                            el.name
                        }
                        
                    </div> 
                )
                    
               })}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...props,
        letters: state.alphabet
    }
}
export default connect(mapStateToProps) (BilderMenu)
