console.log('inicio');

$('.get-device').on('click',function(){
    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
    .then(device => {
        console.log(device);
        $('.device-name').val(device.name);
    })
    .then(server => {
      // Getting Battery Service...
      return server.getPrimaryService('battery_service');
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
      $('.device-level').val(device.value)

    })
    

    .catch(error => { console.log(error); });

    function handleBatteryLevelChanged(event) {
      let batteryLevel = event.target.value.getUint8(0);
      console.log('Battery percentage is ' + batteryLevel);
    }
});
