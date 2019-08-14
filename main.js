console.log('inicio');

$('.get-device').on('click',function(){
    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
    .then(device => {
        console.log(device);
        $('.device-name').val(device.name);
        $('.device-level').val(device.name);        
    })
  .then(device => device.connectGATT())
  .then(server => {
    return server.getPrimaryService('battery_service');
  })
  .then(service => {
    return service.getCharacteristic('battery_level');
  })
  .then(characteristic => {
    // Read battery level...
    return characteristic.readValue();
  });
        
});
