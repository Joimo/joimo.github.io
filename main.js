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
      .then(device => {
        myDevice = device;
        return device.gatt.connect();
      })         
      .then(server => server.getPrimaryService(SEND_SERVICE))
      .then(service => service.getCharacteristic(SEND_SERVICE_CHARACTERISTIC))  
      .then(characteristic => {
        LedCharacteristic = characteristic;   


        btnClick('addEventListener');
      })
      .catch(error => {
        console.log('Errooo! ' + error);     
      })
    });

    //$('.device-name').val(device.name)

    
    //console.log('Connecting to GATT Server...');    
    //const server = await device.gatt.connect();

    //console.log('Getting Primary Service...');
    //const service = await server.getPrimaryService('SEND_SERVICE');

    //console.log('Getting Characteristic...');
    //const characteristic = await service.getCharacteristic('SEND_SERVICE');          
    function acendeLED(event) {
      const code = Number(event.target.dataset.code);

      if(code = 1) {
        LedCharacteristic.writeValue(Uint8Array.of(code));
        return;
      }

      LedCharacteristic.readValue()
        .then(currentCode =>  {
          const converteCode = currentCode.getUint8(0);

          LedCharacteristic.writeValue(Uint8Array.of(converteCode === code ? 0 : code));
        });
    }
    function btnClick(action) {
      ligaLedBtn[action]('click',acendeLED);
    }
            
  } catch (error) {
    console.log('Errooo! - 2 ' + error)
  }
}