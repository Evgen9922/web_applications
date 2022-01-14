(()=>{
const MENU_ITEMS_ELEM = document.querySelectorAll('.header__menu-item');
const TABL_INFO_ELEM = document.querySelector('.js-tabl_info');
const CLOSE_BTN_ELEM = document.querySelector('.js-close');

const INFO_TAB_ME = document.querySelector('.tabl_info__me');
const INFO_TAB_WORKS = document.querySelector('.tabl_info__works');
const INFO_TAB_NOW =  document.querySelector('.tabl_info__now');
const INFO_TAB_LINK = document.querySelector('.tabl_info__link');
const MY_INFO = document.querySelectorAll('.tab__info-item');


MENU_ITEMS_ELEM.forEach((menuItem)=>{
  menuItem.addEventListener ('click', (ev)=>{
    TABL_INFO_ELEM.classList.remove('js-tabl_info');

    ev.target.dataset.order === 'me'? getInfo('me') :
    ev.target.dataset.order === 'works'? getInfo('works') :
    ev.target.dataset.order === 'now'? getInfo('now') : getInfo('link')

  }) 
});


// ------------------
CLOSE_BTN_ELEM.addEventListener('click', ()=>{
  TABL_INFO_ELEM.classList.add('js-tabl_info');

  MY_INFO.forEach((item)=>{
    item.classList.add('js-tabl_info__hidden');
  }) 
  console.log(TABL_INFO_ELEM);
})


function getInfo(info) {

  info === 'me'? INFO_TAB_ME.classList.remove('js-tabl_info__hidden'):
  info === 'works'? INFO_TAB_WORKS.classList.remove('js-tabl_info__hidden'):
  info === 'now'? INFO_TAB_NOW.classList.remove('js-tabl_info__hidden'):
  info === 'link'? INFO_TAB_LINK.classList.remove('js-tabl_info__hidden'): null;
}

})()