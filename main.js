console.log('inicio');
$('.get-device').on('click',function(){
    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
    .then(device => {
        console.log(device);
        $('.device-name').val(device.name)
    })
    .then(service => {
      // Getting Battery Level Characteristic...
      return service.getCharacteristic('battery_level');
    })
    .then(characteristic => {
      // Reading Battery Level...
      return characteristic.readValue();
    })
    .then(value => {
      console.log('Battery percentage is ' + value.getUint8(0));
    })
    
    .catch(error => { console.log(error); });
});
