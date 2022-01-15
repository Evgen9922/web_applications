(()=>{

const SERVICES_TABS_ELEM = document.querySelectorAll('.services__tab');
const SERVICES_SECTION_ELEM = document.querySelectorAll('.services-section');
const MOVE_LINE = document.querySelector('.js-move-line');
let service_active;

SERVICES_TABS_ELEM.forEach((item)=>{

  item.addEventListener('click', (ev)=>{
  service_active  = ev.target;

  if( !service_active.classList.contains('tab-active') ){

    // - перемещение линии----
    let line_position = service_active.getAttribute('data-tab');

    if(line_position === 'tab2'){
      MOVE_LINE.classList.add('js-services__tab-move-right')
    } else {
      MOVE_LINE.classList.remove('js-services__tab-move-right');
    }

      // -- смена активных кнопок
    SERVICES_TABS_ELEM.forEach((btn)=>{
    btn.classList.toggle('tab-active');
    })
  }

    // -- смена вкладок 

  SERVICES_SECTION_ELEM.forEach((sect)=>{
    sect.classList.remove('services__tab-active');
    sect.style.display = 'none';

    if(sect.dataset.tab == service_active.dataset.tab){
      sect.style.display = 'grid';

      setTimeout(()=>{
        sect.classList.add('services__tab-active');
      })

    }
  }) 
  })
})

})();


