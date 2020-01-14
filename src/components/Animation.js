import React, { Component } from 'react'
import Karte from './Karte';
import {connect} from 'react-redux'

class Animation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             currentIndex: 0,
             classNameCenter : 'oben ',
             classNameLeft : 'rotateCenterLeft',
             classNameRight : 'rotateCenterRight',
             isCenterActive: true
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.indexUebergabe = this.indexUebergabe.bind(this)
        this.uebergebeImgAlsUrl = this.uebergebeImgAlsUrl.bind(this)
    }

    componentDidMount(){
        
        
        this.setState({
            currentIndex: Number(this.props.index)
        })
        
        
    }
    setNewClasNames() {

    }

    indexUebergabe(pos) {

        let ind;

        if(pos==='left'){
            ind = this.state.currentIndex-1;
            this.state.classNameLeft = 'rotateLeftCenterAnim';
            this.state.classNameCenter += 'rotateCenterRightAnim';
            this.state.classNameRight = 'rotateCenterRight'
            this.setState({
            classNameCenter : this.state.classNameCenter,
            classNameLeft : this.state.classNameLeft,
            classNameRight : this.state.classNameRight
        }, () => {
            setTimeout(() => {
            this.props.changeIndexHaendler(ind);
            /*
            this.setState({
                currentIndex: ind,
                classNameCenter : 'oben ',
                classNameLeft : 'rotateCenterLeft',
                classNameRight : 'rotateCenterRight'
        })
        */
        }, 800);
        })
        } else if(pos==='right'){
            ind = this.state.currentIndex+1;
            this.state.classNameRight = 'rotateRightCenterAnim';
            this.state.classNameCenter += 'rotateCenterLeftAnim';
            this.state.classNameLeft = 'rotateCenterLeft';
            this.setState({
                classNameCenter : this.state.classNameCenter,
                classNameLeft : this.state.classNameLeft,
                classNameRight : this.state.classNameRight
            }, () => {
                setTimeout(() => {
                this.props.changeIndexHaendler(ind);
                /*
                this.setState({
                    currentIndex: ind,
                    classNameCenter : 'oben ',
                    classNameLeft : 'rotateCenterLeft',
                    classNameRight : 'rotateCenterRight'
            })
            */
            }, 800);
            })
        } else {
            this.setState({
                isCenterActive: false
            })
        }

    }
    uebergebeImgAlsUrl(img, ind) {
        this.props.saveImgHaendler(img, ind)
       // this.props.changeLetter({dataUrl: img, index: ind })
    }

    render() {
        let zeichenCenterOben = this.props.letters[this.state.currentIndex];
        let zeichenCenterUnten = null;
        let zeichenRightOben = this.props.letters[this.state.currentIndex+1] ? this.props.letters[this.state.currentIndex+1] : null;
        let zeichenRightUnten = this.props.letters[this.state.currentIndex+2] ? this.props.letters[this.state.currentIndex+2] : null;
        let zeichenLeftOben = this.props.letters[this.state.currentIndex-1] ? this.props.letters[this.state.currentIndex-1] : null;
        let zeichenLeftUnten = this.props.letters[this.state.currentIndex-2] ? this.props.letters[this.state.currentIndex-2] : null;
        
        return (
            <div>
                <Karte
                    classNames = "rotateCenterLeft"
                    indexChangeHaendler = {this.indexUebergabe}
                    position="left"
                    type="unten"
                    letter={zeichenLeftUnten}
                    isActive={false}>
                </Karte>
                <Karte
                    classNames = {this.state.classNameLeft}
                    indexChangeHaendler = {this.indexUebergabe}
                    position="left"
                    type="oben"
                    letter={zeichenLeftOben}
                    isActive={zeichenLeftOben ? true : false}>
                </Karte>
                <Karte
                    classNames = ""
                    indexChangeHaendler = {this.indexUebergabe}
                    position="center"
                    type="unten"
                    letter={zeichenCenterUnten}
                    isActive={false}>
                </Karte>
                <Karte
                    currentIndex = { this.state.currentIndex }
                    saveImgHaendler = { this.uebergebeImgAlsUrl }
                    classNames ={this.state.classNameCenter}
                    indexChangeHaendler = {this.indexUebergabe}
                    position ="center"
                    type = "oben"
                    letter = {zeichenCenterOben}
                    isActive = {this.state.isCenterActive}
>
                </Karte>
                <Karte
                    classNames = "rotateCenterRight"
                    indexChangeHaendler = {this.indexUebergabe}
                    position="right"
                    type="unten"
                    letter={zeichenRightUnten}
                    isActive={false}>
                </Karte>
                <Karte
                    classNames = {this.state.classNameRight}
                    indexChangeHaendler = {this.indexUebergabe}
                    position="right"
                    type="oben"
                    letter={zeichenRightOben}
                    isActive={zeichenRightOben ? true : false}>
                </Karte>
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
/*const mapDispatchToProps = (dispatch) => {
    return {
        changeLetter: newLetter => dispatch({type:'SAVELETTER', letter:newLetter}),
    }
}*/
export default connect(mapStateToProps)(Animation)
