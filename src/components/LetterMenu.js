import React, { Component } from 'react'

export class LetterMenu extends Component {
    

    constructor(props) {
        super(props)
    
        this.state = {
            classNames :"bottomMenuDiv",
            colorDiv : {
                backgroundColor: '#ccc',
    }
        }
        this.mouseOutFunction = this.mouseOutFunction.bind(this)
        this.mouseOverFunction = this.mouseOverFunction.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        let color = this.randomColor();
        this.setState({
            colorDiv: {
                backgroundColor: color,
            }
        });
    }

    randomColor(opacity = 1){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        return "rgba("+r+","+g+","+b+","+opacity+")";
    }

    mouseOverFunction() {
        let color = this.randomColor();
        this.setState({
            classNames : this.state.classNames + " gross",
            colorDiv: {
                backgroundColor: color,
            }
        });
        
    }

    mouseOutFunction() {
    this.setState({classNames : "bottomMenuDiv"})
    }

    render() {
        return (
            <div
                style={this.state.colorDiv}
                onClick={()=> {this.props.clickHaendler(this.props.index)}}
                onMouseOver={this.mouseOverFunction}
                onMouseOut={this.mouseOutFunction}
                className={this.state.classNames}>

                {this.props.letter}
            </div>
        )
    }
}

export default LetterMenu
