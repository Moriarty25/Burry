const modalBtns = document.querySelectorAll('.button-default, .headerButton');
const modals = document.querySelectorAll('.popup');
const body = document.body;

function openModal(elem)  {
    elem.classList.add('active');
    body.classList.add('_locked')
}

function closeModal(e){
    if (e.target.classList.contains('modal-close') || e.target.closest('.popup-close__body') || e.target.classList.contains('popup_body')){
        e.target.closest('.popup').classList.remove('active');
        body.classList.remove('_locked')
    }


} 

modalBtns.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        let data = e.target.dataset.modalOpen;

        modals.forEach (modal=>{
            if(modal.dataset.modal == data){
                openModal(modal)
            }

        })
    })
})

modals.forEach (modal=>{
    modal.addEventListener('click', e => closeModal(e))
})

window.addEventListener('keydown', e=> {
    modals.forEach(modal =>{
        if (e.key === "Escape" && modal.classList.contains('active')) {
            modal.classList.remove('active');
            body.classList.remove('_locked');
        }
    })
}
)

