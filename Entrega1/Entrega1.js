/* 1) Declarar una clase Usuario

2) Hacer que Usuario cuente con los siguientes atributos:
nombre: String
apellido: String
libros: Object[]
mascotas: String[]

Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.
3) Hacer que Usuario cuente con los siguientes métodos:
getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.
 */

class Usuario{
    constructor (nombre, apellido, libros, mascotas){
        this.nombre=nombre
        this.apellido=apellido
        this.libros= libros
        this.mascotas=mascotas
    }
  
    getFullName(){
        return (`${this.nombre} ${this.apellido}`)
    }
    
    addMascota(Mascota){
        this.mascotas.push(Mascota)
        return this.mascotas
    }

    countMascotas(){
        return (this.mascotas).length
    }

    addBook(Nombre, Autor){
        this.libros.push({nombre:Nombre,autor:Autor})
        return this.libros
    }

    getBookNames(){
        return this.libros.map(libro=>libro.nombre)
    }

}

const mt=new Usuario('Marcia', 'Torres', [{nombre:'El envio', autor: 'SF'}, {nombre:'La sombra', autor: 'JK'}], ['perro'])

console.log(mt)
console.log(mt.nombre)
console.log(mt.getFullName())
console.log(mt.addMascota('gato'))
console.log(mt.countMascotas())
console.log(mt.addBook('Harry Potter', 'JKRowling'))
console.log(mt.getBookNames())
