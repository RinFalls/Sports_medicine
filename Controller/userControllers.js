import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/User.js';

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

      async aboba(req,res,next){
        console.log('aboba');
      }
}

export default new UserController()