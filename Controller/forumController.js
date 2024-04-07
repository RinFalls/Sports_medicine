import Forum from '../model/Forum.js';

class forumController {
    async create(req, res, next) {
        try {
            let {Name, AuthorId, Kateg, Opis, Thema
            } = req.body

            const forum = await Forum.create({Name, AuthorId, Kateg, Opis, Thema})
            return res.json(forum)
        } catch (e) {
            console.log('error');
        }
    }


    async getAll(req, res) {
        const forum = await Forum.find()
            return res.json(forum)
    }
        
    async getOne(req, res) {
        const {id} = req.params
        console.log(id);
        const forum = await Forum.findOne({_id:id})
        return res.json(forum)
    }

    async update (req, res) {
        const { id} = req.body;
        await Forum.findByIdAndUpdate(id, req.body);
        console.log(req.body);
        return res.json({ message: "Данные пользователя успешно обновлены" });
        
}
    async remove (req, res) {
      const id = req.params.id;
      await Forum.findByIdAndDelete(id);
      }
}
export default new forumController()