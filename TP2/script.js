
const productos = [
  
    { nombre : 'rosa', caracteristica:'planta de exterior',  precio : 1500, id:1},
    { nombre : 'jazmin', caracteristica:'planta de exterior',  precio : 2000, id:2},
    { nombre : 'asalea', caracteristica:'planta de exterior',  precio : 3000, id:3},
    { nombre : 'girasoles', caracteristica:'planta de exterior',  precio : 3200, id:4},
]

let precio = parseInt(prompt('Ingrese el rango de precio que desea buscar'));
let resultado = productos.filter((item) => item.precio <= precio);


resultado.forEach(item=> alert(`Producto: ${item.nombre}\n Precio: $${item.precio}`))
console.log(productos)

let continuar = true;

while (continuar){
    let ingreso = prompt ('ingresa los datos del producto : titulo , caracteristica , precio, separado por una barra (/). ingresa x para finalizar');
    productos.push(ingreso);
    if (ingreso.toUpperCase()=='X'){
        continuar = false;
        break;
    }

    console.log(ingreso)
    let datos = ingreso.split('/');
    console.log(datos)
}