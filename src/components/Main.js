import React, { Component } from 'react'
import { HashRouter, BrowserRouter, Route, NavLink } from 'react-router-dom';
import Impressum from './Impressum';
import Animation from './Animation';
import Datenschutz from './Datenschutz';
import BilderMenu from './BilderMenu';
import AlphabetMenu from './AlphabetMenu';
import {connect} from 'react-redux'
import CanvasToType from './CanvasToType';

class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             currentIndex: 0,
             imgUrls: [],
             helpRender: false
        }
        this.setNeuCurrentIndex = this.setNeuCurrentIndex.bind(this)
        this.uebergebeImgAlsUrl = this.uebergebeImgAlsUrl.bind(this)
    }
    
    componentDidMount() {
        console.log('MainDidMount');
        
        let letterArr = []
        let ind = localStorage.getItem('currentLetterIndex');
        if(ind) {
            this.setState({
                currentIndex : ind,
            })
        } else {
            localStorage.setItem('currentLetterIndex', 0)
        }

        if(localStorage.getItem('imgUrls')) {
            letterArr = JSON.parse(localStorage.getItem('imgUrls'));
            this.props.saveLettersFromLocal(letterArr);
            this.setState({
                helpRender: !this.state.helpRender
            })
        } else {
            localStorage.setItem('imgUrls', letterArr);
        }
    }

    setNeuCurrentIndex(ind) {
        localStorage.setItem('currentLetterIndex', ind)
        this.setState({
            currentIndex : ind
        })
    }

    uebergebeImgAlsUrl(img, ind) {
        let newImgArr = [];
        let imgArr = (localStorage.getItem('imgUrls')) ? JSON.parse(localStorage.getItem('imgUrls')) : [];
        imgArr[ind] = img;
        newImgArr[ind] = img;
        localStorage.setItem('imgUrls',JSON.stringify(imgArr));
        this.props.changeLetter({dataUrl: img, index: ind })
        this.setState({
            helpRender: !this.state.helpRender
        })
    }

    render() {
        return (
            <HashRouter basename='/'>>
                <div className="wrap">
                    <BilderMenu helpRender={this.state.helpRender}></BilderMenu>
                    <main>
                        <nav>
                            <NavLink to="/" exact>PLAY</NavLink> |  
                            <NavLink to="/datenschutz" exact> DATENSCHUTZ</NavLink> |  
                            <NavLink to="/impressum" exact> IMPRESSUM</NavLink>
                        </nav>
                        <Route path="/" exact component={(props) => <Animation {...props} saveImgHaendler={this.uebergebeImgAlsUrl} changeIndexHaendler={this.setNeuCurrentIndex} index={this.state.currentIndex} />}/>
                        <Route path="/datenschutz" exact component={Datenschutz} />
                        <Route path="/impressum" exact component={Impressum} />
                        
                    </main>
                    <AlphabetMenu changeIndexHaendler={this.setNeuCurrentIndex}></AlphabetMenu>
                </div>
                    <CanvasToType></CanvasToType>
            </HashRouter>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...props,
        letters: state.alphabet
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLetter: newLetter => dispatch({type:'SAVELETTER', letter:newLetter}),
        saveLettersFromLocal: savedLetters => dispatch({type:'SAVEFROMLOCAL', letters:savedLetters}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
