let myCont = document.querySelector('.container');
console.log(myCont)
const myact = document.getElementsByClassName('accordion');
for(let i = 0; i < myact.length;  i++) {
    myact[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
    console.log(myact[i])
}