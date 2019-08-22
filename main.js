
if (!navigator.bluetooth) {
  alert('Desculpe, seu navegador não suporta Bluetooth API');
}

const SEND_SERVICE = 0xFFE0;
const ligaLedBtn = document.getElementById('ligaLed');

let LedCharacteristic;

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

    console.log('Getting Primary Service...');
    const service = await server.getPrimaryService('SEND_SERVICE');

    console.log('Getting Characteristic...');
    const characteristic = await service.getCharacteristic('SEND_SERVICE');
            
  } catch (error) {
    console.log('Errooo! ' + error);
  }
}
