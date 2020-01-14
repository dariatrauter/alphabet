import React, { Component } from 'react'
import KartenInhalt from './KartenInhalt';
import KartenMenu from './KartenMenu';

class ActiveKarte extends Component {

    colors = ['#e6194B', '#FF9966', 'skyblue', '#3cb44b', '#fabebe', '#4363d8', '#bfef45', '#aaffc3', '#911eb4', '#8A2BE2', '#E52B50', '#FBEC5D'];
    myColorBrush;
    myPatternColors;
    myPatternDots;

    constructor(props) {
        super(props)

        this.state = {
            isCreativeModusOn: false,
            brushSize: 30,
            refresh: false,
            save: false,
            brush: '#000'
        }

        this.changeModus = this.changeModus.bind(this)
        this.manageButtonsActions = this.manageButtonsActions.bind(this)
        this.uebergebeImgAlsUrl = this.uebergebeImgAlsUrl.bind(this)
    }

    componentDidMount(){
        this.myColorBrush = this.getColorBrush();
        this.myPatternDots = this.getPatternDots();
        this.myPatternColors = this.getPatternColors();
        this.state.brush = this.myColorBrush;
    }

    changeModus(modus) {
        this.setState({
            isCreativeModusOn: modus
        })
    }
    
    getRandomColor() {

        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    getColorBrush() {
        return this.getRandomColor();
    }

    getPatternColors() {
        let patternColors = [];
        for (let i = 0; i < 7; i++) {
            patternColors.push(this.getRandomColor());
        }

        let patternCanvas = this.refs.canvas;
        let ctx = patternCanvas.getContext('2d');
        patternCanvas.width = 35; patternCanvas.height = 20;
        let j = 0;
        for (let i = 0; i < patternColors.length; i++) {
            ctx.fillStyle = patternColors[i];
            ctx.fillRect(j, 0, j + 5, 20);
            j += 5;
        }
        return ctx.createPattern(patternCanvas, 'repeat');
    }
    
    getPatternDots() {
        let patternCanvas = this.refs.canvas;
        let dotWidth = 20;
        let dotDistance = 5;
        let patternCtx = patternCanvas.getContext('2d');
        patternCanvas.width = patternCanvas.height = dotWidth + dotDistance;
        patternCtx.fillStyle = this.getRandomColor();
        patternCtx.beginPath();
        patternCtx.arc(dotWidth / 2, dotWidth / 2, dotWidth / 2, 0, Math.PI * 2, false);
        patternCtx.closePath();
        patternCtx.fill();
        return patternCtx.createPattern(patternCanvas, 'repeat');
    }
   
    manageButtonsActions(message) {
        switch (message) {
            case 'plus':
                if ((this.state.brushSize + 4) <= 50)
                    this.setState({
                        refresh: false,
                        brushSize: this.state.brushSize + 4
                    })
                break;
            case 'minus':
                if ((this.state.brushSize - 4) >= 10)
                    this.setState({
                        refresh: false,
                        brushSize: this.state.brushSize - 4
                    })
                break;
            case 'refresh':
                this.setState({
                    refresh: true,
                    save: false
                })
                break;
            case 'save':
                this.setState({
                    save: true,
                    refresh: false
                })
                break;
            case 'color':
                this.setState({
                    refresh: false,
                    save: false,
                    brush: this.myColorBrush
                })
                break;
            case 'patternDots':
                this.setState({
                    refresh: false,
                    save: false,
                    brush: this.myPatternDots
                })
                break;
            case 'patternColors':
                this.setState({
                        refresh: false,
                        save: false,
                        brush: this.myPatternColors
                })
                break;
            case 'colorDown':
                this.myColorBrush = this.getColorBrush();     
                this.setState({
                    refresh: false,
                    save: false,
                    brush: this.myColorBrush
                })
                break;
            case 'patternDotsDown':
                this.myPatternDots = this.getPatternDots();           
                this.setState({
                    refresh: false,
                    save: false,
                    brush: this.myPatternDots
                    })
                break;
            case 'patternColorsDown':
                this.myPatternColors = this.getPatternColors();                  
                this.setState({
                    refresh: false,
                    save: false,
                    brush: this.myPatternColors
                    })
                break;
            default:
                break;
        }
    }
    
    uebergebeImgAlsUrl(img) {
        this.props.saveImgHaendler(img);
    }

    render() {
        return (
            <div className="activeCard">
                <KartenInhalt
                    brush = { this.state.brush }
                    save = { this.state.save }
                    saveImgHaendler = { this.uebergebeImgAlsUrl }
                    refresh = { this.state.refresh }
                    brushSize = { this.state.brushSize }
                    isCreativeModusOn = { this.state.isCreativeModusOn }
                    outline = { this.props.outline }
                    bild  ={ this.props.bild } />
                <KartenMenu
                    myColorBrush = { this.myColorBrush }
                    myPatternDots = { this.myPatternDots }
                    myPatternColors = { this.myPatternColors }
                    buttonActionHaendler = { this.manageButtonsActions }
                    modusHaendler = { this.changeModus }
                    isCreativeModusOn = { this.state.isCreativeModusOn } />
                <canvas ref="canvas" className="hidden"></canvas>
            </div>
        )
    }
}

export default ActiveKarte
