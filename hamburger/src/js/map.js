const init = () => {
  const myMap = new ymaps.Map("map", {
      controls: [],
      center: [59.938951, 30.315635],
      zoom: 12
  });

  const coords = [
    [59.980606, 30.347189],
    [59.945499, 30.267060],
    [59.937999, 30.377596]
  ];

  const baloons = [
    'Уютная кафешка на Тверской, 23',
    'Ждем вас в кафе на Нарвской, 42',
    'Вкусные ланчи и ароматный кофе на Ленинском, 22',
  ]

  const myCollection = new ymaps.GeoObjectCollection({}, {
    iconLayout: 'default#image',
    iconImageHref: 'icons/map-marker.svg',
    iconImageSize: [60, 60],
    iconImageOffset: [-3, -42],
    //draggable: false, 
  });
  
  for (var i = 0; i < coords.length; i++) {
      myCollection.add(new ymaps.Placemark(coords[i], {
        balloonContent: baloons[i]
      }));
  }
  
  myMap.geoObjects.add(myCollection);
  myMap.behaviors.disable('scrollZoom');
  
}
ymaps.ready(init);


