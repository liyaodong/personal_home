// source repo
// https://github.com/jieverson/DJi/

if(window.AudioContext === undefined) {
    window.location.href = document.querySelector('#go').href;
}

let canvas = document.querySelector('canvas')
let width = canvas.width = canvas.scrollWidth
let height = canvas.height = canvas.scrollHeight
let ctx = canvas.getContext('2d')

let context = new AudioContext()
let analyser = context.createAnalyser()

let biquadFilter = context.createBiquadFilter()
biquadFilter.type = "lowpass"
biquadFilter.frequency.value = 20000
biquadFilter.Q.value = 20

let audio = new Audio()
audio.loop = true
audio.crossOrigin = 'anonymous'

loadBackgroundMusic();

let source = context.createMediaElementSource(audio)
source.connect(biquadFilter)
biquadFilter.connect(analyser)
analyser.connect(context.destination)

init();

function loadBackgroundMusic() {
    audio.src = 'http://oax4654gb.bkt.clouddn.com/2018/5/27/Hans Zimmer - S.T.A.Y.mp3';
}

function loop(){
    window.requestAnimationFrame(loop)
    let freq = new Uint8Array(analyser.frequencyBinCount)
    analyser.getByteFrequencyData(freq)

    let data = new Uint8Array(analyser.frequencyBinCount)
    analyser.getByteTimeDomainData(data)

    ctx.clearRect(0, 0, width, height)

    freq.forEach((f, i) => draw(f,i,height,'#E6193C'))

    ctx.lineWidth = 1
    ctx.strokeStyle = '#cdaaec'
    ctx.beginPath()

    ctx.moveTo(0, data[0] / 128 * height / 2)
    data.forEach((d, x) => {
        let v = d / 128
        let y = v * height / 2
        ctx.lineTo(x, y)
    })
    ctx.lineTo(width, height / 2)
    ctx.stroke()
}

function draw(freq, index, height, color){
    ctx.fillStyle = color
    ctx.fillRect(index, (height - freq) / 2, 1, freq)
}

function changeFrequency(range){
    biquadFilter.frequency.value = range.value
}

function init() {
    document.querySelector('#go').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.welcome').classList.add('hide');
        document.querySelector('.ready-go').classList.add('in');
        audio.play();
        document.querySelector('#video-bg').play();
        loop();
        document.querySelector('.ready-go').requestFullscreen();
    });
}
