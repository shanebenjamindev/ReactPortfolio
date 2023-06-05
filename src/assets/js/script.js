const navLinks = document.querySelectorAll('.nav__Link');
const sections = document.querySelectorAll('section');

/** FUNCTION */
// when scroll, hightlight the navlink
function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 300 < sections[index].offsetTop) { }

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

// Mouse trail, the light follow the mouse
function moveMouseTrail(event) {
    var x = event.clientX;
    var y = event.clientY;
    var cursor = document.querySelector(".cursor-trail");
    var cursorWidth = cursor.offsetWidth;
    var cursorHeight = cursor.offsetHeight;
    cursor.style.left = x - cursorWidth / 2 + "px";
    cursor.style.top = y - cursorHeight / 2 + "px";
}


// Callback
window.addEventListener('scroll', changeLinkState);
document.addEventListener("mousemove", moveMouseTrail);
