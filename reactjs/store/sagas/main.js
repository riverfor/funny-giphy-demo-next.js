import {
	all,
	put,
	call,
	select,
	takeEvery
} from 'redux-saga/effects';
import {apiGET} from '../../utils/api'
/**
 * React on example action being triggered.
 */
function* loadImgListSaga() {
  const response = yield call (apiGET,'/api/random')
  yield put({type: 'HANDLE_IMG_LIST',imgList:response.data})
}

function *searchImg (payload) {
  const response = yield call (apiGET,`/api/search?s=${payload.content}&page=${payload.page}`)
  yield put({type: 'HANDLE_COUNT',count:Math.ceil(response.count)})
  yield put({type: 'HANDLE_IMG_LIST',imgList:response.data})
}

/**
 * Main entry point for all example sagas.
 */
export default function* mianSagas() {
	yield all([
		yield takeEvery('LOAD_IMG_LIST', loadImgListSaga),
		yield takeEvery('SEARCH_IMG', searchImg),
	]);
}
