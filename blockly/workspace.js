//--------------------------------------------------------------

const Connect = document.querySelector('#connectButton');


const toggleRedLightButton = document.getElementById('toggleRedLight');


let toggleLigthCharacteristic;

function connect() {
	if (!navigator.bluetooth) {
		console.log('Web Bluetooth API is not available.');
		return;
	}
	console.log('Procurando Dispositivo..')	;

	const MY_BLUETOOTH_NAME = 'BLE';
	const SEND_SERVICE = 0xFFE0;
	const SEND_SERVICE_CHARACTERISTIC = 0xFFE1;

	navigator.bluetooth.requestDevice({
		'filters': 
		[
			{ 'namePrefix': ['='] },
			{ 'namePrefix': ['B'] }
		],
		'Services': 
		[
			SEND_SERVICE
		]
	})
	.then(device => {
		console.log('Got device: ' + device.name);
		return device.gatt.connect();
	})
	.then(server => server.getPrimaryService(SEND_SERVICE))
	.then(service => service.getCharacteristic(SEND_SERVICE_CHARACTERISTIC))
	.then(characteristic => {
	  toggleLigthCharacteristic = characteristic;

	//var testando = Uint8Array.of(7);
	//return toggleLigthCharacteristic.writeValue(testando);		
	

	//toggleButtonsVisible();
	  toggleItemsEventListeners('addEventListener');
	})
		.catch(error => {
		  console.error(error);
	});
	
}

function test(valor) {

	console.log("Valor recebido");					
	const code = Uint8Array.of(valor);
	//const dado = code;
	console.log("Code: " + code);
	
	toggleLigthCharacteristic.readValue()
		.then(currentCode => {
			  const convertedCode = 1;

			  return toggleLigthCharacteristic.writeValue(Uint8Array.of(convertedCode === code ? 0 : code));
	});

	//toggleLigthCharacteristic.writeValue(code);								
	return null;
}	  

Connect.onclick = function() {
	connect();
};

function toggleItemsEventListeners(action) {
	toggleRedLightButton[action]('click', test);	
  }

//--------------------------------------------------------------

Blockly.Blocks['liga_led'] = {
init: function() {
  this.appendValueInput("7")
	  .setCheck(null)
	  .appendField("Ligar Led");
  this.setPreviousStatement(false, null);
  this.setNextStatement(true, 'Action');
  this.setColour(120);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.JavaScript['liga_led'] = function(block) {
	console.log("Printando Liga led....");
	var value_7 = Blockly.JavaScript.statementToCode(block, 'liga_led');	
	var valor_liga = 7;
	//var code = "";
	//console.log(code);	
	console.log(valor_liga);
	//test(valor);
	//const code = Uint8Array.of(valor_liga);
	//const code = test(valor_liga);
	const code = valor_liga;
	return test(code);

};

Blockly.Blocks['avancar'] = {
	init: function() {
	  this.appendValueInput("frente")
		  .setCheck(null)
		  .appendField("Avançar");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

Blockly.JavaScript['avancar'] = function(block) {
	console.log("Printando Avançar...");
	var value_frente = Blockly.JavaScript.valueToCode(block, 'frente', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	
	var valor_avanca = 1;
	//test(valor);
	console.log(valor_avanca);
	const code = valor_avanca;	
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };


