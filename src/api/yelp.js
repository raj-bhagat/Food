import axios from 'axios';

export default  axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer ducsrXAPBwmbTizCU5Bbi9nZhxhiPCDQyHNhHNXvJG4hzjmaMbg9DOGqhK_611kURYfa1H6drfi8hF1Yoff_CZ8GWySo9Fyg9gmI7u1FFUvcroivtXUStLxxXzyJX3Yx'
	}
});