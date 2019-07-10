import callAPI from '../util/callAPI'

class Authenticate {
    constructor(){
        this.authenticated = false;  
    }
    login(){
        this.authenticated = true;
    }
    logout(){
        this.authenticated = false;
        localStorage.clear();
    }
    isAuthenticated(){
        const jwt = JSON.parse(localStorage.getItem('token'));
        console.log(jwt)
        if(jwt){
            const a = async () => {
                const res = await callAPI('login', "POST", {}, {
                    'authorization': `Bearer ${jwt}`,
                    'Content-Type': 'application/json'
                });
                return this.authenticated = res.data.msg;
            }
            a();
        }
        return this.authenticated;
    }
}

export default new Authenticate();