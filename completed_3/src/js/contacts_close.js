(()=>{

  const CLOSE_CONTACTS_BTN = document.querySelector('.js-close-btn');
  const CONTACTS_ADRESS_BOX = document.querySelector('.contacts__adress-box');

  CLOSE_CONTACTS_BTN.addEventListener('click', ()=>{

    CONTACTS_ADRESS_BOX.classList.add('js-adress-box');
    
    setTimeout(()=>{
      CONTACTS_ADRESS_BOX.classList.add('js-adress-box-close')
    }, 1000);

  })



})();