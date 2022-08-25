
class MongoDBContainer {

    constructor(model) {
        this.model = model;
    }


    async getByFilter(filter) {
        const results = await this.model.find(filter)
        return results.map(result => result.toObject())
    }


    async getAll() {

        const all = await this.model.find({});
        return all.map(result => result.toObject());

    }

    async save(item) {

        const id = await this.model.create(item);
        return id.toObject();

    }

    async update(content, id) {
        
       // let item = await this.model.updateOne({ _id: id }, content)
        const item = await this.model.findOneAndUpdate({ _id: id },content,{new: true} );      
        if (item) {
            return item.toObject()
        } else {
            return null
        }
       

    }

    async delete(id) {
        let item = await this.model.deleteOne({ _id: id })
        console.log(item)
        if (item?.deletedCount===1) {
            return ({id})
        } else {
            return null
        }
      
    }


}

export default MongoDBContainer;