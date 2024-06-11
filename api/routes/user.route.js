import express from 'express';
import {test} from '../controllers/user.controller.js';
const router = express.Router();

router.get('/test',test);
// router.get("/test", (req,res)=>{
//     res.json({
//         msg:'Api is Working....',
//     });
// });

export default router;