export default (state = {
	imgList: [],
	count:0
}, action) => {
	switch (action.type) {
		case 'HANDLE_IMG_LIST':
			return {
				...state,
				imgList: action.imgList,
			};
		case 'HANDLE_COUNT':
			return {
				...state,
				count: action.count
			}
		default:
			return state;
	}
};
