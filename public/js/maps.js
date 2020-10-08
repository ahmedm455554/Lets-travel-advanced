let platform = new H.service.Platform({
    'apikey': 'YoJPG0TsGfM2pxsDARvJd5-B-EUqtYxB590gHDBaVZM'
  });



function landmarkGeocode() {
    let title=document.querySelector('h1').textContent;
    let geocoder = platform.getSearchService(),
        landmarkGeocodingParameters = {
          q: title,
          at: '0,0',
          limit: 1
        };
  
    geocoder.discover(
      landmarkGeocodingParameters,
      showMap,
      () => console.log(e)
    );
  }

function showMap(result){

    let location = result.items[0].position;
    let defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    let map = new H.Map(
        document.querySelector('.map'),
        defaultLayers.vector.normal.map,
        {
        zoom: 15,
        center: { lat: location.lat, lng: location.lng }
        });

    let parisMarker = new H.map.Marker({lat:location.lat, lng:location.lng});
    map.addObject(parisMarker);
    let ui = H.ui.UI.createDefault(map, defaultLayers);

}

landmarkGeocode();
