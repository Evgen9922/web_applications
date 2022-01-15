(()=>{
document.addEventListener('DOMContentLoaded', ()=>{

  ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [55.760307, 37.614414],   // 55.769535, 37.639985 - маркер
            zoom: 13
        });
      
// -------------------------
        var myGeoObject = new ymaps.GeoObject({
          geometry: {
              type: "Point", // тип геометрии - точка
              coordinates: [55.769535, 37.639985], // координаты точки
          }},
          {
            iconLayout: 'default#image',
            iconImageHref: '../img/mark_map.svg',
            iconImageSize: [12, 12],
            iconImageOffset: [0, 0]
            
          }
      );

      myMap.geoObjects.add(myGeoObject); 

// ----------------------

      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('fullscreenControl');

    }


})
})();