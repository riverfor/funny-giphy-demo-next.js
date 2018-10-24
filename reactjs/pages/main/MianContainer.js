import Main from './Main'
import {
	connect
} from 'react-redux'

const mapStateToProps = state => {
	return {
		imgList: state.main.imgList,
		count: state.main.count
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadImgList: () => {
			dispatch({
				type: 'LOAD_IMG_LIST'
			})
		},
		searchImg: (content, page) => {
			dispatch({
				type: 'SEARCH_IMG',
				content,
				page
			})
		}
	}
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)
export default MainContainer
