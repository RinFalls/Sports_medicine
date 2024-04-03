import Tasks from '../model/Tasks.js';

class tasksController {
    async create(req, res, next) {
        try {
            let {Name, AuthorId, Kateg, Opis,Thema,Complexity
            } = req.body

            const tasks = await Tasks.create({Name, AuthorId, Kateg, Opis,Thema,Complexity})
            return res.json(tasks)
        } catch (e) {
            console.log('error');
        }
    }


    async getAll(req, res) {
        const tasks = await Tasks.find()
            return res.json(tasks)
    }
        
    async getOne(req, res) {
        const {id} = req.params
        console.log(id);
        const tasks = await Tasks.findOne({_id:id})
        return res.json(tasks)
    }
}
export default new tasksController()