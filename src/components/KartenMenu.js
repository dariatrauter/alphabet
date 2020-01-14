import React, { Component } from 'react'

class KartenMenu extends Component {
    downTimer = undefined;


    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.onMouseUp = this.onMouseUp.bind(this)
        this.onMouseLeave = this.onMouseUp.bind(this)
    }

    componentDidMount(){
        //this.myColorBrushImg =  this.props.myColorBrushImg;
    }

    componentDidUpdate(){
        console.log('KartenMenuDidUpdate',);

        let canvas = this.refs.canvasColor;
        canvas.width = 40;
        canvas.height = 40;
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = this.props.myColorBrush;
        ctx.fillRect(0, 0, 40, 40);

        canvas = this.refs.canvasPatternDots;
        canvas.width = 40;
        canvas.height = 40;
        ctx = canvas.getContext("2d");
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, 40, 40);
        ctx.fillStyle = this.props.myPatternDots;
        ctx.fillRect(0, 0, 40, 40);

        canvas = this.refs.canvasPatternColors;
        canvas.width = 40;
        canvas.height = 40;
        ctx = canvas.getContext("2d");
        ctx.fillStyle = this.props.myPatternColors;
        ctx.fillRect(0, 0, 40, 40);

    }

    onMouseDown(messageClick,messageDown){
        this.props.buttonActionHaendler(messageClick);
        clearTimeout(this.downTimer);
		this.downTimer = setTimeout(() => {
			this.props.buttonActionHaendler(messageDown);
		}, 1000);  
    }
    
    onMouseUp(){
        clearTimeout(this.downTimer);
    }

    onMouseLeave(){
        clearTimeout(this.downTimer);
    }

    render() {
        //<img src = { this.myColorBrushImg }></img>
        return (
            <div className="buttonPanel">
                {
                    this.props.isCreativeModusOn ? 
                    <>
                    <div></div>
                    <div></div>
                    <button onClick={()=> this.props.buttonActionHaendler('minus')}>-</button>
                    <button onClick={()=> this.props.buttonActionHaendler('plus')}>+</button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <button
                        onMouseDown = { ()=> this.onMouseDown('color','colorDown') }
                        onMouseUp = { this.onMouseUp }
                        onMouseLeave = { this.onMouseLeave }>
                            <canvas ref="canvasColor"></canvas>   
                    </button>
                    <button
                        onMouseDown = { ()=> this.onMouseDown('patternDots','patternDotsDown') }
                        onMouseUp = { this.onMouseUp }
                        onMouseLeave = { this.onMouseLeave }>
                            <canvas ref="canvasPatternDots"></canvas>  
                    </button>
                    <button
                        onMouseDown = { ()=> this.onMouseDown('patternColors','patternColorsDown') }
                        onMouseUp = { this.onMouseUp }
                        onMouseLeave = { this.onMouseLeave }>
                            <canvas ref="canvasPatternColors"></canvas>  
                    </button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <button onClick={()=> this.props.buttonActionHaendler('refresh')}>&#x21bb;</button>
                    <button onClick={()=> this.props.buttonActionHaendler('save')}>&#x2714;</button>
                    <div></div>
                    <div></div></> :
                    <button onClick={()=>this.props.modusHaendler(true)}>&#9998;</button>
                }
            </div>
        )
    }
}

export default KartenMenu
