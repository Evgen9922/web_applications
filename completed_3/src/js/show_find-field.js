(()=>{


  const HEADER_FILD_FIND = document.querySelector('.js-header-finder-input768');
  const HEADER_FINDER_ELEM = document.querySelector('.js-header-search');
  const CLOSE_HEAD_FINDER_BTN = document.querySelector('.js-box-close-btn');



  HEADER_FINDER_ELEM.addEventListener('click', ()=>{
    
    HEADER_FILD_FIND.classList.remove('js-finder-hide');
    HEADER_FINDER_ELEM.classList.toggle('js-finder-hide');

    setTimeout(()=>{
      HEADER_FILD_FIND.classList.toggle('js-finder-height');
    })

    setTimeout (()=>{
      CLOSE_HEAD_FINDER_BTN.classList.toggle('js-finder-hide');
    }, 500)

  })

  CLOSE_HEAD_FINDER_BTN.addEventListener('click', ()=>{

    CLOSE_HEAD_FINDER_BTN.classList.toggle('js-finder-hide');
    HEADER_FILD_FIND.classList.toggle('js-finder-height');
    HEADER_FILD_FIND.classList.toggle('js-finder-hide');
    HEADER_FINDER_ELEM.classList.toggle('js-finder-hide');


  })










})();