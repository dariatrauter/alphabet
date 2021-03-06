const initState = {
   alphabet: [
        {
            "id": 0,
            "name": "A",
            "image": "img/affe.jpg",
            "sound": "sound/affe.mp3",
            "outline": "A.png",
            "dataUrl": ""
        },
        {
            "id": 1,
            "name": "B",
            "image": "img/banane.jpg",
            "sound": "sound/banane.mp3",
            "outline": "B.png",
            "dataUrl": ""
        },
        {
            "id": 2,
            "name": "C",
            "image": "img/computer.jpg",
            "sound": "sound/computer.mp3",
            "outline": "C.png",
            "dataUrl": ""
        },
        {
            "id": 3,
            "name": "D",
            "image": "img/delfin.jpg",
            "sound": "sound/delfin.mp3",
            "outline": "D.png",
            "dataUrl": ""
        },
        {
            "id": 4,
            "name": "E",
            "image": "img/ente.jpg",
            "sound": "sound/ente.mp3",
            "outline": "E.png",
            "dataUrl": ""
        },
        {
            "id": 5,
            "name": "F",
            "image": "img/fisch.jpg",
            "sound": "sound/fisch.mp3",
            "outline": "F.png",
            "dataUrl": ""
        },
        {
            "id": 6,
            "name": "G",
            "image": "img/gabel.jpg",
            "sound": "sound/gabel.mp3",
            "outline": "G.png",
            "dataUrl": ""
        },
        {
            "id": 7,
            "name": "H",
            "image": "img/herz.jpg",
            "sound": "sound/herz.mp3",
            "outline": "H.png",
            "dataUrl": ""
        },
        {
            "id": 8,
            "name": "I",
            "image": "img/igel.jpg",
            "sound": "sound/igel.mp3",
            "outline": "I.png",
            "dataUrl": ""
        },
        {
            "id": 9,
            "name": "J",
            "image": "img/jojo.jpg",
            "sound": "sound/jojo.mp3",
            "outline": "J.png",
            "dataUrl": ""
        },
        {
            "id": 10,
            "name": "K",
            "image": "img/kamel.jpg",
            "sound": "sound/kamel.mp3",
            "outline": "K.png",
            "dataUrl": ""
        },
        {
            "id": 11,
            "name": "L",
            "image": "img/loewe.jpg",
            "sound": "sound/loewe.mp3",
            "outline": "L.png",
            "dataUrl": ""
        },
        {
            "id": 12,
            "name": "M",
            "image": "img/maus.jpg",
            "sound": "sound/maus.mp3",
            "outline": "M.png",
            "dataUrl": ""
        },
        {
            "id": 13,
            "name": "N",
            "image": "img/nadel.jpg",
            "sound": "sound/nadel.mp3",
            "outline": "N.png",
            "dataUrl": ""
        },
        {
            "id": 14,
            "name": "O",
            "image": "img/osterei.jpg",
            "sound": "sound/osterei.mp3",
            "outline": "O.png",
            "dataUrl": ""
        },
        {
            "id": 15,
            "name": "P",
            "image": "img/pinsel.jpg",
            "sound": "sound/pinsel.mp3",
            "outline": "P.png",
            "dataUrl": ""
        },
        {
            "id": 16,
            "name": "Q",
            "image": "img/qualle.jpg",
            "sound": "sound/qualle.mp3",
            "outline": "Q.png",
            "dataUrl": ""
        },
        {
            "id": 17,
            "name": "R",
            "image": "img/rakete.jpg",
            "sound": "sound/rakete.mp3",
            "outline": "R.png",
            "dataUrl": ""
        },
        {
            "id": 18,
            "name": "S",
            "image": "img/sonne.jpg",
            "sound": "sound/sonne.mp3",
            "outline": "S.png",
            "dataUrl": ""
        },
        {
            "id": 19,
            "name": "T",
            "image": "img/tasse.jpg",
            "sound": "sound/tasse.mp3",
            "outline": "T.png",
            "dataUrl": ""
        },
        {
            "id": 20,
            "name": "U",
            "image": "img/ufo.jpg",
            "sound": "sound/ufo.mp3",
            "outline": "U.png",
            "dataUrl": ""
        },
        {
            "id": 21,
            "name": "V",
            "image": "img/vogel.jpg",
            "sound": "sound/vogel.mp3",
            "outline": "V.png",
            "dataUrl": ""
        },
        {
            "id": 22,
            "name": "W",
            "image": "img/wolke.jpg",
            "sound": "sound/wolke.mp3",
            "outline": "W.png",
            "dataUrl": ""
        },
        {
            "id": 23,
            "name": "X",
            "image": "img/xylofon.jpg",
            "sound": "sound/xylofon.mp3",
            "outline": "X.png",
            "dataUrl": ""
        },
        {
            "id": 24,
            "name": "Y",
            "image": "img/ypsilon.jpg",
            "sound": "sound/ypsilon.mp3",
            "outline": "Y.png",
            "dataUrl": ""
        },
        {
            "id": 25,
            "name": "Z",
            "image": "img/zebra.jpg",
            "sound": "sound/zebra.mp3",
            "outline": "Z.png",
            "dataUrl": ""
        },
        {
            "id": 26,
            "name": "Ä",
            "image": "img/haende.jpg",
            "sound": "sound/haende.mp3",
            "outline": "Ä.png",
            "dataUrl": ""
        },
        {
            "id": 27,
            "name": "Ö",
            "image": "img/zwoelf.jpg",
            "sound": "sound/zwoelf.mp3",
            "outline": "Ö.png",
            "dataUrl": ""
        },
        {
            "id": 28,
            "name": "Ü",
            "image": "img/schluessel.jpg",
            "sound": "sound/schluessel.mp3",
            "outline": "Ü.png",
            "dataUrl": ""
        },
        {
            "id": 29,
            "name": "ẞ",
            "image": "img/fuss.jpg",
            "sound": "sound/fuss.mp3",
            "outline": "ẞ.png",
            "dataUrl": ""
        }
    ]
}

const rootReducer = (state=initState, action) => {
    
    
    if(action.type === 'SAVEFROMLOCAL') {
        action.letters.forEach((el, ind) => {
            if(el) {
                initState.alphabet[ind].dataUrl = el; 
            }
        });
    } else if (action.type === 'SAVELETTER') {
        initState.alphabet[action.letter.index].dataUrl = action.letter.dataUrl;
    }
    return state;
}

export default rootReducer