router.put('/Res/update/:id',(req,res)=>{
    PostsRes.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body             
        },
        (err,reservation)=>{                       
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});
