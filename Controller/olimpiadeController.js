import Olimpiade from '../model/Olimpiade.js';

class olimpiadeController {
    async create(req, res, next) {
        try {
            let {Name, AuthorId, Kateg, Opis, DateStart, DateEnd
            } = req.body

            const olimp = await Olimpiade.create({Name, AuthorId, Kateg, Opis, DateStart, DateEnd})
            return res.json(olimp)
        } catch (e) {
            console.log('error');
        }
    }

    async getAll(req, res) {
        const olimp = await Olimpiade.find()
            return res.json(olimp)
    }
        
    async getOne(req, res) {
        const {id} = req.params
        console.log(id);
        const olimp = await Olimpiade.findOne({_id:id})
        return res.json(olimp)
    }

    async update (req, res) {
        const { id} = req.body;
        await Olimpiade.findByIdAndUpdate(id, req.body);
        console.log(req.body);
        return res.json({ message: "Данные пользователя успешно обновлены" });
        
}
    async remove (req, res) {
      const id = req.params.id;
      await Olimpiade.findByIdAndDelete(id);
      }
}
export default new olimpiadeController()