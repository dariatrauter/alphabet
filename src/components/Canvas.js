import React, { Component } from 'react'

class Canvas extends Component {

    ctx = null;
    mousePressed = false;
    lastX = undefined;
    lastY = undefined;
    brushSize = 30;
    brush='#000';

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseDown = this.onMouseDown.bind(this)
        this.onMouseMove = this.onMouseMove.bind(this)
        this.onMouseUp = this.onMouseUp.bind(this)
    }
    

   componentDidUpdate() {
        //console.log('CanvasDidUpdate', this.props);

        if(this.props.refresh)
            this.refresh(); 
        if(this.props.save) {
            let img = this.saveImgAlsUrl();
            this.props.saveImgHaendler(img);
        }
        this.brushSize =  this.props.brushSize;
        this.brush = this.props.brush;     
   }

    componentDidMount() {
        //console.log('CanvasDidMount');
        const canvas = this.refs.canvas
        this.ctx = canvas.getContext("2d")
        const img = this.refs.image

        img.onload = () => {
            this.drawInitialImg(img, canvas.width, canvas.height)
          }
          this.brush = this.props.brush;
      }

    drawInitialImg(img, w, h){
        this.ctx.globalAlpha = 0.2;
        let scale = Math.min(w / img.width, h / img.height);
        let x = (w / 2) - (img.width / 2) * scale;
        let y = (h / 2) - (img.height / 2) * scale;
        this.ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        this.ctx.globalAlpha = 1;
    }

    tryImg(){
        
        let img;
        try {
            img = require(`../img/outline/${this.props.outline}`);
        } catch (e) {
            if (e.code !== 'MODULE_NOT_FOUND') {
                throw e;
            }
            img = null;
        }
        return img
    }

    saveImgAlsUrl(){
        let imgUrl = this.refs.canvas.toDataURL();
        return imgUrl;
    }

    refresh() {
        this.ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
        this.drawInitialImg(this.refs.image, this.refs.canvas.width, this.refs.canvas.height);
      
    }

    drawCtx(x, y, isDown, isStart){
        
        if (isDown) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.brush;
            this.ctx.lineWidth = this.brushSize;
            this.ctx.lineJoin = this.ctx.lineCap = "round";
            if (isStart){
                this.ctx.moveTo(x, y);
            }else {
                this.ctx.moveTo(this.lastX, this.lastY);
            }
            this.ctx.lineTo(x, y);
            this.ctx.closePath();
            this.ctx.stroke();
        }
        this.lastX = x; this.lastY = y;
    }

    onMouseMove(e) {
        if(this.mousePressed){
            this.drawCtx(e.nativeEvent.offsetX, e.nativeEvent.offsetY, true, false);
        }
    }

    onMouseDown(e) {
        if(e.button === 0){
             
			this.mousePressed = true;
            this.drawCtx(e.nativeEvent.offsetX, e.nativeEvent.offsetY, true, true); 
		}
    }

    onMouseUp(e) {
        this.mousePressed = false;
    }

    onMouseLeave(e) {
        this.mousePressed = false;
    }

    render() {
        //console.log('Canvas',this.props.reduceBrush, this.props.enlargeBrush, this.props.brushSize);
        return (
            <>
            <canvas ref="canvas"
                onMouseDown = { this.onMouseDown }
                onMouseMove = { this.onMouseMove }
                onMouseUp = { this.onMouseUp }
                onMouseLeave = { this.onMouseLeave }
                width="500"
                height={0.9*500}>
            </canvas>
            <img alt="outline" ref="image" src={this.tryImg()} className="hidden" />
            </>
        )
    }
}

export default Canvas
