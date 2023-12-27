let droped = false;

function dropdownMenu() {
    if (droped == false) {
        document.getElementById('menu').style.display = 'flex'
        droped = true
    } 
    else if (droped == true) {
        document.getElementById('menu').style.display = 'none'
        droped = false
    }
}

document.querySelectorAll('.photogram-video').forEach(pic => {
    pic.onclick = () => {
        document.querySelector('#lightbox-backdrop').style.display = 'block';
        document.querySelector('#yt-video-container iframe').src = pic.getAttribute('id');
    }
})

document.querySelector('#lightbox-backdrop span').onclick = () => {
    document.querySelector('#lightbox-backdrop').style.display = 'none'
    document.querySelector('#yt-video-container iframe').src = '';
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.onclick = () =>{
        document.getElementById('menu').style.display = 'none'
        droped = false
    }
})

