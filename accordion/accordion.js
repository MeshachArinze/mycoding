let myCont = document.querySelector('.container');
console.log(myCont) 

let acc = document.getElementsByClassName('accordion');
let i;
for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.sttyle.display = "none";
        } else {
            panel.style.display = 'block';
        }
        console.log(panel)
    });
}
