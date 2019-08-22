if (!navigator.bluetooth) {
  alert('Desculpe, seu navegador não suporta Bluetooth API');
}


const SEND_SERVICE = 0xFFE0;

async function btn() {
  try {
    console.log('Requesting Bluetooth Device...');
    const device = await navigator.bluetooth.requestDevice({
      filters: [
        { name: 'BLE' },
        { namePrefix: 'B'},
        { services: [SEND_SERVICE] },
      ]      
    });    

    $('.device-name').val(device.name)
 
    console.log('Connecting to GATT Server...');
    const server = await device.gatt.connect();

    console.log('Getting Battery Service...');
    const service = await server.getPrimaryService('battery_service');

    console.log('Getting Battery Level Characteristic...');
    const characteristic = await service.getCharacteristic('battery_level');
    
    
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
            
  } catch (error) {
    console.log('Errooo! ' + error);
  }
}