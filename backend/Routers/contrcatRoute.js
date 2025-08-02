const ContractForm = require('../Models/contract-form');
const express = require('express');
const contractRouter=express.Router();

contractRouter.get('/view-contract', async(req, res) => {
 try {
    const contractdata = await ContractForm.find();
    res.json(contractdata);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

contractRouter.post('/submit-contract', async(req,res)=>{
  try{
const data=new ContractForm(req.body);
const savedData=await data.save();
res.status(201).json(savedData);
console.log('Contract form submitted successfully:');
  } catch(err){
console.log('Error saving contract form:', err);
res.status(500).json({ error: 'Failed to save contract form' });
  }
});

// const submitForm = async (req, res) => {
//   const { name, phone } = req.body;
//   try {
//     const newForm = new ContractForm({ name, phone });
//     await newForm.save();
//     res.status(201).json({ message: 'Form saved' });
//   } catch (err) {
//     res.status(500).json({ error: 'Error saving form' });
//   }
// };

module.exports = contractRouter;;
