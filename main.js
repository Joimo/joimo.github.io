let myDevice;

function connect() {
  const device = navigator.bluetooth.requestDevice({
    filters:
    [
      { namePrefix: 'BLE'},
    ]   
  })
  alert(device.namePrefix)

  .then(device => { 
    myDevice = device;
    return device.gatt.connect();
  })
  
  .then(server => getPrimaryService('0000ffe0-0000-1000-8000-00805f9b34fb'))
  alert('yes!')
  .catch(error => { console.log(error); });  

}

