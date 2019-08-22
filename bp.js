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
  }
} 

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
            
  