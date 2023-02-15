const { createUser,getUserByUserId,getusers,updateUser,deleteUser, login}= require("./user.controller");
const router = require("express").Router();
const {checktoken} =require("../../auth/token_validation");
router.post("/",checktoken,createUser);
router.get("/",checktoken,getusers);
router.get("/:id",checktoken,getUserByUserId);
router.patch("/",checktoken,updateUser);
router.delete("/",checktoken,deleteUser);
router.post("/login",login);
module.exports=router;