'use strict'
import mongoose from 'mongoose'
import Goal from'./Goal/Goal'
let Schema = mongoose.Schema;
//@flow
export let Form= {
  name:String,
  id:String,
  parentId:String,
  projectId:String,
  state:String,
  goals:Goal[]
}
let FormSchema = new Schema(Form) 
module.exports = mongoose.model('Form', FormSchema);