const player = document.querySelector('.player'),
      playBtn = document.querySelector('.play'),
      audio = document.querySelector('.audio'),
      progressContent = document.querySelector('.content_progress'),
      progress = document.querySelector('.progress'),
      cover = document.querySelector('.cover_img'),
      imgSrc = document.querySelector('.img_src'),
      title = document.querySelector('.song')

const song  = ['Некуда бежать']

let songIndex = 0

function playSong() {
    player.classList.add('play')
    cover.classList.add('active')
    imgSrc.src = './images/pause.png'
    audio.play()
}

function pauseSong() {
    player.classList.remove('play')
    cover.classList.remove('active')
    imgSrc.src = './images/play.png'
    audio.pause()
}
playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if (isPlaying){
        pauseSong()
    } else {
        playSong()
    }
})

function updateProgress(e) {
   const {duration, currentTime} = e.srcElement
   const progressPercent = (currentTime / duration) * 100
   progress.style.width = `${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)

function setProgress(e) {
const width = this.clientWidth
const clikckX = e.offsetX
const duration = audio.duration

audio.currentTime = (clikckX / width) * duration

}
progressContent.addEventListener('click', setProgress)