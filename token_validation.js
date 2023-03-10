const { verify} =require("jsonwebtoken");
module.exports={
    checktoken:(req,res,next)=> {
        let token =req.get("authorization");
        if(token){
          token = token.slice(7);
        verify(token,process.env.KEY,(err,decoded)=> {
            if(err)
            {
                res.json({
                    success:0,
                    message:"Invalid Token"
                });
            }
            else{
                next();
            }
        });
        }
        else{
            res.json({
                success:0,
                message:"Access Denied : unauthorized user"
            });
        }
    }
};