'use strict'
import mongoose from 'mongoose'
import {Form} from './Form/Form'
let Schema = mongoose.Schema;
let ProjectSchema = new Schema({
  name:String,
  id:String,
  userId:number,
  forms: Form[]
}) 
module.exports = mongoose.model('Project', ProjectSchema);