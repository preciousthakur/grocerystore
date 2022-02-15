import { useraction } from "../actions/action";
import { takeEvery, call, put } from 'redux-saga/effects'
import axios from "axios";

function* register(user) {
    try {
        const result = yield call(registerapi(user))
        yield put(useraction.Signupsuccess(result))
    }
    catch (err) {
        yield put(useraction.Signupfail(err))
    }
}

function registerapi(user) {
    const customer = {
        "customer": {
            "email": user.payload.email,
            "firstname": user.payload.firstname,
            "lastname": user.payload.lastname,
            "store_id": 2
        },
        "password": user.payload.password

    }
    console.log(user)
    console.log(JSON.stringify(customer))
    const requestoptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    }
    return fetch('http://cf467543a5.nxcli.net/rest/all/V1/customers',requestoptions).then(data=>{console.log(data)});
    

}

export function* fetchapi() {
    yield takeEvery('signuprequest', register)
}