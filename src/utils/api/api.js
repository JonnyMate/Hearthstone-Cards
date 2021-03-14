export const getAccesToken = async () => {
	const accessToken = await fetch('https://us.battle.net/oauth/token', {
		body: 'grant_type=client_credentials',
		headers: {
			Authorization:
				'Basic ZGRjOTVmODUwMzY5NGU4ODhjYWNlY2ZhZGFkYjIyZjg6dWVZU3QyVXNETG1zbmVNeG11WEJjUEVKblZCN1ViWWw=',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: 'POST',
	})

	console.log(await accessToken.json())
}
