import mongoose from 'mongoose'
import crypto from 'crypto'

export const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true 
  },
  surname: {
    type: String,
    trim: true 
  },
  organisation: {
    type: String,
    trim: true 
  },
  positon:{
    type: String,
    trim: true 
  },
  country: {
    type: String,
  },
  participationType: {
    type: String,
  },
  agreeEmail: {
    type: Boolean,
  } ,
  agreeTerms: {
    type:Boolean,
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
  },
  profilePicture: {
    name: String,
    imageURL: String
  },
  securityManagement: {
    type: Boolean,
    default: false,
  },
  internationalThreats: {
    type: Boolean,
    default: false,
  },
  theoreticalApproaches: {
    type: Boolean,
    default: false,
  },
  humanSecurity: {
    type: Boolean,
    default: false,
  },
  peaceConflict: {
    type: Boolean,
    default: false,
  },
  openingSession: {
    type: Boolean,
    default: false,
  },
  closingSession: {
    type: Boolean,
    default: false,
  },
})