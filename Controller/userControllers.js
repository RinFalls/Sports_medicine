import pkg from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/User.js';
const { verify } = pkg;
const generateJwt = (_id, Email, role) => {
  return jwt.sign(
    {_id, Email, role },
    'secret123',
    { expiresIn: '30d' }
  );
};

class UserController {
    async create(req, res, next) {
        const {Firstname,Lastname,Middlename,School,Email, Password, role }= req.body;
        if (!Email || !Password) {
          return console.log('Некорректный email или password');
        }
        const candidate = await User.findOne({ Email });
        if (candidate) {
          return next(console.log('Пользователь с таким email уже существует'));
        }
        const hashPassword = await bcrypt.hash(Password, 5);
        const user = await User.create({ Firstname,Lastname,Middlename,School,Email, role, Password: hashPassword});
     
        const token = generateJwt(user._id, user.Email, user.role);
        return res.json({ token });
      }
    
      async login(req, res, next) {
        const { Email,  Password } = req.body;
        const user = await User.findOne({ Email });
        if (!user) {
          return next(console.log('Пользователь не найден'));
        }
        let comparePassword = bcrypt.compareSync(Password, user.Password);
        if (!comparePassword) {
          return next(console.log('Указан неверный пароль'));
        }
        const token = generateJwt(user._id, user.Email, user.role);
        return res.json({ token });
      }

      async check(req, res, next) {
        const token = generateJwt(req.user._id, req.user.Email, req.user.role);
        return res.json({ token });
      }

      async update (req, res) {
        
        const { id} = req.body;
        const decoded = verify(token, 'secret123')
        console.log(decoded);
        if (decoded._id !== id) {
            return res.status(403).json({ message: "Недостаточно прав для изменения данных" })
        }
        await User.findByIdAndUpdate(id, req.body);
        console.log(req.body);
        return res.json({ message: "Данные пользователя успешно обновлены" });
}
      async getOne(req, res) {
        const {id} = req.params
        console.log(id);
        const user = await User.findOne({_id:id})
        return res.json(user)
    }
    async remove (req, res) {
      const id = req.params.id;
      await User.findByIdAndDelete(id);
      }
}

export default new UserController()