// axios
import axios from "axios";
//sagas
import {call, put, takeEvery} from 'redux-saga/effects'

import { setResponseList } from "./index";

function* workerUserSAga(){
    const users= yield call(()=> axios.get("https://reqres.in/api/users?per_page=12"))
    const formatUser= users.data.data
    console.log(formatUser)
    console.log('hola2')
    yield put(setResponseList(formatUser))
  }
  
  function* userSaga(){
   
    yield takeEvery('users/setUserList', workerUserSAga)
  }
  
  export default userSaga