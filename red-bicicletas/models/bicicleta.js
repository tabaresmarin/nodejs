require("../controllers/bicicleta");

var Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo= modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){
    return 'id:' + this.id + " | color: " + this.color
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici) {
    Bicicleta.allBicis.push(aBici);
}


Bicicleta.findById= function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x=> x.id == aBiciId);
    if (aBici)
        return aBici;
    else
        throw new Error(`No existe una bicicleta con el id ${aBici}`)
}

Bicicleta.removeById = function(aBiciId){
        for(var i=0; i < Bicicleta.allBicis.length; i++){
        if (Bicicleta.allBicis[i].id==aBiciId) {
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}

var a = new Bicicleta (1, 'rojo', 'urbana', [3.3, -76.4]);
var b = new Bicicleta (2, 'blanco', 'urbana', [3.4, -76.5]);
var c = new Bicicleta (3, 'verde', 'deportiva', [3.2, -76.2]);

Bicicleta.add(a);
Bicicleta.add(b);
Bicicleta.add(c);

module.exports = Bicicleta;