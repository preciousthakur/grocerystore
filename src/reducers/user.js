export function signup(state={},action) {
    switch (action.type) {
        case 'signuprequest':
            return {
                Register: true
            }
        case 'signupsuccess':
            return {

            }

        case 'signupfail':
            return {

            }
            default:
                return state
    }
}