(()=>{

  const HEADER_MENU_ELEM = document.querySelector('.js-menu');
  const HEADER_MENU_LIST_ELEM = document.querySelector('.js-header-menu');
  const HEADER_BURGER_CLOSE_ELEM = document.querySelector('.js-burger-btn-close');

  function hide_menu (){
    HEADER_MENU_LIST_ELEM.classList.toggle('js-hide')
  };

  function height_menu(){
    HEADER_MENU_LIST_ELEM.classList.toggle('js-height')
  }

  

  HEADER_MENU_ELEM.addEventListener('click',()=>{

  if( HEADER_MENU_LIST_ELEM.classList.contains('js-hide') ){

      hide_menu();
      setTimeout(()=>{
        height_menu()
      });

    } else {
      height_menu();
      setTimeout(()=>{
        hide_menu ();
      }, 500); 

    }
 
  })

  HEADER_BURGER_CLOSE_ELEM.addEventListener('click', ()=>{
    height_menu();
    setTimeout(()=>{
      hide_menu ();
    }, 500); 
  })  

})();