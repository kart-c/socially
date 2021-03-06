import axios from 'axios';

export const getUser = async (_id, setUserObj, setLoader) => {
	try {
		const response = await axios.get(`/api/users/${_id}`);
		if (response.status === 200) {
			setUserObj(response.data.user);
		}
	} catch (error) {
		console.error(error);
	} finally {
		setLoader(false);
	}
};
