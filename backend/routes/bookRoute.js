const router = require("express").Router();
const booksModel = require("../model/booksModel");

router.post("/api/books",async (req,res) => {
    try{
        const data = req.body;
        const newBook = new booksModel(data);
          await newBook.save()
        .then( res.status(200).send({mesg: `Book added successfully`}))
    }
    catch(err){
        console.log("Error opps!", err);
    }
})

router.get("/api/getbooks", async (req,res) => {
    let books ;
    try{
        books =  await booksModel.find();
        res.status(200).json({books});
    }
    catch(err){
        console.log("Error opps!", err);
    }
})

router.get("/api/getbooks/:id", async (req,res) => {
    let books ;
    const id = req.params.id;
    try{
        books =  await booksModel.findById(id);
        res.status(200).json({books});
    }
    catch(err){
        console.log("Error opps!", err);
    }
})

router.put("/api/updatebooks/:id", async(req,res) => {
    const id = req.params.id ;
    const{title,price,image,author,description} = req.body;
   try{
      const updatedBooks =  await booksModel.findByIdAndUpdate(id,{
            title,price,image,author,description
        });
        await updatedBooks.save().then( res.status(200).json({updatedBooks}))  
   }
   catch(err){
    console.log("Error opps!", err);
   } 
})

router.delete("/api/deletebooks/:id" , async(req,res) => {
    const id = req.params.id ;
   try{
      const deletedBooks =  await booksModel.findByIdAndDelete(id)
        .then( res.status(200).send({mesg : "Deleted success!"}))  
   }
   catch(err){
    console.log("Error opps!", err);
   } 
})


module.exports = router;