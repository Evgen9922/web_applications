(()=>{

  const PAGE_BTN_ELEM = document.querySelectorAll('.js-page-btn');
  const PAGE_ELEM = document.querySelectorAll('.our-projects__part');
  let active_btn;

  PAGE_BTN_ELEM.forEach( (btn)=>{

    btn.addEventListener('click', (ev)=>{
    active_btn = ev.target;

      // назначаем стили для активной копки
      PAGE_BTN_ELEM.forEach((btn_click)=>{
        btn_click.classList.remove('js-page-btn-active');
      })
        active_btn.classList.add('js-page-btn-active');

      // определяем активную страницу
    PAGE_ELEM.forEach((page)=>{
      page.classList.remove('page-active');
      page.style.display = 'none';

    if(page.dataset.page == active_btn.dataset.page) {
      page.style.display = "grid";

      setTimeout(()=>{
        page.classList.add('page-active');
      })
    }
    })
        //-----------
    })
  })

})();