ymaps.ready(init);

function init() {
  var map = new ymaps.Map('map', {
    center: [55.824634, 37.62260],
    zoom: 14,
    controls: [],
    behaviors: ['drag', 'dblClickZoom']
  });

  var customBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div class="placemark_layout_container">РЦ МСК</div>'
  );

  // иконкой идёт контент с названием центра
  var customIcon = new ymaps.Placemark(
    [55.824634, 37.62260], {}, {
      iconLayout: customBalloonContentLayout,
      }
    );
  map.geoObjects.add(customIcon);

  // новая иконка с дефотным маркером
  var myPlacemark = new ymaps.Placemark(
  [55.824634, 37.62260], {});

  // дефолтный маркер
  myPlacemark.options.set({
    preset: 'islands#blueMedicalCircleIcon'
  });
  map.geoObjects.add(myPlacemark);
}
