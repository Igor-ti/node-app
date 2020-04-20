const mongoose = require ('mongoose');
const moongoosePaginate = require ('mongoose-paginate');

const ActivitiesSchema = new mongoose.Schema({

title: {
    type:String,
    required:true,
},

description:{
    type:String,
    required:true,    
},
/*url:{
    type:String,
    required:true,
},*/
createdAt:{
    type:Date,
    default:Date.now,
},

});

ActivitiesSchema.plugin(moongoosePaginate);

mongoose.model('Activities', ActivitiesSchema);