trans_en = {
    "@metadata": {
        "authors": [
            "Bosché Aurélien"
        ],
        "last-updated": "2018-08-12",
        "locale": "en"
    },
    "app-title": "cpu-simulator",
    "cpusim-fetch": "Fetch EN",
    "cpusim-decode": "Decode",
    "cpusim-execute": "Execute",
    "cpusim-pc-to-mar": "The *Control Unit* copies the value in the *Program Counter* register to the *Memory Address Register* and onto the *Address Bus*",
    "cpusim-load-from-mem-to-databus": "The *Control Unit* tells the memory store to look at the address on the *Address Bus* and load the value stored there onto the *Data Bus*",
    "cpusim-store-databus-value-into-mdr": "The *Control Unit* stores the value on the *Data Bus* into the *Memory Data Register*",
    "cpusim-copy-into-cir": "The *Control Unit* copies the value from the *Memory Data Register* into the *Current Instruction Register*",
    "cpusim-inc-pc": "The *Control Unit* increments the *Program Counter*",
    "cpusim-break-to-opcode-and-operand": "The *Decode Unit* breaks the value in the *Current Instruction Register* into the *opcode* and *operand*.",
    "cpusim-end-program": "The *opcode* 0000 means end the program",
    "cpusim-add-acc-to-mem": "The *opcode* 0001 means add the value in the *Accumulator* register to the data stored in memory at the address specified by the *operand*",
    "cpusim-sub-acc-to-mem": "The *opcode* 0010 means subtract the value stored in memory at the address specified by the *operand* from the value in the *Accumulator* register",
    "cpusim-store-acc-to-mem-ad-operand-addr": "The *opcode* 0011 means store the value in the *Accumulator* register into memory at the address specified by the *operand*",
    "cpusim-load-from-mem-to-acc-at-operand-addr": "The *opcode* 0101 means load the value from memory (at the address specified by the *operand*) into the *Accumulator* register",
    "cpusim-branch-unconditionally": "The *opcode* 0110 means branch (unconditionally)",
    "cpusim-branch-if-acc-zero": "The *opcode* 0111 means branch if the *Accumulator* stores a value equal to 0",
    "cpusim-branch-if-acc-non-negative": "The *opcode* 1000 means branch if the *Accumulator* stores a value greater or equal to 0 (not negative)",
    "cpusim-input-or-output": "The *opcode* 1001 means either input or output, depending on the *operand*",
    "cpusim-has-halted": "The CPU has halted so the *Control Unit* doesn't fetch any more instructions",
    "cpusim-send-opcode-to-mar-then-copied-to-adressbus": "The *Decode Unit* sends the *opcode* to the *Memory Address Register* which gets copied onto the *Address Bus*",
    "cpusim-addrbus-to-databus": "The *Control Unit* tells the memory store to look at the address on the *Address Bus* and place that value on the *Data Bus*",
    "cpusim-databus-into-mdr": "The *Control Unit* copies the value on the *Data Bus* into the *Memory Data Register*",
    "cpusim-ALU-add-acc-and-mdr": "The *opcode* and *Control Unit* signals the *Arithmetic Logic Unit* to add the values stored in the *Accumulator* and *Memory Data Register*s. The result gets saved back in the *Accumulator* register.",
    "cpusim-send-opcode-to-mar-then-copied-to-adressbus2": "The *Decode Unit* sends the *opcode* to the *Memory Address Register* which gets copied onto the *Address Bus*",
    "cpusim-ALU-sub": "The *opcode* and *Control Unit* signals the *Arithmetic Logic Unit* to subtract the values stored in the *Memory Data Register* from the value stored in the *Accumulator* register. The result gets saved back in the *Accumulator* register.",
    "cpusim-acc-to-mdr-to-databus": "The *opcode* and *Control Unit* sends the value stored in the *Accumulator* register to the *Memory Data Register* which gets copied on to the *Data Bus*",
    "cpusim-operand-to-mar-to-adressbus": "The *Decode Unit* sends the *operand* to the *Memory Address Register* which gets copied onto the *Address Bus*",
    "cpusim-store-databus-value-to-address-on-adressbus": "The *Control Unit* tells the memory store to store the value on the *Data Bus* into the address on the *Address Bus*",
    "cpusim-mdr-to-acc": "The *opcode* and *Control Unit* sends the value in the *Memory Data Register* to the *Accumulator* register.",
    "cpusim-operand-to-pc": "The *operand* gets stored in the *Program Counter*",
    "cpusim-copy-operand-to-pc-if-acc-zero": "The *Control Unit* and *opcode* makes the *Arithmetic Logic Unit* check to see if the *Accumulator* register contains a zero. If it does, the *operand* gets copied into the *Program Counter* register",
    "cpusim-copy-operand-to-pc-if-acc-nonnegative": "The *Control Unit* and *opcode* makes the *Arithmetic Logic Unit* check to see if the *Accumulator* register contains a value greater than zero. If it does, the *operand* gets copied into the *Program Counter* register",
    "cpusim-input-into-acc": "The *opcode* 0001 and the *Control Bus* reads from the input device and places the input value into the *Accumulator* register",
    "cpusim-acc-to-output": "The *opcode* 0010 and the *Control Bus* causes the value of the *Accumulator* register to be sent to the output device",
    "cpusim-blank-project": "Blank project",
    "cpusim-add-two-numbers": "Add two numbers",
    "cpusim-find-the-biggest-out-of-two numbers": "Find the biggest out of two numbers",
    "cpusim-sum-the-first-positive-numbers": "Sum the first positive numbers",
    "cpusim-ocr-A-Level-CPU-simulator": "OCR A Level CPU simulator",
    "cpusim-what-it-is": "This tool is designed to simulate the registers and busses inside a Von Neumann CPU",
    "cpusim-settings": "Settings",
    "cpusim-show-values-as": "Show values as:",
    "cpusim-binary": "Binary",
    "cpusim-denary": "Denary",
    "cpusim-hex": "Hex",
    "cpusim-reset-ram": "Reset RAM",
    "cpusim-reset-cpu": "Reset CPU",
    "cpusim-examples": "Examples",
    "cpusim-import-export": "Import / Export",
    "cpusim-share": "Share",
    "cpusim-run-speed": "Run speed:",
    "cpusim-turbo": "Turbo",
    "cpusim-fast": "Fast",
    "cpusim-normal": "Normal",
    "cpusim-slow": "Slow",
    "cpusim-slug": "Slug",
    "cpusim-address": "Address",
    "cpusim-value": "Value",
    "cpusim-operand": "Operand",
    "cpusim-instruction": "Instruction",
    "cpusim-press_the_step_button_each_stage": "Press the step button to see each stage of the fetch, decode execute cycle",
    "cpusim-step": "Step",
    "cpusim-run": "Run",
    "cpusim-end": "End",
    "cpusim-add": "Add",
    "cpusim-subtract": "Subtract",
    "cpusim-store": "Store",
    "cpusim-load": "Load",
    "cpusim-branch-always": "Branch Always",
    "cpusim-branch-if-acc-zero": "Branch if ACC = 0",
    "cpusim-branch-if-acc-nonnegative": "Branch if ACC >= 0",
    "cpusim-input": "Input",
    "cpusim-output": "Output",
    "cpusim-address-bus": "Address bus",
    "cpusim-data-bus": "Data bus",
    "cpusim-control-bus": "Control bus",
    "cpusim-decode-unit": "Decode unit"
}
trans_fr = {
    "@metadata": {
        "authors": [
            "Bosché Aurélien"
        ],
        "last-updated": "2018-08-12",
        "locale": "fr"
    },
    "app-title": "cpu-simulator",
    "cpusim-fetch": "Fetch",
    "cpusim-decode": "Decode",
    "cpusim-execute": "Execute",
    "cpusim-pc-to-mar": "L' *Unité de contrôle* copie la valeur du registre *PC* dans le registre *MAR* et sur le *bus de données*",
    "cpusim-load-from-mem-to-databus": "L' *Unité de contrôle* demande à la mémoire de charger la valeur située à l'adresse donnée par le *Bus d'adresse* et de la placer sur le *bus de données*",
    "cpusim-store-databus-value-into-mdr": "L' *Unité de contrôle* stocke la valeur située sur le *bus de données* dans le registre registre *MDR*",
    "cpusim-copy-into-cir": "L' *Unité de contrôle* copie la valeur du registre *MDR* dans le registre *CIR*",
    "cpusim-inc-pc": "L' *Unité de contrôle* incrémente the *Program Counter*",
    "cpusim-break-to-opcode-and-operand": "L'*unité de décodage* découpe la valeur du registre *CIR* en un *opcode*/*opérande*.",
    "cpusim-end-program": "L'*opcode* 0000 signifie terminer le programme",
    "cpusim-add-acc-to-mem": "L'*opcode* 0001 signifie ajouter les valeurs dans le registre *ACC* avec la valeur stockée en mémoire à l'adresse  specifiée par l'*opérande*",
    "cpusim-sub-acc-to-mem": "L'*opcode* 0010 signifie soustaire la valeur en mémoire à l'adresse specifiée par l'*opérande* à la valeur contenue dans le registre *ACC*",
    "cpusim-store-acc-to-mem-ad-operand-addr": "L'*opcode* 0011 signifie enregistrer la valeur du registre *ACC* dans la mémoire à l'address specifiée par l'*opérande*",
    "cpusim-load-from-mem-to-acc-at-operand-addr": "L'*opcode* 0101 signifie charger la valeur de la mémoire à l'adresse specifiée par l'*opérande* dans le registre *ACC*",
    "cpusim-branch-unconditionally": "L'*opcode* 0110 signifie effectuer un branchement inconditionnel",
    "cpusim-branch-if-acc-zero": "L'*opcode* 0111 signifie effectuer un branchement si le registr *ACC* contient une valeur égale à 0",
    "cpusim-branch-if-acc-non-negative": "L'*opcode* 1000 signifie effectuer un branchement si le registre *ACC* contient une valeur positive",
    "cpusim-input-or-output": "L'*opcode* 1001 signifie effectuer une entrée ou une sortie en fonction de l'*opérande*",
    "cpusim-has-halted": "Le processeur s'est arrêté et  l'*unité de contôle* ne récupère plus d'instructions",
    "cpusim-send-opcode-to-mar-then-copied-to-adressbus": "L'*unité de décodage* envoie l'*opcode* au registre *MAR* qui le copie sur le *Bus d'adresse*",
    "cpusim-addrbus-to-databus": "L' *Unité de contrôle* dit à la mémoire de placée la valeur située à l'adresse spécifiée par le *Bus d'adresse* and de la placer sur le *bus de données*",
    "cpusim-databus-into-mdr": "L' *Unité de contrôle* copie la valeur située sur le *bus de données* dans le registre *MDR*",
    "cpusim-ALU-add-acc-and-mdr": "L'*opcode* et L'*unité de contrôle* demandent à l'*Arithmetic Logic Unit* d'ajouter les valeurs situées dans les registres *ACC* et *MDR* et de sauvegarder le resultat dans le registre *ACC*.",
    "cpusim-send-opcode-to-mar-then-copied-to-adressbus2": "L'*unité de décodage* envoie l'*opcode* au registre *MAR* qui est copié sur le *Bus d'adresse*",
    "cpusim-ALU-sub": "L'*opcode* et L'*unité de contrôle* demandent à l'*Arithmetic Logic Unit* de soustraire les valeurs situées dans les registres *ACC* et *MDR* et de sauvegarder le resultat dans le registre *ACC*.",
    "cpusim-acc-to-mdr-to-databus": "L'*opcode* and l'*Unité de Contrôle* envoient la valeur stockée dans le registre the *ACC* dans le registre *MDR* qui est copiée sur le *bus de données*",
    "cpusim-operand-to-mar-to-adressbus": "L'*unité de décodage* sends the *opérande* to the registre *MAR* which gets copied onto the *Bus d'adresse*",
    "cpusim-store-databus-value-to-address-on-adressbus": "L''*Unité de Contrôle* demande à la mémoire de placer la valeur située sur le bus de données sur le *Bus d'adresse*",
    "cpusim-mdr-to-acc": "L'*opcode* and l'*Unité de Contrôle* envoient la valeur du registre *MDR* au registre  *ACC*.",
    "cpusim-operand-to-pc": "L'*opérande* est stoquée dans le registre *PC*",
    "cpusim-copy-operand-to-pc-if-acc-zero": "L'*Unité de Contrôle* et l'*opcode* demandent à l'*Arithmetic Logic Unit* de vérifier si le registre *ACC* contient 0 et dans ce cas l'*opérande* est copiée dans la registre *PC*",
    "cpusim-copy-operand-to-pc-if-acc-nonnegative": "L'*Unité de Contrôle* et l'*opcode* demandent à l'*Arithmetic Logic Unit* de vérifier si le registre *ACC* contient une valeur strictement positive et dans ce cas l'*opérande* est copiée dans la registre *PC*",
    "cpusim-input-into-acc": "L'*opcode* 0001 et le *bus de contrôle* lisent depuis un périphérique d'entrée et placent la valeur dans le registre *ACC*",
    "cpusim-acc-to-output": "L'*opcode* 0010 et le *bus de contrôle* envoient la valeur du registre *ACC* vers un périphérique de sortie",
    "blank-project": "Project vierge",
    "add-two-numbers": "Ajouter deux entiers",
    "find-the-biggest-out-of-two numbers": "Déterminer le plus grand parmi deux entiers",
    "sum-the-first-positive-numbers": "Ajouter les premiers entiers strictement positifs",
    "cpusim-ocr-A-Level-CPU-simulator": "OCR A Level CPU simulator",
    "cpusim-what-it-is": "This tool is designed to simulate the registers and busses inside a Von Neumann CPU",
    "cpusim-settings": "Paramètres",
    "cpusim-show-values-as": "Utiliser la représentation :",
    "cpusim-binary": "Binaire",
    "cpusim-denary": "Décimale",
    "cpusim-hex": "Hexadécimale",
    "cpusim-reset-ram": "Réinitialiser la RAM",
    "cpusim-reset-cpu": "Réinitialiser la CPU",
    "cpusim-examples": "Exemples",
    "cpusim-import-export": "Importer / Exporter",
    "cpusim-share": "Partager",
    "cpusim-run-speed": "Vitesse:",
    "cpusim-turbo": "Turbo",
    "cpusim-fast": "Rapide",
    "cpusim-normal": "Normal",
    "cpusim-slow": "Lent",
    "cpusim-slug": "Limace",
    "cpusim-address": "Adresse",
    "cpusim-value": "Valeur",
    "cpusim-operand": "Opérande",
    "cpusim-instruction": "Instruction",
    "cpusim-press_the_step_button_each_stage": "Appuyer sur le bouton à chaque étape du cycle fetch-decode-execute",
    "cpusim-step": "Exécuter pas à pas",
    "cpusim-run": "Exécuter",
    "cpusim-end": "Fin",
    "cpusim-add": "Ajouter",
    "cpusim-subtract": "Soustraire",
    "cpusim-store": "Enregistrer",
    "cpusim-load": "Charger",
    "cpusim-branch-always": "Branchement inconditionnel",
    "cpusim-branch-if-acc-zero": "Branchement si ACC = 0",
    "cpusim-branch-if-acc-nonnegative": "Branchement si ACC >= 0",
    "cpusim-input": "Entrée",
    "cpusim-output": "Sortie",
    "cpusim-address-bus": "Bus d'adresse",
    "cpusim-data-bus": "Bus de données",
    "cpusim-control-bus": "Bus de contrôle",
    "cpusim-decode-unit": "Unité de décodage"
};

