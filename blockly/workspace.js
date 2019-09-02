Blockly.Blocks['liga_led'] = {
	init: function() {
	  this.appendValueInput("7")
		  .setCheck(null)
		  .appendField("Ligar Led");
	  this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

Blockly.JavaScript['liga_led'] = function(block) {
	console.log("cheguei");
	var value_7 = Blockly.JavaScript.valueToCode(block, '7', Blockly.JavaScript.ORDER_ATOMIC);	
	var valor = 7;
	//var code = "";
	//console.log(code);	
	console.log(valor);
	return valor;
  };


if (!navigator.bluetooth) {
	alert('Sorry, your browser doesn\'t support Bluetooth API');
}

const connectButton = document.getElementById('connectButton');
const toggleLigthCharacteristic;

connectButton.addEventListener('pointerup', connectButtonPointerUpHandler);

function connectButtonPointerUpHandler() {
  navigator.bluetooth.requestDevice({
    filters:
      [
        { name: 'BLE' },
        { namePrefix: 'B'},
        { services: [SEND_SERVICE] },
      ]
  })
    .then(device => {
      myDevice = device;

      return device.gatt.connect();
    })
    .then(server => server.getPrimaryService(SEND_SERVICE))
    .then(service => service.getCharacteristic(SEND_SERVICE_CHARACTERISTIC))
    .then(characteristic => {
      toggleLigthCharacteristic = characteristic;

      toggleButtonsVisible();
      toggleItemsEventListeners('addEventListener');
    })
    .catch(error => {
      console.error(error);
    });
}