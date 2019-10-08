//'use strict';

function sleep(milliseconds) {        
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {      
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

Blockly.Blocks.draw_move = {
    init: function() {
        var a = [["move forward by", "forward"], ["move backward by", "backward"]];
        this.setColour(160),
        this.appendValueInput("VALUE").setCheck("Number").appendField(new Blockly.FieldDropdown(a), "DIR"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python.draw_move = function(block) {
    Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
    var b = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_NONE) || "0";
    return "turtle." + block.getFieldValue("DIR") + "(" + b + ")\n"
}
,
Blockly.Blocks.draw_turn = {
    init: function() {
        var a = [["turn right by", "right"], ["turn left by", "left"]];
        a[0][0] += " ↻",
        a[1][0] += " ↺",
        this.setColour(160),
        this.appendValueInput("VALUE").setCheck("Number").appendField(new Blockly.FieldDropdown(a), "DIR"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python.draw_turn = function(a) {
    Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "0";
    return "turtle." + a.getFieldValue("DIR") + "(" + b + ")\n"
}
,
Blockly.Blocks.draw_shape = {
    init: function() {
        var a = [["shape turtle", "turtle"], ["shape circle", "circle"], ["shape classic", "classic"], ["shape square", "square"], ["shape triangle", "triangle"]];
        this.setColour(160),
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(a), "SHAPE"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python.draw_shape = function(a) {
    sleep(1500);
    console.log("Cheguei1");    
    var code = 7;
    test(code);
    console.log("Retornei das cinzas");    
    return Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()",
    'turtle.shape("' + a.getFieldValue("SHAPE") + '")\n'
}
,
Blockly.Blocks.draw_pen = {
    init: function() {
        var a = [["pen up", "penup"], ["pen down", "pendown"]];
        this.setColour(160),
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(a), "PEN"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python.draw_pen = function(a) {
    return Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()",
    "turtle." + a.getFieldValue("PEN") + "()\n"
}
,
Blockly.Blocks.draw_color = {
    init: function() {
        this.setColour(160),
        this.appendValueInput("COLOR").appendField("set color to"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python.draw_color = function(a) {
    Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
    var b = Blockly.Python.valueToCode(a, "COLOR", Blockly.Python.ORDER_NONE) || "#FFFFFF";
    return "turtle.color(" + b + ")\n"
}
,
Blockly.Blocks.draw_write = {
    init: function() {
        this.setColour(160),
        this.appendValueInput("STRING").appendField("write");
        var a = new Blockly.FieldTextInput("14",Blockly.FieldTextInput.nonnegativeIntegerValidator);
        this.appendDummyInput().appendField("font size").appendField(a, "FONTSIZE"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python.draw_write = function(a) {
    Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
    var b = Blockly.Python.valueToCode(a, "STRING", Blockly.Python.ORDER_NONE) || ""
      , c = a.getFieldValue("FONTSIZE");
    return "turtle.write(" + b + ', None, None, "' + c + 'pt normal")\n'
}
,
Blockly.Blocks.draw_circle = {
    init: function() {
        this.setColour(160),
        this.appendValueInput("VALUE").appendField("circle"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python.draw_circle = function(a) {
    sleep(1500);
    console.log("Cheguei2");    
    var code = 1;
    test(code);
    console.log("Dale");    
    Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "50";
    return "turtle.circle(" + b + ")\n"
}
,
Blockly.Blocks.draw_stamp = {
    init: function() {
        this.setColour(160),
        this.appendDummyInput().appendField("stamp"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python.draw_stamp = function(a) {
    return Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()",
    "turtle.stamp()\n"
}
,
Blockly.Blocks.begin_fill = {
    init: function() {
        this.setColour(160),
        this.appendDummyInput().appendField("begin fill"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python.begin_fill = function(a) {
    return Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()",
    "turtle.begin_fill()\n"
}
,
Blockly.Blocks.end_fill = {
    init: function() {
        this.setColour(160),
        this.appendDummyInput().appendField("end fill"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python.end_fill = function(a) {
    return Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()",
    "turtle.end_fill()\n"
}
,
Blockly.Blocks["goto"] = {
    init: function() {
        this.setColour(160),
        this.appendDummyInput().appendField("goto"),
        this.appendValueInput("X"),
        this.appendValueInput("Y").appendField(","),
        this.setInputsInline(!0),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python["goto"] = function(a) {
    Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
    var b = Blockly.Python.valueToCode(a, "X", Blockly.Python.ORDER_NONE) || "0"
      , c = Blockly.Python.valueToCode(a, "Y", Blockly.Python.ORDER_NONE) || "0";
    return "turtle.goto(" + b + "," + c + ")\n"
}
,
Blockly.Blocks.draw_speed = {
    init: function() {
        this.setColour(160),
        this.appendValueInput("VALUE").appendField("speed"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python.draw_speed = function(a) {
    Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "50";
    return "turtle.speed(" + b + ")\n"
}
,
Blockly.Blocks.draw_pos = {
    init: function() {
        this.setColour(160),
        this.appendDummyInput().appendField("pos"),
        this.setOutput(!0)
    }
},
Blockly.Python.draw_pos = function(a) {
    Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
    return ["turtle.pos()", Blockly.Python.ORDER_ATOMIC]
}

//------------------------------------

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

    async function test(valor) {

    console.log("Valor recebido");					
    const code = Uint8Array.of(valor);
    //const dado = code;
    console.log("Code: " + code);
    
    return await toggleLigthCharacteristic.readValue().toggleLigthCharacteristic.writeValue(code);	
    //.then(currentCode => {
      //  const convertedCode = 1;
        //toggleLigthCharacteristic.writeValue(Uint8Array.of(convertedCode === code ? 0 : code));
        
    //});

    //toggleLigthCharacteristic.writeValue(code);	
    //console.log("Code enviado com sucesso!, CODE:" + code);
    //return code;
}	  

Connect.onclick = function() {
    console.log("Conectando...");
    connect();
};

function toggleItemsEventListeners(action) {
    toggleRedLightButton[action]('click', test);	
}

//--------------------------------------------------------------