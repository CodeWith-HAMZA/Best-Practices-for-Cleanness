let  btns = Array.from(document.getElementsByTagName('button'));
    let  contentConts = Array.from(document.getElementsByClassName('contentConts'));
    
    btns.forEach((btn, index) => {
        btn.addEventListener('click', ()=>{
            btns.forEach(element => {
                element.style.background = 'white';
            });
            contentConts.forEach(element => {
                element.style.display = 'none';
            });
            
            contentConts[index].style.display = "block";
            btns[index].style.background = " red";
        })
    });
    btns[0].click();