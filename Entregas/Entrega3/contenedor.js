const fs= require ('fs')

class Contenedor {
    constructor(file){
        this.file=file
    }

    async writeFile (data){
        try {
            await fs.promises.writeFile(
                this.file, JSON.stringify(data, null, 2)
            )
        } catch(err){
            console.log(`error: ${err}`)
        }
    }

    async getAll (){
        try {
            let objs = await fs.promises.readFile(this.file, 'utf-8')
            return JSON.parse(objs)
        } catch(err) {
            if(err.message.includes('no such file or directory')) return []
            console.log(`error: ${err}`)
        }
    }

    async save (obj){
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

    async getById (id){
        let objs = await this.getAll()
        try {
            const obj = objs.find(obj=> obj.id===id)
            return obj? obj: null
        } catch(err){
            console.log(`error: ${err}`)
        }
    }

    async deleteById (id){
        let objs=await this.getAll()
        try {
            objs=objs.filter(obj => obj.id != id)
            await this.writeFile(objs)
        } catch(err){
            console.log(`error: ${err}`)
        }
    }

    async deleteAll (){
        await this.writeFile([])
    }

}

module.exports = Contenedor
