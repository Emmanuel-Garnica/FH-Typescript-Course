"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var Fuerzas;
    (function (Fuerzas) {
        Fuerzas[Fuerzas["acuaman"] = 0] = "acuaman";
        Fuerzas[Fuerzas["flash"] = 5] = "flash";
        Fuerzas[Fuerzas["superman"] = 100] = "superman";
        Fuerzas[Fuerzas["batman"] = 1] = "batman";
    })(Fuerzas || (Fuerzas = {}));
    var fuerzaFlash = Fuerzas.flash;
    var fuerzaSuperman = Fuerzas.superman;
    var fuerzaBatman = Fuerzas.batman;
    var fuerzaAcuaman = Fuerzas.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    var villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper Velocidad']
    };
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.265596548;
    console.log(avenger.toFixed(2));
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
    numbers.forEach(function (v) { return console.log(v); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error('Auxilio!');
})();
(function () {
    var nada = undefined;
    console.log(nada);
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('123A');
    console.log({ avengers: avengers });
})();
(function () {
    var batman = 'Batman';
    var linternaVerde = "Linterna Verde";
    var volcanNegro = "H\u00E9roe: Volcan Negro";
    var abc = 123;
    console.log(" I'm ".concat(batman, ", ").concat(abc));
    console.log(batman.toUpperCase());
})();
(function () {
    var hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map