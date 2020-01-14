import React, { Component } from 'react'
import '../cardAnim.css';
import ActiveKarte from './ActiveKarte';

class Karte extends Component {

    isLetterActive = false;
    isActive = false;

    constructor(props) {
        super(props)
        
        this.state = {

            isLetterActive: false
       }

        this.clickFunktion = this.clickFunktion.bind(this)
        this.componentDidUpdate =  this.componentDidUpdate.bind(this)
        this.uebergebeImgAlsUrl = this.uebergebeImgAlsUrl.bind(this)
    }
    
    componentDidUpdate(){
        this.isLetterActive = false;
        this.isActive = this.props.isActive;
    }

    clickFunktion(event) {
        //console.log(this.isActive);
        
        if(this.isActive) {
            if(this.props.position==='center'){
                this.isLetterActive = true;
                this.setState({
                    isLetterActive: true
                })
                this.isActive = false;
                
            }
          
                
                this.props.indexChangeHaendler(this.props.position);
               
            
        }  
    }

    uebergebeImgAlsUrl(img){
        this.props.saveImgHaendler(img, this.props.currentIndex);
    }

    render() {
        let zeichen = this.props.letter ? this.props.letter.name : <span>&#128540;</span>
        let innerInhalt = this.isLetterActive ? <ActiveKarte saveImgHaendler={this.uebergebeImgAlsUrl} outline={this.props.letter.outline} bild={this.props.letter.image}></ActiveKarte> : zeichen
        
        return (
            
            <div onClick={this.clickFunktion}  className={`karte  ${this.props.classNames}`}>
             {innerInhalt} 

            </div>
        )
    }
}

export default Karte
