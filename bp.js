//FUNCIONA

console.log('inicio');

$('.get-device').on('click',function(){
  console.log('Requesting Bluetooth Device...');
  navigator.bluetooth.requestDevice( {filters: [{services: ['battery_service']}]})
  .then(device => {
    console.log(device);
        $('.device-name').val(device.name)
    console.log('Connecting to GATT Server...');
        return device.gatt.connect();
  })
  .then(server => {
    console.log('Getting Battery Service...');
    return server.getPrimaryService('battery_service');
  })
  .then(service => {
    console.log('Getting Battery Level Characteristic...');
    return service.getCharacteristic('battery_level');
  })
  .then(characteristic => {
    console.log('Reading Battery Level...');
    return characteristic.readValue();
  })
  .then(value => {
    let batteryLevel = value.getUint8(0);
    console.log('> Battery Level is ' + batteryLevel + '%');              
    $('.device-level').val(batteryLevel)
    
  })
  .catch(error => {
    log('Argh! ' + error);
  });

});


console.log('Reading Battery Level...',bat());
             
async function bat(){
  setTimeout(async function  () {
    console.log('OK');
    const value = await characteristic.readValue();
    var batteryLevel = value.getUint8(0);
    console.log('> Battery Level is ' + batteryLevel + '%');       
    $('.device-level').val(batteryLevel)
    bat();
  },5000);            
};