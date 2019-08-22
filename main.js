function connect() {
  const device = navigator.bluetooth.requestDevice({
    filters:
    [
      { namePrefix: 'BLE'}
    ]
  });
  console.log(device.name);
  $('.device-name').val(device.name)
}