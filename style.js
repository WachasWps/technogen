console.log("JS file is working!");

const boxes = document.querySelectorAll('.home-about, .home-prizes, .home-themes, .home-timeline'); // Corrected variable name

window.addEventListener('scroll', checkBoxes);

checkBoxes(); // Call the function initially

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    
    boxes.forEach(box => { // Fixed syntax error here
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
