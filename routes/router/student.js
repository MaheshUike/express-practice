import express from "express";

const router = express.Router();


router.get("/all", (req, res) => {
  res.send("All student");
});


router.post('/create',(req,res)=>{
    res.send("Create student")
})

router.put("/update",(req,res)=>{
    res.send("Update student")
})

router.delete("/delete",(req,res)=>{
    res.send("delete student")
})


export default router