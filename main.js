function connect() {
  const device = navigator.bluetooth.requestDevice({
    filters:
    [
      { name: 'BLE'}
    ]
  });
  console.log(device.name);
}