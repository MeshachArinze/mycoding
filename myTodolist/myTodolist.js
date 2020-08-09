const header = document.getElementById('myHeader');
Array.from(header)

    console.log(header)
    const myheader = document.getElementsByTagName('h1');
    console.log(myheader)

    //create a close button and append it to each list item

    let myNodeList= document.getElementsByTagName('li');let span
    for(let i = 0; i < myNodeList.length; i++){
        let myspan = document.createElement('span');
        let text =document.createTextNode('\u00D7');
        myspan.className = 'close';
        myspan.appendChild(text);
        myNodeList[i].appendChild(myspan);
        console.log(myNodeList[i].appendChild(myspan))
    }
   

    //click on a close button to hide the button
    let close = document.getElementsByClassName('close');
    for(let i = 0;i < close.length; i++) {
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = 'none';
            alert('display')
        }
        console.log(close)

    }

    //Add a "checked" symbol whwen clicking on a list item
    let list = document.querySelector('ul');
    list.addEventListener('click', function(ev){
        if (ev.target.tgName === 'li') {
            ev.target.classList.toggle('checked');
        }
    }, false)

    //create a new list item when clicking on the "Add" button

    function newElement() {
        let lis = document.createElement('li');
        let inputValue = document.getElementById('mytext').value;
        let t = document.createTextNode('inputValue');
        lis.appendChild(t);
        if (inputValue === "") {
            alert('you must write something')
        } else {
            document.getElementById('myUl').appendChild(li)
        }
        document.getElementById('mytext').value = "";
        let myspan = document.createTextNode('\u00D7');
        myspan.className = "close";
        myspan.appendChild(text);
        lis.appendChild(span);

        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let div = this.parentElement;
                div.style.display = 'none'
            }
        }
    }