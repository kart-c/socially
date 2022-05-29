export const searchHandler = (users, searchInput) => {
	if (searchInput) {
		return users.filter(
			(user) =>
				user.username.toLowerCase().includes(searchInput) ||
				user.firstName.toLowerCase().includes(searchInput) ||
				user.lastName.toLowerCase().includes(searchInput)
		);
	}
	return users;
};
