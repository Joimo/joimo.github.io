console.log('inicio');
console.log('inicio2');
$('.get-device').on('click',function(){
    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
    .then(device => {
        console.log(device);
        $('.device-name').val(device.name)
    })
    .then(service => {
      console.log('Getting Battery Level Characteristic...');
      return service.getCharacteristic('battery_level');
    })
    .then(characteristic => {
      // Set up event listener for when characteristic value changes.
      characteristic.addEventListener('characteristicvaluechanged', handleBatteryLevelChanged());

      // Reading Battery Level...
      return characteristic.readValue();
    })
    .then(value => {
      console.log('Battery percentage is ' + value.getUint8(0));
    })

    .catch(error => { console.log(error); });

    function handleBatteryLevelChanged(event) {
      let batteryLevel = event.target.value.getUint8(0);
      console.log('Battery percentage is ' + batteryLevel);
    }
});
