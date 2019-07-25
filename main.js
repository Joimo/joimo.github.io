console.log('init');
$('.get-device').on('click',function(){
    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
    .then(device => {
        console.log(device);
        $('.device-name').val(device.name)
    })
    .catch(error => { console.log(error); });
});
