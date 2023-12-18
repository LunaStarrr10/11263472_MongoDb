const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema(
  {
     name:{
      type: String,
      required:(true, "Please enter the patient's name")
     },
     gender: {
      type: String,
      required:true,
      
     },
     phonenumber:{
      type: Number,
      required: true,
     },
     address:{
      type: String,
      required: false,
     },
     emergencyname:{
      type: String,
      required:(true, "Please enter a emergency name")
     },
     contact:{
      type: Number,
      required: true,
     },
     relationshipwithpatient:{
      type: String,
      required: (true, "Please enter your relationship with the patient")
     },

  
  },
  {
    timestamps:true
  }

)

const Patient = mongoose.model('Patient', patientSchema);
async function registerPatient(req, res) {
  name,gender,address
}
req.body;

if(!name || !gender|| !address ) {
  return res.status(400).json({
    message: 'Please provide name,gender, and addresss'
  });
}
try{
  //check if patient already exists
  const existingPatient = await Patient.find0ne({name});
    if (existingPatient) {
      return res.status(409).json({message: 'Patient already exists'});
    }
  // create a new patient object
  const newPatient = newPatient ({
    name,gender, address
  });

  // save the patient to the database
  await newPatient.save();
  return res.status(201).json({
    message: "Patient registered successfully"
  });

}
catch (error) {
  return res.status (500).json({
    message:"internal server error"
    
  });
}
module.exports = {registPatient};
