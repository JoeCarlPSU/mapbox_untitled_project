let map;
$(document).ready(() => {
    map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.XYZ({
              attributions: ['Powered by Esri',
                             'Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'],
              attributionsCollapsible: true,
              url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
              maxZoom: 23
            })
          })
        ],
        view: new ol.View({
          projection: 'EPSG:4326',
          // center: ol.proj.fromLonLat([37.41, 8.82]),
          center: [-97.62702097624204, 37.809133887525924],
          zoom: 15
        })
      });
})