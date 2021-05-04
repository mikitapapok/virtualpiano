const notesButton = document.getElementById('notes')
const container=document.getElementById('container');
const lettersButton = document.getElementById('letters')
const whiteButtons = document.getElementsByClassName('white-notes__component')
const blackButtons=document.getElementsByClassName('black-notes__component')
const pianoKey = document.getElementsByClassName('piano-block__component')
const pianoBlock = document.querySelector('.piano-block')
const fullscreen=document.getElementById('fullscreen')
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}


lettersButton.addEventListener('click', () => {
    notesButton.classList.remove('button-block__component-active');
    lettersButton.classList.add('button-block__component-active');
    
    [...whiteButtons].forEach(element => {
        if (element.classList.contains('piano-white-letters' )) {
            return;
        }
        element.classList.remove('piano-white-notes');
        
        element.classList.add('piano-white-letters');
       
    });

    [...blackButtons].forEach(element=>{
        if (element.classList.contains('piano-black-letters' )) {
            return;
        }
        element.classList.remove('piano-black-notes');        
        element.classList.add('piano-black-letters');
    })

    

    
    

    console.log(whiteButtons)
})

notesButton.addEventListener('click', () => {
    lettersButton.classList.remove('button-block__component-active');
    notesButton.classList.add('button-block__component-active');
    [...whiteButtons].forEach(element => {
        if (element.classList.contains('piano-white-notes')) {
            return;
        }
    
        element.classList.remove('piano-white-letters');
        element.classList.add('piano-white-notes');
       
    });
    [...blackButtons].forEach(element=>{
        if (element.classList.contains('piano-black-notes' )) {
            return;
        }
        
        element.classList.remove('piano-black-letters');        
        element.classList.add('piano-black-notes');
    })

})

let playStart = (event) => {
    let target = event.target;
    if(target.classList.contains('button-active')){
        return
    }
    
    if (!target.hasAttribute('data-play') ) {
        return
    }   
    target.classList.add('button-active')
    playAudio(`./assets/audio/${target.dataset.letters}.mp3`)

    

}

let playStop=(event)=>{
    [...pianoKey].forEach(element=>{
        if(!element.classList.contains('button-active')){
            return
        }
        element.classList.remove('button-active')
        element.removeEventListener('mousover',playStart) })
}

const mousePlay = (event) => {
    [...pianoKey].forEach((element) => {
        
        element.addEventListener('mouseover', playStart)
        element.addEventListener('mouseout', playStop)

    })
}


const mouseDoesnt = (event) => {
    [...pianoKey].forEach((element) => {
        element.removeEventListener('mouseover', playStart)
        element.removeEventListener('mouseout', playStop)

    })
}

const classOnKey=(key)=>{
        const playKey=document.querySelector(`[data-play=${key}]`);        
            if(playKey.classList.contains('button-active')){
                return
            }
        
        element.classList.add('button-active')
}
const playOnKey=(event)=>{
    switch(event.code){
        case 'KeyD':
            document.querySelector("[data-play='KeyD']").classList.add('button-active')            
            playAudio(`./assets/audio/D.mp3`);
            break;
        case 'KeyF':
            document.querySelector("[data-play='KeyF']").classList.add('button-active')  
            playAudio('./assets/audio/F.mp3');
            break;
        case 'KeyG':
            document.querySelector("[data-play='KeyG']").classList.add('button-active')  
            playAudio('./assets/audio/G.mp3');
            break;
        case 'KeyH':
            document.querySelector("[data-play='KeyH']").classList.add('button-active')  
            playAudio('./assets/audio/H.mp3');
            break;
        case 'KeyI':
            document.querySelector("[data-play='KeyI']").classList.add('button-active')  
            playAudio('./assets/audio/I.mp3');
            break;
        case 'KeyJ':
            document.querySelector("[data-play='KeyJ']").classList.add('button-active')  
            playAudio('./assets/audio/J.mp3');
            break;
        case 'KeyK':
            document.querySelector("[data-play='KeyK']").classList.add('button-active')  
            playAudio('./assets/audio/K.mp3');
            break;
        case 'KeyL':
            document.querySelector("[data-play='KeyL']").classList.add('button-active')  
            playAudio('./assets/audio/L.mp3');
            break;
        case 'KeyO':
            document.querySelector("[data-play='KeyO']").classList.add('button-active')  
            playAudio('./assets/audio/O.mp3');
            break;
        case 'KeyR':
            document.querySelector("[data-play='KeyR']").classList.add('button-active')  
            playAudio('./assets/audio/R.mp3');
            break;
        case 'KeyT':
            document.querySelector("[data-play='KeyT']").classList.add('button-active')  
            playAudio('./assets/audio/T.mp3');
            break;
        case 'KeyU':
            document.querySelector("[data-play='KeyU']").classList.add('button-active')  
            playAudio('./assets/audio/U.mp3');
            break;
    }  
   
}


const stopOnKey=(event)=>{
    switch(event.code){
        case 'KeyD':
            document.querySelector("[data-play='KeyD']").classList.remove('button-active')  
             break;
        case 'KeyF':
            document.querySelector("[data-play='KeyF']").classList.remove('button-active')  
             break;
        case 'KeyG':
            document.querySelector("[data-play='KeyG']").classList.remove('button-active')  
            break;
        case 'KeyH':
            document.querySelector("[data-play='KeyH']").classList.remove('button-active')  
             break;
        case 'KeyI':
            document.querySelector("[data-play='KeyI']").classList.remove('button-active')  
             break;
        case 'KeyJ':
            document.querySelector("[data-play='KeyJ']").classList.remove('button-active')  
             break;
        case 'KeyK':
            document.querySelector("[data-play='KeyK']").classList.remove('button-active')  
             break;
        case 'KeyL':
            document.querySelector("[data-play='KeyL']").classList.remove('button-active')  
            break;
        case 'KeyO':
            document.querySelector("[data-play='KeyO']").classList.remove('button-active')  
             break;
        case 'KeyR':
            document.querySelector("[data-play='KeyR']").classList.remove('button-active')  
            break;
        case 'KeyT':
            document.querySelector("[data-play='KeyT']").classList.remove('button-active')  
            break;
        case 'KeyU':
            document.querySelector("[data-play='KeyU']").classList.remove('button-active')  
             break;
    }  
   
}

document.addEventListener('keydown',playOnKey)
document.addEventListener('keyup',stopOnKey)

pianoBlock.addEventListener('mousedown', playStart,false)
pianoBlock.addEventListener('mouseup', playStop)
pianoBlock.addEventListener('mousedown', mousePlay,false)
pianoBlock.addEventListener('mouseup', mouseDoesnt)



fullscreen.addEventListener('click', () => {
    openCloseFullScreen();  
});

const openCloseFullScreen=()=>{
if (!document.fullscreenElement) {document.documentElement.requestFullscreen();
} else { document.exitFullscreen()}

}