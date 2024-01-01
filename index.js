//to avoid 'display: none' to the menu that happends if you open the menu and close it and then resize the windows
function setMenuToFlex() {
  if (window.innerWidth > 767) {
    document.getElementById('menu').style.display = 'flex'
  }
  else {
    document.getElementById('menu').style.display = 'none'
  }
}

window.onresize = setMenuToFlex

//drop down menu by making it 'display: flex' or 'display: none'
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
  
  document.querySelectorAll('.menu-item').forEach(item => {
      if (window.innerWidth < 768) {
          item.onclick = () =>{
              document.getElementById('menu').style.display = 'none'
              droped = false
          } 
      }
  })

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