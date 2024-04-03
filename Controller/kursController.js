import Kurs from '../model/Kurs.js';

class kursController {
    async create(req, res, next) {
        try {
            let {Name, AuthorId, Kateg, Time, 
            } = req.body

            const kurs = await Kurs.create({Name, AuthorId, Kateg, Time,})
            return res.json(kurs)
        } catch (e) {
            console.log('error');
        }
    }


    async getAll(req, res) {
        const kurs = await Kurs.find()
            return res.json(kurs)
    }
        
    async getOne(req, res) {
        const {id} = req.params
        console.log(id);
        const kurs = await Kurs.findOne({_id:id})
        return res.json(kurs)
    }
}
export default new kursController()
