let droped = false;

function dropdownMenu() {
    if (droped == false) {
        document.getElementById('menu').style.display = 'flex'
        document.getElementById('hamburger').style.opacity = '60%'
        droped = true
    } 
    else if (droped == true) {
        document.getElementById('menu').style.display = 'none'
        document.getElementById('hamburger').style.opacity = '100%'
        droped = false
    }
}