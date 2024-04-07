import Ban from '../model/Ban.js';

class banController {
    async create(req, res, next) {
        try {
            let {Name, AdminId, ClientId, ViolationIdReason, Kateg_Ban, Date_start,  Date_end
            } = req.body

            const ban = await Ban.create({Name, AdminId, ClientId, ViolationIdReason, Kateg_Ban, Date_start,  Date_end})
            return res.json(ban)
        } catch (e) {
            console.log('error');
        }
    }


    async getAll(req, res) {
        const ban = await Ban.find()
            return res.json(ban)
    }
        
    async getOne(req, res) {
        const {id} = req.params
        console.log(id);
        const ban = await Ban.findOne({_id:id})
        return res.json(ban)
    }

    async update (req, res) {
        const { id} = req.body;
        await Ban.findByIdAndUpdate(id, req.body);
        console.log(req.body);
        return res.json({ message: "Данные пользователя успешно обновлены" });
        
}
    async remove (req, res) {
      const id = req.params.id;
      await Ban.findByIdAndDelete(id);
      }
}
export default new banController()