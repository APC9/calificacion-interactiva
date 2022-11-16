const spans = document.querySelectorAll('.select');
const parrafo = document.querySelector('#parrafo');
const card1= document.querySelector('.card');
const card2= document.querySelector('.card2');
const btn= document.querySelector('#btn-modal');

const submit = ()=>{
    btn.addEventListener('click',()=>{
        card1.style.display='none';
        card2.style.display='flex';
    })
}

const addClass = ()=>{
    spans.forEach(element=>{
        element.addEventListener('click', ()=>{
            removeClass();
            element.classList.add('active');
            valor = element.textContent;
        })
    })
};

const getNumber = ()=>{
    spans.forEach(element=>{
        element.addEventListener('click', ()=>{
        let number = element.textContent;
        
        parrafo.innerHTML = number;
        })
    })
};

const removeClass = () => {
    spans.forEach((items) => {
        items.classList.remove("active");
    });
}



submit();
addClass();
getNumber();