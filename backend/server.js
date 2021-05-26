import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/auth-event"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
mongoose.Promise = Promise

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
})
const User = mongoose.model('User', userSchema)

const authenticateUser = async (req, res, next) => {
  const user = await User.findOne({ accessToken: req.header('Authorization') })
  if (user) {
    req.user = user
    next()
  } else {
    res.status(401).json({ loggedOut: true })
  }
}

const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello world')
})
app.get('/secrets', authenticateUser)
app.get('/secrets', (req, res) => {
  res.json({ secret: 'This is a super secret message' })
})

app.post('/signup', async (req, res) => {
  const { userName, password, email } = req.body
  try {
    const salt = bcrypt.genSaltSync()
    const newUser = new User({
      userName,
      email,
      password: bcrypt.hashSync(password, salt)
    })
    await newUser.save()
    res.status(201).json({ id: newUser._id, username: newUser.userName, accessToken: newUser.accessToken })
  } catch (error) {
    res.status(400).json({ message: 'Could not create user', error })
  }
})

app.post('/login', async (req, res) => {
  const { password, email } = req.body
  try {
    const user = await User.findOne({ email })
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({ id: user._id, username: user.userName, accessToken: user.accessToken })
    } else {
      res.status(404).json({ message: 'Could not find user', error })
    }

  } catch (error) {
    res.status(400).json({ message: 'Bad request', error })
  }
})

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`)
})
