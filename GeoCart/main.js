window.onload = init;
var n = 1;
    
function getLatLong() {
    console.log("Uma");
    var firebaseConfig = {
        apiKey: "AIzaSyDfeey7mmVRtWEFN9zMiJAewpzjN3GMgD4",
        authDomain: "esp-location.firebaseapp.com",
        databaseURL: "https://esp-location.firebaseio.com",
        projectId: "esp-location",
        storageBucket: "esp-location.appspot.com",
        messagingSenderId: "898476482422",
        appId: "1:898476482422:web:dce4ddf22b399e2e99a457",
        measurementId: "G-REY735B90H"
};

    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();

    var pos = firebase.database().ref('/');  
        
    pos.on('value', getData);

    function getData(data){
        //console.log(data.val());
        var position = data.val();
        var keys = Object.keys(position);

        lat = position.latitude;
        lng = position.longitude;
        car = position.carrinhos;

        addMarcador(lat,lng);
                                    
        console.log("carrinhos:"+car);
        

        var pai = document.getElementById('totalCar');

        var li = document.createElement('p');

        var insereCar = document.createTextNode(car);

        li.appendChild(insereCar);

        pai.appendChild(li);
        

        //var insereLat = document.createTextNode('latitude:' + lat + ' ' + 'e' + ' ' );
        //var insereLng = document.createTextNode('longitude:' + lng);
    
        //li.appendChild(insereLat);
        //li.appendChild(insereLng);

        //pai.appendChild(li);
                 
    }

}

function addMarcador(latJ,lngJ){
    latJ = this.lat;
    lngJ = this.lng; 
    console.log(latJ,lngJ);

    var marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([lngJ,latJ])), 
        //geometry: new ol.geom.Point(ol.proj.fromLonLat([0,0]))        
    })

    var marker2 = new ol.Feature({
        //geometry1: new ol.geom.Point(ol.proj.fromLonLat([100,100])),  
    })

    marker.setStyle(new ol.style.Style({
        image: new ol.style.Icon(({
            crossOrigin: 'anonymous',
            src: 'img/icon-cart.png',
            scale: 0.2
            
        }))
    }));

    marker2.setStyle(new ol.style.Style({
        image: new ol.style.Icon(({
            crossOrigin: 'anonymous',
            src: 'img/icon-cart.png',
            scale: 0.2
            
        }))
    }));

    var vectorSource = new ol.source.Vector({
        features: [marker,marker2]
      });
      
    var markerVectorLayer = new ol.layer.Vector({
        source: vectorSource,
    });
    this.map.addLayer(markerVectorLayer);

    map.on('click', function(evt) {
        var feature = map.forEachFeatureAtPixel(evt.pixel,
          function(feature) {
            return feature;
          });
        if (feature === marker) {
            document.getElementById("info-car").style.display = 'inline';
        }
    });
    this.map.on('pointermove', evt => {
        if (!evt.dragging) {
          this.map.getTargetElement().style.cursor = this.map.hasFeatureAtPixel(this.map.getEventPixel(evt.originalEvent)) ? 'pointer' : '';
        }
    });
    
}

function init(){
    map = new ol.Map({
        view: new ol.View({
            //center: [-5749173.36803238,  -2704791.1599540077 ],    //UFPR Jandaia [ -51.649255,-23.596785]  \\long e lat ordem
            center: [-57, -27],
            zoom: 5,
            maxZoom: 20,
            minZoom: 4
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target:  'js-map'
    })   
         
    
    
    //var layer = new ol.layer.Vector({
        //source: new ol.source.Vector({
            //features: [
                //new ol.Feature({                    
                    //geometry: new ol.geom.Point(ol.proj.fromLonLat([-57, -27])),                    
                //})
            //]
        //})
    //});
    //map.addLayer(layer);
    
}
function localizar() {                
    //reset = document.getElementById("totalCar").reset();
    getLatLong();
}
/*---------------------------------------*/
function verifyLogin() {
    email = document.getElementById('email').value;
    psw = document.getElementById('password').value;
    
    console.log("email:"+email);
    console.log("senha:"+psw)


    if(this.email == '123' && this.psw == '123') {
        //alert ("Login successfully");
        window.location.href = './index.html'; // Redirecting to other page.
    } else {
        alert("Credenciais inválidas!");
    }

}


