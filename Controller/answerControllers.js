import Answer from '../model/Answer.js';

class answerController {
    async create(req, res, next) {
        try {
            let {Name, ForumId, AuthorId, Kateg, Answer, Like, DisLike
            } = req.body

            const answer = await Answer.create({Name, ForumId, AuthorId, Kateg, Answer, Like, DisLike})
            return res.json(answer)
        } catch (e) {
            console.log('error');
        }
    }


    async getAll(req, res) {
        const answer = await Answer.find()
            return res.json(answer)
    }
        
    async getOne(req, res) {
        const {id} = req.params
        console.log(id);
        const answer = await Answer.findOne({_id:id})
        return res.json(answer)
    }

    async update (req, res) {
        const { id} = req.body;
        await Answer.findByIdAndUpdate(id, req.body);
        console.log(req.body);
        return res.json({ message: "Данные пользователя успешно обновлены" });
        
}
    async remove (req, res) {
      const id = req.params.id;
      await Answer.findByIdAndDelete(id);
      }
}
export default new answerController()