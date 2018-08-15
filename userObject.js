const getUserObject = (client, userId) => {
	return new Promise( async (resolve, reject) => {
		try {
			let endpoint = 'users/show'; 
			let params = {
				'user_id': userId
			};
			let user = await client.get(endpoint, params);
			resolve(JSON.stringify(user));
		} catch(err) {
			console.log('ERROR in getUserObject', err);
			reject(err);
		}
		
	})
}

module.exports = getUserObject;