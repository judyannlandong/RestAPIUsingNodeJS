var express = require('express')
  , router = express.Router();

 /* 
router.get('/', function(req, res) {
	res.json({'users':'ALL'}); 
});

router.get('/:id', function(req, res) {
	res.json({'user_id':req.params.id}); 
});   */


//declaring a user

global.users = [
	{
		id:1,
		name: 'Judy Ann',
		hobby: 'Reading'
	}
];  

//defining the router
router.get('/', function(req, res){
	return res.json({
		users: global.users,
		error: false
	});

});


//adding a new user
router.post('/', function(req, res){
	if(!req.body.name){
		return res.json({
			message: 'User name missing!',
			error: true
		});
	}
	global.users.push(req.body);
	return res.json({
		message: 'Success!',
		error: false
	});
});

//updating a user
router.put('/:userid', function(req, res){
for(let i=0; i < global.users.length; i++){
	if(global.users[i].id === parseInt(req.params.userid, 10)){
		global.users[i].name = req.body.name;
		global.users[i].hobby = req.body.hobby;
		return res.json({
			message: 'Success!',
			error: false
		});
	}
}
	return res.status(404).json({
			message: 'User not found!',
			error: true
	});
});
//deleting a user through id
router.delete('/:userid', function(req, res){
for(let i=0; i < global.users.length; i++){
		if(global.users[i].id === parseInt(req.params.userid, 10)){
			global.users.splice(i,1);
			return res.json({
				user: global.users[i],
				message: 'Success!',
				error: false
			});
		}
	}
	return res.status(404).json({
		message: 'User not found!',
		error: true
	});
});

router.get('/:userid', function(req, res){
	for(let i=0; i < global.users.length; i++){
		if(global.users[i].id === parseInt(req.params.userid, 10)){
			return res.json({
				user: global.users[i],
				message: 'Success!',
				error: false
			});
		}
	}
	return res.status(404).json({
		message: 'User not found!',
		error: true
	});
});
router.post
module.exports = router;