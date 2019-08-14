var i = 1;
async function btn() {
  try {
    console.log('Requesting Bluetooth Device...');
    const device = await navigator.bluetooth.requestDevice({
        filters: [{services: ['battery_service']}]});

        console.log('Connecting to GATT Server...');
    const server = await device.gatt.connect();

    console.log('Getting Battery Service...');
    const service = await server.getPrimaryService('battery_service');

    console.log('Getting Battery Level Characteristic...');
    const characteristic = await service.getCharacteristic('battery_level');
    
    
    console.log('Reading Battery Level...');
    
    while (i==1) {
      bat();
      Thread.sleep(3000);
    };
      
    async function bat(){
      const value = await characteristic.readValue();

      console.log('> Battery Level is ' + value.getUint8(0) + '%'); 
    };

    
    
    
    
  } catch (error) {
    console.log('Argh! ' + error);
  }
}