$.i18n().locale = navigator.language || navigator.browserLanguage || ( navigator.languages || [ "en" ] ) [ 0 ];
$.i18n().load(trans_en, 'en');
$.i18n().load(trans_fr, 'fr');

// Stage number to Fetch/Decode/Execute
var stagename = {
    0: "Fetch",
    1: "Fetch",
    2: "Fetch",
    3: "Fetch",
    4: "Fetch",
    5: "Decode",
    6: "Decode",
    7: "Execute",
    8: "Decode",
    81: "Execute",
    82: "Execute",
    83: "Execute",
    9: "Decode",
    91: "Decode",
    92: "Decode",
    93: "Decode",
    10: "Decode",
    101: "Decode",
    102: "Execute",
    11: "Decode",
    111: "Execute",
    112: "Execute",
    113: "Execute",
    12: "Execute",
    13: "Execute",
    14: "Execute",
    15: "Execute"
};

// example = "55 16 37 92 00 30 01 00 00 00 00 00 00 00 00 00";
var cpu = {
	step: function() {
		function setState(nextState, stageName, description) {

			description = description.replace(/\*(.*?)\*/g, function(match, contents) {
				return '<span class="hint_name">' + contents + '</span>';
			});
			cpu.showHint(
                '<span class="fetch_decode_execute ' +
                    stagename[cpu.state].toLowerCase() +
                    '">' + stageName + '</span>' +
                    description);
			cpu.state = nextState;
		}
		switch(cpu.state) {
		case 0:
			setState(
                1,
                $.i18n("cpusim-fetch"),
                $.i18n("cpusim-pc-to-mar")
            );
			cpu.registers.mar = cpu.registers.pc;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_pc,#reg_mar').addClass('active');
			$('.current_instruction').removeClass('current_instruction');
			$('#ram_address_' + cpu.registers.pc).addClass('current_instruction');
			break;
		case 1:
			setState(
                2,
                $.i18n("cpusim-fetch"),
                $.i18n("cpusim-load-from-mem-to-databus")
            );
			$('.active').removeClass('active');
			$('#ram_value_' + cpu.registers.mar).addClass('active');
			break;

		case 2:
			setState(
                3,
                $.i18n("cpusim-fetch"),
                $.i18n("cpusim-store-databus-value-into-mdr")
            );
			cpu.registers.mdr = cpu.ram[cpu.registers.mar];
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_mdr').addClass('active');
			break;

		case 3:
			setState(
                4,
                $.i18n("cpusim-fetch"),
                $.i18n("cpusim-copy-into-cir")
            );
			cpu.registers.cir = cpu.registers.mdr;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_mdr,#reg_cir').addClass('active');
			break;

		case 4:
			setState(
                5,
                $.i18n("cpusim-fetch"),
                $.i18n("cpusim-inc-pc")
            );
			cpu.registers.pc++;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_pc').addClass('active');

		case 5:
			setState(
                6,
                $.i18n("cpusim-decode"),
                $.i18n("cpusim-break-to-opcode-and-operand")
            );
			$('.active').removeClass('active');
			$('#reg_cir,.decode_unit table').addClass('active');
			break;

		case 6:
			var opcode = ((cpu.registers.cir & 0xff) >> 4);
			$('.active').removeClass('active');
			$('.decode_row_' + opcode).addClass('active');
			switch(opcode) {
			case 0:
				setState(
                    7,
                    $.i18n("cpusim-decode"),
                    $.i18n("cpusim-end-program")
                );
				break;

			case 1:
				setState(
                    8,
                    $.i18n("cpusim-decode"),
                    $.i18n("cpusim-add-acc-to-mem")
                );
				break;

			case 2:
				setState(
                    9,
                    $.i18n("cpusim-decode"),
                    $.i18n("cpusim-sub-acc-to-mem")
                );
				break;

			case 3:
				setState(
                    10,
                    $.i18n("cpusim-decode"),
                    $.i18n("cpusim-store-acc-to-mem-ad-operand-addr")
                );
				break;

			case 5:
				setState(
                    11,
                    $.i18n("cpusim-decode"),
                    $.i18n("cpusim-load-from-mem-to-acc-at-operand-addr")
                );
				break;

			case 6:
				setState(
                    12,
                    $.i18n("cpusim-decode"),
                    $.i18n("cpusim-branch-unconditionally")
                );
				break;

			case 7:
				setState(
                    13,
                    $.i18n("cpusim-decode"),
                    $.i18n("cpusim-branch-if-acc-zero")
                );
				break;

			case 8:
				setState(
                    14,
                    $.i18n("cpusim-decode"),
                    $.i18n("cpusim-branch-if-acc-non-negative")
                );
				break;

			case 9:
				setState(
                    15,
                    $.i18n("cpusim-decode"),
                    $.i18n("cpusim-input-or-output")
                );
				break;
			}
			break;

		case 7:
			setState(
                7,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-has-halted")
            );
			$('.active').removeClass('active');
			cpu.running = false;
			break;

		case 8: //The *opcode* 0001 means add the value in the
            //*Accumulator* register to the data stored in memory
            //at the address specified by the *operand*"
			setState(
                81,
                $.i18n("cpusim-decode"),
                $.i18n("cpusim-send-opcode-to-mar-then-copied-to-adressbus")
            );
			cpu.registers.mar = cpu.registers.cir & 0x0F;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_mar,.decode_row_1').addClass('active');
			break;

		case 81: 
			setState(
                82,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-addrbus-to-databus")
            );
			$('.active').removeClass('active');
			$('#ram_value_' + cpu.registers.mar).addClass('active');
			break;
		case 82:
			setState(
                83,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-databus-into-mdr")
            );
			cpu.registers.mdr = cpu.ram[cpu.registers.mar];
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_mdr').addClass('active');
			break;
		case 83:
			setState(
                0,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-ALU-add-acc-and-mdr")
            );
			cpu.registers.acc += cpu.registers.mdr;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_mdr,#alu,#acc').addClass('active');
			break;

		case 9: //"The *opcode* 0010 means subtract the value stored
            //in memory at the address specified by the *operand*
            //from the value in the *Accumulator* register"
			setState(
                91,
                $.i18n("cpusim-decode"),
                $.i18n("cpusim-send-opcode-to-mar-then-copied-to-adressbus")
            );
			cpu.registers.mar = cpu.registers.cir & 0x0F;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_mar').addClass('active');
			break;

		case 91: 
			setState(
                92,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-addrbus-to-databus")
            );
			$('.active').removeClass('active');
			$('#ram_value_' + cpu.registers.mar).addClass('active');
			break;
		case 92:
			setState(
                93,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-databus-into-mdr")
            );
			$('.active').removeClass('active');
			$('#reg_mdr').addClass('active');
			cpu.registers.mdr = cpu.ram[cpu.registers.mar];
			cpu.updateValues();
			break;
		case 93:
			setState(
                0,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-ALU-sub")
            );
			cpu.registers.acc = cpu.registers.acc - cpu.registers.mdr;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#alu,#reg_acc,#reg_mdr').addClass('active');
			break;

		case 10: //"The *opcode* 0011 means store the value in the
            //*Accumulator* register into memory at the address
            //specified by the *operand*"
			setState(
                101,
                $.i18n("cpusim-decode"),
                $.i18n("cpusim-acc-to-mdr-to-databus")
            );
			cpu.registers.mdr = cpu.registers.acc;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_acc,#reg_mdr').addClass('active');
			break;
		case 101:
			setState(
                102,
                $.i18n("cpusim-decode"),
                $.i18n("cpusim-operand-to-mar-to-adressbus")
            );
			cpu.registers.mar = cpu.registers.cir & 0x0F;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_mar').addClass('active');
			break;
		case 102: 
			setState(
                0,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-store-databus-value-to-address-on-adressbus")
            );
			cpu.ram[cpu.registers.mar] = cpu.registers.mdr;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#ram_value_' + cpu.registers.mar).addClass('active');
			break;

		case 11: //"The *opcode* 0101 means load the value from memory
            //(at the address specified by the *operand*) into
            //the *Accumulator* register"
			setState(
                111,
                $.i18n("cpusim-decode"),
                $.i18n("cpusim-operand-to-mar-to-adressbus")
            );
			cpu.registers.mar = cpu.registers.cir & 0x0F;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_mar').addClass('active');
			break;

		case 111: 
			setState(
                112,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-addrbus-to-databus")
            );
			$('.active').removeClass('active');
			$('#ram_value_' + cpu.registers.mar).addClass('active');
			break;
		case 112:
			setState(
                113,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-databus-into-mdr")
            );
			cpu.registers.mdr = cpu.ram[cpu.registers.mar];
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_mdr').addClass('active');
			break;
		case 113:
			setState(
                0,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-mdr-to-acc")
            );
			cpu.registers.acc = cpu.registers.mdr;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_mdr,#reg_acc').addClass('active');
			break;

		case 12://The *opcode* 0110 means branch (unconditionally)
			setState(
                0,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-operand-to-pc")
            );
			cpu.registers.pc = cpu.registers.cir & 0x0F;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_pc').addClass('active');
			break;

		case 13://The *opcode* 0111 means branch if the *Accumulator*
            //stores a value equal to 0
			setState(
                0,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-copy-operand-to-pc-if-acc-zero")
            );
			if(cpu.registers.acc == 0)
				cpu.registers.pc = cpu.registers.cir & 0x0F;
			cpu.updateValues();
			$('.active').removeClass('active');
			$('#reg_acc,#reg_pc,#alu').addClass('active');
			break;

		case 14://The *opcode* 1000 means branch if the *Accumulator*
            //stores a value greater than or equal to 0"
			setState(
                0,
                $.i18n("cpusim-execute"),
                $.i18n("cpusim-copy-operand-to-pc-if-acc-nonnegative")
            );
			if(cpu.registers.acc >= 0)
				cpu.registers.pc = cpu.registers.cir & 0x0F;
			$('.active').removeClass('active');
			cpu.updateValues();
			$('#alu,#reg_acc,#reg_pc').addClass('active');
			break;

		case 15://The *opcode* 1001 means either input or output,
            //depending on the *operand*"
			if((cpu.registers.cir & 0x0F) == 1) {
				setState(
                    0,
                    $.i18n("cpusim-decode"),
                    $.i18n("cpusim-input-into-acc")
                );
				cpu.registers.acc = parseInt(prompt("Enter decimal input value:")) & 0xFF;
				cpu.updateValues();
				$('.active').removeClass('active');
				$('#reg_acc').addClass('active');
			}
			if((cpu.registers.cir & 0x0F) == 2) {
				setState(
                    0,
                    $.i18n("cpusim-decode"),
                    $.i18n("cpusim-acc-to-output")
                );
				alert("Output: " + cpu.registers.acc);
				$('.active').removeClass('active');
				$('#reg_acc').addClass('active');
			}
			break;


		}
		if(cpu.running) {
			cpu.nextTimeout = setTimeout(cpu.step, cpu.runDelay);
		}
	},

	state: 0,

	running: false,

	nextTimeout: 0,

	runDelay: 1000,

	showHint: function(html) {
		$('#hint_text').html(html);
	},

	jqCPU: null,

	ram: [],

	pad: function(val, length) {
		while(val.length < length) {
			val = "0" + val;
		}
		return val;
	},

	hex2bin: function(hex) {
		var v = parseInt(hex, 16) & 0xFF;
		return cpu.pad(v.toString(2), 8);
	},

	bin2hex: function(bin) {
		var v = parseInt(bin, 2) & 0xFF;
		return cpu.pad(v.toString(16), 2);
	},

	bin2dec: function(bin) {
		var v = parseInt(bin, 2) & 0xFF;
		if(v >= 128)
			v -= 256;
		return v;
	},

	dec2bin: function(dec) {
		return cpu.pad((dec & 0xFF).toString(2), 8);
	},

	hex2dec: function(hex) {
		var v = parseInt(hex, 16) & 0xFF;
		if(v >= 128)
			v -= 256;
		return v;
	},

	dec2hex: function(dec) {
		return cpu.pad((dec & 0xFF).toString(16), 2);
	},

	updateValues: function() {
		var regNames = Object.keys(cpu.registers);

		function writeValue(val, jqDest) {
			if(jqDest.hasClass("value_binary")) {
				val = cpu.dec2bin(val);
			}
			if(jqDest.hasClass("value_hex")) {
				val = cpu.dec2hex(val);
			}
			jqDest.text(val);
		}

		for(var i = 0; i < regNames.length; i++) {
			var val = cpu.registers[regNames[i]];
			var jqDest = $('#reg_' + regNames[i] + "_val");
			writeValue(val, jqDest);
		}

		for(var i = 0; i < cpu.ram.length; i++) {
			writeValue(cpu.ram[i], $('#ram_value_' + i));
		}
	},

	registers: {
		acc: 0,
		pc: 0,
		mar: 0,
		mdr: 0,
		cir: 0
	},

	updateAnnotations: function() {
		var d = $('#drawing').html("");
		var w = d.width();
		var h = d.height();
		var paper = Raphael("drawing", w, h);
		paper.clear();

		function connect(from, to, attributes, label, labelAttributes) {

			function getX(i, a) {
				switch(a){
				case 'left':
					return i.position().left;
					break;
				case 'right':
					return i.position().left + i.outerWidth(true);
					break;
				case 'middle':
					return i.position().left + (i.outerWidth(true) / 2);
					break;
				default:
					var percentage = parseInt(a.replace("%", ""));
					return i.position().left + (i.outerWidth(true) * percentage / 100);
					break;
				}
			}

			function getY(i, a) {
				switch(a) {
				case 'top':
					return i.position().top;
					break;
				case 'bottom':
					return i.position().top + i.outerHeight(true);
					break;
				case 'middle':
					return i.position().top + (i.outerHeight(true) / 2);
					break;
				default:
					var percentage = parseInt(a.replace("%", ""));
					return i.position().top + (i.outerHeight(true) * percentage / 100);
				}
			}
			var x1 = getX(from.e, from.h);
			var x2 = x1;
			if(to.h) {
				x2 = getX(to.e, to.h);
			}

			var y1 = getY(from.e, from.v);
			var y2 = y1;
			if(to.v) {
				y2 = getY(to.e, to.v);
			}

			var e = paper.path("M" + Math.floor(x1) + " " + Math.floor(y1) + "L" +  Math.floor(x2) + " " + Math.floor(y2));
			if(attributes === undefined) {
				attributes = {"stroke-width": 10, "arrow-end":"block-narrow-short"};
			}
			e.attr(attributes);

			if(label) {
				var x = Math.floor((x1 + x2) / 2);
				var y = Math.floor((y1 + y2) / 2);
				var text = paper.text(x, y, label);
				if(labelAttributes) {
					text.attr(labelAttributes);
				}
			}
		}

		var PC = $('#reg_pc');
		var MAR = $('#reg_mar');
		var decodeUnit = $('.decode_unit');
		var MDR = $('#reg_mdr');
		var CIR = $('#reg_cir');
		var ALU = $('#alu');
		var ACC = $('#reg_acc');
		var CPU = $('.cpu');
		var RAM = $('.ram');

		connect({e:ALU, h:"left", v:"middle"}, {e:decodeUnit, h:"right"}, {"stroke-width": 10, "arrow-start":"block-narrow-short"});
		connect({e:PC, h:"right", v:"middle"}, {e:MAR, h:"left", v:"middle"});
		connect({e:decodeUnit, h:"60%", v:"top"}, {e:PC, v:"bottom"});
		connect({e:decodeUnit, h:"80%", v:"top"}, {e:MAR, h:"left", v:"bottom"});
		connect({e:MDR, h:"middle", v:"bottom"}, {e:CIR, h:"middle", v:"top"});
		connect({e:CIR, h:"left", v:"middle"}, {e:decodeUnit, h:"right"});
		connect({e:MDR, h:"20%", v:"top"}, {e:ALU, v:"bottom"});
		connect({e:ACC, h:"20%", v:"bottom"}, {e:ALU, v:"top"}, {"stroke-width": 10, "arrow-end":"block-narrow-short", "arrow-start": "block-narrow-short"});
		connect({e:MDR, h:"80%", v:"top"}, {e:ACC, h:"80%", v:"bottom"}, {"stroke-width": 10, "arrow-end":"block-narrow-short", "arrow-start": "block-narrow-short"});

		connect({e:CPU, h:"right", v:"5%"}, {e: RAM, h:"left"}, {"stroke-width": 20, "stroke": "#F00", "arrow-end":"block-narrow-short"}, $.i18n("cpusim-address-bus"));
		connect({e:CPU, h:"right", v:"56%"}, {e: RAM, h:"left"}, {"stroke-width": 20, "stroke": "#F00", "arrow-end":"block-narrow-short", "arrow-start": "block-narrow-short"}, $.i18n("cpusim-data-bus"));
		connect({e:CPU, h:"right", v:"85%"}, {e: RAM, h:"left"}, {"stroke-width": 20, "stroke": "#F00", "arrow-end":"block-narrow-short", "arrow-start": "block-narrow-short"}, $.i18n("cpusim-control-bus"));
	},

	init: function(jqCPU) {
		$(window).resize(cpu.updateAnnotations);
		cpu.jqCPU = jqCPU;
		var html ='<div id="drawing"></div><div class="ram"><h3><i class="fa fa-list"></i> RAM</h3>';
		html += '<table class="table table-fixed table-striped table-hover"><thead><tr><th>        <span data-i18n="cpusim-address">Address</span></th><th><span data-i18n="cpusim-value">Value</span></th></tr></thead>';
		var params = window.location.search.substr(1);
		var ram = [];
		var initZeros = true;
		if(ram = params.replace("ram=", "")) {
			if(ram = ram.match(/([0-9a-fA-F]{2})/g)) {
				initZeros = false;
			}
		}
		for(var address = 0; address < 16; address++) {
			cpu.ram[address] = initZeros? 0 : cpu.hex2dec(ram[address]);
			html += '<tr><td id="ram_address_' + address + '" class="value value_denary">' + address + '</td><td id="ram_value_' + address + '" class="value value_denary editable" data-description="Memory address ' + address + '">' + cpu.ram[address] + '</td></tr>';
		}
		html += '</table>';
		html += '</div>';


		html += '<div class="cpu"><h3><i class="fa fa-microchip"></i> CPU</h3>';

		function getRegisterHtml(name, value, desc) {
			return '<div class="register" id="reg_' + name.toLowerCase()+'"><div class="reg_name">' + name + '</div><div id="reg_' + name.toLowerCase() + '_val" class="reg_val value value_denary editable" data-description="' + desc + '">' + value + '</div></div>';
		}
		html += getRegisterHtml('PC', 0, "Program Counter");
		html += getRegisterHtml('MAR', 0, "Memory Address Register");
		html += getRegisterHtml('MDR', 0, "Memory Data Register");
		html += getRegisterHtml('ACC', 0, "Accumulator");
		html += getRegisterHtml('CIR', 0, "Current Instruction Register");

		html += '<div id="alu">ALU</div>';
		html += '<div id="cu">CU</div>';


		html += '<div class="decode_unit"><h4><i class="fa fa-info-circle"></i> <span data-i18n="cpusim-decode-unit">Decode unit</span></h2>';
		html += '<table class="table table-fixed table-striped table-hover"><thead><tr><th>Opcode</th><th><span data-i18n="cpusim-operand">Operand</span></th><th><span data-i18n="cpusim-instruction">Instruction</span></th></tr></thead>';
		html += '<tr class="decode_row_0"><td>0000</td><td>0000   </td><td data-i18n="cpusim-end">End</td></tr>';
		html += '<tr class="decode_row_1"><td>0001</td><td>address</td><td data-i18n="cpusim-add">Add</td></tr>';
		html += '<tr class="decode_row_2"><td>0010</td><td>address</td><td data-i18n="cpusim-subtract">Subtract</td></tr>';
		html += '<tr class="decode_row_3"><td>0011</td><td>address</td><td data-i18n="cpusim-store">Store</td></tr>';
		html += '<tr class="decode_row_5"><td>0101</td><td>address</td><td data-i18n="cpusim-load">Load</td></tr>';
		html += '<tr class="decode_row_6"><td>0110</td><td>address</td><td data-i18n="cpusim-branch-always">Branch Always</td></tr>';
		html += '<tr class="decode_row_7"><td>0111</td><td>address</td><td data-i18n="cpusim-branch-if-acc-zero">Branch if ACC = 0</td></tr>';
		html += '<tr class="decode_row_8"><td>1000</td><td>address</td><td data-i18n="cpusim-branch-if-acc-nonnegative">Branch if ACC >= 0</td></tr>';
		html += '<tr class="decode_row_9"><td>1001</td><td>0001</td>   <td data-i18n="cpusim-input">Input</td></tr>';
		html += '<tr class="decode_row_9"><td>1001</td><td>0010</td>   <td data-i18n="cpusim-output">Output</td></tr>';
		html += '</div>';
		html += '</div>';

		$(jqCPU).html(html);

		cpu.updateAnnotations();

		$('#modal_change_value').modal({ show: false})
		$('#run_speed').change(function() {
			cpu.runDelay = $(this).val();
		});

		$('#btn_reset_cpu').click(function() {
			cpu.state = 0;
			cpu.registers.acc = cpu.registers.cir = cpu.registers.mar = cpu.registers.mdr = cpu.registers.pc = 0;
			cpu.showHint("CPU registers and execution state reset to zero")
			$('.current_instruction').removeClass('current_instruction');
			cpu.updateValues();
		});

		$('#btn_share').click(function() {
			$('#st-2').toggleClass('st-hidden');
		});

		setTimeout(function() {
			$('#st-2').addClass('st-hidden');
		}, 5000);

		$('#btn_reset_ram').click(function() {
			cpu.showHint("All memory store values set to zero");
			for(var address = 0; address < 16; address++) {
				cpu.ram[address] = 0;
				var jq = $('#ram_value_' + address);
				if(jq.hasClass('value_denary')) {
					jq.text(0);
				}
				if(jq.hasClass('value_binary')) {
					jq.text("00000000");
				}
				if(jq.hasClass('value_hex')) {
					jq.text("00");
				}
			}
		});

		$('.value.editable').click(function(e) {
			var id = e.currentTarget.id;

			var jq = $('#' + id);
			$('#modal_change_value_title').text(jq.data("description"));
			$('#change_value_from').text(jq.text());
			$('#change_value_to').val(jq.text());
			cpu.lastChangedValue = id;
			$('#modal_change_value').modal('show')
		});

		$('#btn_change_value_ok').click(function() {
			function getInt(jq, val) {
				if(jq.hasClass('value_hex')) {
					return cpu.hex2dec(val);
				}
				if(jq.hasClass('value_binary')) {
					return cpu.bin2dec(val);
				}
				val = parseInt(val, 10) & 0xFF;
				return val >= 128? val - 256: val;
			}

			var jq = $('#' + cpu.lastChangedValue);
			var value = $('#change_value_to').val();
			var parts = cpu.lastChangedValue.split("_");
			switch(parts[0]) {
			case 'ram':
				var address = parseInt(parts[2]);
				cpu.ram[address] = getInt(jq, value);
				break;
			case 'reg':
				var reg = parts[1];
				cpu.registers[reg] = getInt(jq, value);
				break;

			}
			cpu.updateValues();
		});

		$('#btn_step').click(cpu.step);

		$('#btn_run').click(function() {
			if(cpu.running && cpu.nextTimeout) {
				clearTimeout(cpu.nextTimeout);
			} else {
				cpu.running = true;
				cpu.step();
			}
		});

		$('#modal_change_value').on('shown.bs.modal', function() {
			$('#change_value_to').focus().select();
		});

		$('#modal_export').on('shown.bs.modal', function(e) {
			var bytes = [];
			for(var i = 0; i < cpu.ram.length; i++) {
				bytes.push(cpu.dec2hex(cpu.ram[i]));
			}
			var hex = bytes.join(" ");
			$('#export_hex').val(hex).focus().select();
		});

		$('#btn_import').click(function() {
			var bytes = $('#export_hex').val().split(" ");
			for(var i = 0; i < bytes.length && i < cpu.ram.length; i++) {
				cpu.ram[i] = cpu.hex2dec(bytes[i]);
			}
			cpu.updateValues();
		});

		$('#btn_export').click(function() {
			var bytes = $('#export_hex').val().replace(/ /g, "");
			window.location = window.location.origin + window.location.pathname + "?ram=" + bytes;
		});

		$('#btn_toggle_hint').click(function(e) {
			$('#hint').toggleClass('hint-hidden');
		});

		$('.btn_values').click(function(e) {
			var mode = e.currentTarget.id.split("_")[2];
			$('.value').each(function(index, element) {
				var jq = $(this);
				var val = jq.text();
				if(jq.hasClass("value_binary")) {
					val = parseInt(val, 2);
				}
				if(jq.hasClass("value_denary")) {
					val = parseInt(val, 10);
				}
				if(jq.hasClass("value_hex")) {
					val = parseInt(val, 16);
				}
				switch(mode) {
				case 'binary':
					jq.text(cpu.dec2bin(val));
					break
				case 'hex':
					jq.text(cpu.dec2hex(val));
					break;
				case 'denary':
					jq.text(val);
				}
			}).removeClass("value_binary value_denary value_hex").addClass("value_" + mode);

		});

		$('#btn_values_binary').trigger("click");
	}
};


$(function() {
	cpu.init("#cpu");
    $('body').i18n();
});

