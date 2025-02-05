var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_lotgabung_1 = new ol.format.GeoJSON();
var features_lotgabung_1 = format_lotgabung_1.readFeatures(json_lotgabung_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotgabung_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotgabung_1.addFeatures(features_lotgabung_1);
var lyr_lotgabung_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotgabung_1, 
                style: style_lotgabung_1,
                popuplayertitle: 'lot gabung',
                interactive: true,
                title: '<img src="styles/legend/lotgabung_1.png" /> lot gabung'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_lotgabung_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_lotgabung_1];
lyr_lotgabung_1.set('fieldAliases', {'FID': 'FID', 'AREA': 'AREA', 'NO_LOT': 'NO_LOT', 'TSP — hakm': 'TSP — hakm', 'TSP — ha_1': 'TSP — ha_1', 'TSP — pemi': 'TSP — pemi', 'N0_LOT': 'N0_LOT', 'layer': 'layer', 'path': 'path', });
lyr_lotgabung_1.set('fieldImages', {'FID': '', 'AREA': '', 'NO_LOT': '', 'TSP — hakm': '', 'TSP — ha_1': '', 'TSP — pemi': '', 'N0_LOT': '', 'layer': '', 'path': '', });
lyr_lotgabung_1.set('fieldLabels', {'FID': 'no label', 'AREA': 'header label - visible with data', 'NO_LOT': 'header label - visible with data', 'TSP — hakm': 'no label', 'TSP — ha_1': 'no label', 'TSP — pemi': 'no label', 'N0_LOT': 'header label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_lotgabung_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});