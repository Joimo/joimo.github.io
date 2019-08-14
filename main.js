console.log('inicio');

$('.get-device').on('click',function(){
  console.log('Requesting Bluetooth Device...');
  await  navigator.bluetooth.requestDevice( {filters: [{services: ['battery_service']}]})
  .then(device => {
    console.log(device);
        $('.device-name').val(device.name)
    console.log('Connecting to GATT Server...');
        return await device.gatt.connect();
  })
  .then(server => {
    console.log('Getting Battery Service...');
    return await server.getPrimaryService('battery_service');
  })
  .then(service => {
    console.log('Getting Battery Level Characteristic...');
    return await service.getCharacteristic('battery_level');
  })
  .then(characteristic => {
    console.log('Reading Battery Level...');
    return await characteristic.readValue();
  })
  setInterval(async() => {
    
      let batteryLevel = await value.getUint8(0);
      console.log('> Battery Level is ' + batteryLevel + '%');              
      $('.device-level').val(batteryLevel)
      
    
  })
    .catch(error => {
    log('Argh! ' + error);
  });

});
