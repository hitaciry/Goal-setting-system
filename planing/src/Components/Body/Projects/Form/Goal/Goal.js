'use strict'
import mongoose from 'mongoose'
let Schema = mongoose.Schema;
//@flow
let Goal ={
  name:String,
  id:String,
  parentId:String,
  formtId:String,
  state:String,
  plan:number,
  fact:number,
  measure:String
  
}
let GoalSchema = new Schema(Goal) 
module.exports = mongoose.model('Goal', GoalSchema);
export default Goal;