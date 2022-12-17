const User = require("../models/user");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports.signup = async (req, res) => {
    const { name, rollno, email, password, gender, phone, category } = req.body
    try {
        const existinguser = await User.findOne({ email })

        if (existinguser) {
            return res.status(400).json({ message: 'User already found..' })
        }
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ name, rollno, email, gender, phone, category, password: hashPassword })
        await newUser.save();
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, 'token', { expiresIn: '1h' })
        res.status(200).json({ result: newUser, token })
    } catch (err) {
        console.log(err.message)
        res.status(500).json('Something went worng...')
    }
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existinguser = await User.findOne({ email })
        if (!existinguser) {
            console.log("User not found...");
            return res.status(404).json({ message: "User not found..." })
        }
        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if (!isPasswordCrt) {
            return res.status(400).json({ message: "Invalid credentials" })
        }
        const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, 'token', { expiresIn: '48h' })
        res.status(200).json({ result: existinguser, token })

    } catch (err) {
        console.log(err.message)
        res.status(500).json(err.message)
    }
}
