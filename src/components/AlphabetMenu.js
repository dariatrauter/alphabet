import React, { Component } from 'react'
import {connect} from 'react-redux'
import LetterMenu from './LetterMenu';

class AlphabetMenu extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.setLetter = this.setLetter.bind(this)
    }
    
    
    setLetter(ind) {
        this.props.changeIndexHaendler(ind);
        //console.log(ind);
        
    }
    render() {
        return (
            <div className="bottomMenu">
                {this.props.letters.map((el, ind) => {
                   return (
                       <LetterMenu
                            key= {el.id}
                            clickHaendler={this.setLetter}
                            letter={el.name}
                            index={ind}>
                        </LetterMenu>
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

export default connect(mapStateToProps) (AlphabetMenu)
