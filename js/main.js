/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/
$(document).ready(function() {

  var map = L.map('map-container').setView([46.852, -121.760], 13);

  var osmUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
  var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

  var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
      subdomains: ['otile1','otile2','otile3','otile4']
  });

  var drawLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
  });

  var mapLayers = {
      //"Satellite": satLayer,
      //"Map View": drawLayer,
      "Open Street Maps": osm
  }

  L.control.layers(mapLayers).addTo(map);
  satLayer.addTo(map);

  var marker = L.marker([46.852, -121.760]).addTo(map);
  marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");

  var cougarRock = L.marker([46.76715, -121.79572]).addTo(map);
  marker.bindPopup("<b>This is Cougar Rock campground!</b><br>Elevation is 3,180");

  var henryJack = L.marker([46.78413, -121.74070]).addTo(map);
  marker.bindPopup("<b>This is Henry M. Jackson Memorial Center!</b><br>Currently open during construction");

  var mowichLake = L.marker([46.93265, -121.86293]).addTo(map);
  marker.bindPopup("<b>This is Mowich Lake campground!</b><br>Elevation is 4,950, it is open late June - October");

  var ohana = L.marker([46.73445, 121.56934]).addTo(map);
  marker.bindPopup("<b>This is Ohanapecosh campground!</b><br>Elevation is 1,914, generally open from Memorial day to Columbus day");

});

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)
