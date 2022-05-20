export const saveToCloudinary = ({ defaultdata, profilePic, updateUserWithPic }) => {
	try {
		const data = new FormData();
		data.append('file', profilePic);
		data.append('upload_preset', 'zet3aa3f');
		fetch('https://api.cloudinary.com/v1_1/obi-wan/image/upload', {
			method: 'POST',
			body: data,
		})
			.then((res) => res.json())
			.then((data) => {
				const updatedData = { ...defaultdata, profilePic: data.url };
				updateUserWithPic(updatedData);
			})

			.catch((error) => console.error(error));
	} catch (error) {
		console.error(error);
	}
};

export const saveMediaToCloudinary = (media, postHandler) => {
	try {
		const data = new FormData();
		data.append('file', media);
		data.append('upload_preset', 'zet3aa3f');
		fetch(
			`https://api.cloudinary.com/v1_1/obi-wan/${
				media.includes('image') ? 'image' : 'video'
			}/upload`,
			{
				method: 'POST',
				body: data,
			}
		)
			.then((res) => res.json())
			.then((data) => {
				const media = data.secure_url;
				postHandler(media);
			})

			.catch((error) => console.error(error));
	} catch (error) {
		console.error(error);
	}
};
