const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
	
});
router.get('/:book_id',(req,res)=>{
	req.params.book_id
});
router.get('/author/:author',(req,res)=>{
	req.params.author
});
router.post('/',(req,res)=>{
	
});
router.put('/:book_id',(req,res)=>{
	req.params.book_id
});
router.delete('/:book_id',(req,res)=>{
	req.params.book_id
});

module.exports = router;