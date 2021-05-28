const { Router } = require('express')
const cors = require('cors');

const router = Router();
router.use(cors())


router.get('/', (req,res)=>{
    res.send('ok')
})