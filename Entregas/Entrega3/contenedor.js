/* Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
deleteAll(): void - Elimina todos los objetos presentes en el archivo. */

const fs= require ('fs')

class Contenedor {
    constructor(file){
        this.file=file
    }

    writeFile=async data => {
        try {
            await fs.promises.writeFile(
                this.file, JSON.stringify(data, null, 2)
            )
        } catch(err){
            console.log(`error: ${err}`)
        }
    }

    getAll=async() => {
        try {
            let objs = await fs.promises.readFile(this.file, 'utf-8')
            return JSON.parse(objs)
        } catch(err) {
            if(err.message.includes('no such file or directory')) return []
            console.log(`error: ${err}`)
        }
    }

    save = async obj => {
		let objs = await this.getAll();
		try {
			let newId;
			objs.length === 0
				? (newId = 1)
				: (newId = objs[objs.length - 1].id + 1);
			const newObj = { ...obj, id: newId };
			objs.push(newObj);
			await this.writeFile(objs);
			return newObj.id;
		} catch (error) {
			console.log(error);
		}
	};

    getById=async id => {
        let objs = await this.getAll()
        try {
            const obj = objs.find(obj=> obj.id===id)
            return obj? obj: null
        } catch(err){
            console.log(`error: ${err}`)
        }
    }

    deleteById=async id => {
        let objs=await this.getAll()
        try {
            objs=objs.filter(obj => obj.id != id)
            await this.writeFile(objs)
        } catch(err){
            console.log(`error: ${err}`)
        }
    }

    deleteAll=async() =>  {
        await this.writeFile([])
    }

}

module.exports = Contenedor

