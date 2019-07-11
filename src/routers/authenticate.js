import callAPI from '../util/callAPI'

class Authenticate {
    constructor(){
        this.authenticated = '';
    }
    async a(){
        const jwt = JSON.parse(localStorage.getItem('token'));
        if(jwt){
            const res = await callAPI('login', "POST", {}, {
                'authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json'
            })
            return this.authenticated = res.data.msg;
        }
        else{
            return this.authenticated = false
        }
    };
    logout(){
        this.authenticated = false;
        localStorage.clear();
    }

    login(){
        this.authenticated = true;
    }
}

export default new Authenticate();