var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Уклон тротуаров для велопрогулок',
                interactive: true,
    title: 'Уклон тротуаров для велопрогулок<br />\
    <img src="styles/legend/_1_0.png" /> отсутствует<br />\
    <img src="styles/legend/_1_1.png" /> подъём<br />\
    <img src="styles/legend/_1_2.png" /> спуск<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Веломаршрут',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Веломаршрут'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
cluster__3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__3
});
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:cluster__3, 
                style: style__3,
                popuplayertitle: 'Достопримечательности на маршруте',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Достопримечательности на маршруте'
            });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr__2,lyr__3];
lyr__1.set('fieldAliases', {'id': 'id', 'uklon': 'Тип уклона', 'dlina_m': 'Расстояние, м', });
lyr__2.set('fieldAliases', {'id': 'id', 'dlina_km': 'Протяженность, км', });
lyr__3.set('fieldAliases', {'id': 'Номер', 'name': 'Достопримечательность', });
lyr__1.set('fieldImages', {'id': 'TextEdit', 'uklon': 'TextEdit', 'dlina_m': 'Range', });
lyr__2.set('fieldImages', {'id': 'TextEdit', 'dlina_km': 'TextEdit', });
lyr__3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr__1.set('fieldLabels', {'id': 'no label', 'uklon': 'header label - always visible', 'dlina_m': 'header label - always visible', });
lyr__2.set('fieldLabels', {'id': 'no label', 'dlina_km': 'header label - always visible', });
lyr__3.set('fieldLabels', {'id': 'header label - always visible', 'name': 'header label - always visible', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});