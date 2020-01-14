import React, { Component } from 'react'
import Canvas from './Canvas';

class KartenInhalt extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.uebergebeImgAlsUrl = this.uebergebeImgAlsUrl.bind(this)
    }
    
    tryImg(){
            let img;
            try {
                img = require(`../${this.props.bild}`);
            } catch (e) {
                if (e.code !== 'MODULE_NOT_FOUND') {
                    throw e;
                }
                img = require(`../img/no-image.png`);
            }
            return img
    }
    uebergebeImgAlsUrl(img){
        this.props.saveImgHaendler(img);
    }
    render() {
       //console.log('KartenInhalt', this.props.reduceBrush, this.props.enlargeBrush, this.props.brushSize);
        
        return (

            <div className="imgWrap">
                {
                    this.props.isCreativeModusOn ?
                        <Canvas
                            brush = { this.props.brush }
                            save = { this.props.save } 
                            saveImgHaendler = { this.uebergebeImgAlsUrl}
                            refresh = { this.props.refresh }
                            brushSize = { this.props.brushSize }
                            reduceBrush = { this.props.reduceBrush }
                            enlargeBrush = { this.props.enlargeBrush }
                            outline = { this.props.outline }>
                        </Canvas> :
                        <img src={this.tryImg()}></img>
                }
            </div>
        )
    }
}

export default KartenInhalt
