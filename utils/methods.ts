import fetch from 'node-fetch';

export const postMethod = async (api: string, endpoint: string, token: string, payload: { projectKey: any; testCaseKey: any; testCycleKey: any; statusName: any; }) => {
	let response;
	const headers = {
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
		Accept: 'application/json',
	};
	const postUrl = `${api}${endpoint}`;

	try {
		response = await fetch(postUrl, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(payload),
		});
		if (!response.ok) throw response.statusText;
		return response.json();
	} catch (e) {
		console.error(e);
		return null;
	}
};
