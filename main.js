console.log('inicio');

$('.get-device').on('click',function(){
    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
    .then(device => {
        console.log(device);
        $('.device-name').val(device.name);
        
    })
    .then(device => {
      log('Connecting to GATT Server...');
      return device.gatt.connect();
    })
    .then(server => {
      log('Getting Battery Service...');
      return server.getPrimaryService('battery_service');
    })
    .then(service => {
      log('Getting Battery Level Characteristic...');
      return service.getCharacteristic('battery_level');
    })
    .then(characteristic => {
      log('Reading Battery Level...');
      return characteristic.readValue();
    })
    .then(value => {
      let batteryLevel = value.getUint8(0);
      log('> Battery Level is ' + batteryLevel + '%');
    })
    .catch(error => {
      log('Argh! ' + error);
    });
});
