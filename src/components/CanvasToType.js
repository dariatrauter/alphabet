import React, { Component } from 'react'
import {connect} from 'react-redux'

class CanvasToType extends Component {

    ctx = null;
    currentXPos = 10;
    currentYPos = 10;
    cursor = true;
    isReadyType = false;
    intervalID;
    cursorHeight = 80;
    intervals = [];
    textActive = false;
    width = 0;
    height = 0;
    space = 50;

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
       // this.initCanvas = this.initCanvas.bind(this)
       this.onMouseDown = this.onMouseDown.bind(this)
       this.onKeyDown = this.onKeyDown.bind(this)
       this.typeImageOnCanvas = this.typeImageOnCanvas.bind(this)
      // this.deleteLastLetter = this.deleteLastLetter.bind(this)
    }
    
    componentDidMount(){
       this.initCanvas();
    }

    initCanvas(){
        const canvas = this.refs.canvas
        canvas.width = this.refs.footer.clientWidth;
        canvas.height = this.refs.footer.clientHeight;
        this.ctx = canvas.getContext("2d")
        this.ctx.font = "80px Arial";
        this.ctx.fillStyle = "#4d668e";
        this.ctx.globalAlpha = 0.4;
        let txt = "Text hier";
        this.ctx.fillText(txt, 10, 80); //!
        this.ctx.globalAlpha = 1;
        this.width = this.refs.canvas.width;
        this.height = this.refs.canvas.height;
    }

    drawInputLine(cursor){
        if(cursor){
            this.ctx.fillStyle = "#000";
            this.ctx.fillRect(this.currentXPos, this.currentYPos, 2, this.cursorHeight);
        } else {
            this.ctx.clearRect(this.currentXPos, this.currentYPos, 2, this.cursorHeight); 
        }
    }

    getBlinkingCursor(){
        clearInterval(this.intervalID);
        this.isReadyType = true;
        this.intervalID = setInterval(() => {
            if(this.cursor){
                this.drawInputLine(this.cursor);
                this.cursor = false;
            }else {
                this.drawInputLine(this.cursor);	
                this.cursor = true;
            }
        }, 500);
    }

    deleteLastLetter(){
        let myInterval = this.intervals.pop();
        if(myInterval){
            clearInterval(this.intervalID);
            this.ctx.clearRect(this.currentXPos-myInterval, this.currentYPos, this.currentXPos + myInterval, this.cursorHeight);
            this.currentXPos -= myInterval;
            this.getBlinkingCursor();
        }
    }

    typeImageOnCanvas(myDataUrl){
        let img = new Image();
        if(myDataUrl) {
            img.onload = () => {
            let scale = this.cursorHeight / img.height;
            let myWidth = Math.floor(img.width*scale);
            let myHeight = Math.floor(img.height*scale);
            if((this.currentXPos + myWidth) <= this.width){
                
                
                clearInterval(this.intervalID);
                this.drawInputLine(false);
                this.ctx.drawImage(img, this.currentXPos, this.currentYPos, myWidth, myHeight);
                this.currentXPos += myWidth;
                this.intervals.push(myWidth);
                this.getBlinkingCursor();
            }
            }
            img.src = myDataUrl;
        } else {
            clearInterval(this.intervalID);
                this.drawInputLine(false);
                this.ctx.fillStyle = '#fff';
                this.ctx.fillRect(this.currentXPos, this.currentYPos, this.space, this.height);
                this.ctx.fillStyle ='#000'
                this.currentXPos += this.space;
                this.intervals.push(this.space);
                this.getBlinkingCursor();
        } 
    }

    onMouseDown() {
		if(!this.textActive){
			this.ctx.clearRect(0,0,this.refs.canvas.width, this.refs.canvas.height);
			this.getBlinkingCursor();
		}
	this.textActive = true;
    }
    
    onKeyDown(e) {
        e.preventDefault();
        
            if(this.isReadyType){
                let myLetter = e.key;
                if(myLetter === "Backspace"){
                    this.deleteLastLetter();
                }else if(myLetter === " ") {
                    this.typeImageOnCanvas(false);
                }else{
                    for(let i = 0; i <this.props.letters.length; i++){
                        if(this.props.letters[i].name === myLetter.toUpperCase()){
                            if(this.props.letters[i].dataUrl!== ""){
                                this.typeImageOnCanvas(this.props.letters[i].dataUrl);
                            }
                        }
                    }
                }
            }
        
    }

    render() {
        return (
            <div
                ref="footer"
                className="myFooter"
                onKeyDown={this.onKeyDown}
                tabIndex="0"
            >
                <canvas
                onMouseDown={this.onMouseDown}
                ref="canvas">
                </canvas>
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

export default connect(mapStateToProps) (CanvasToType)
