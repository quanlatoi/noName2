import callAPI from '../util/callAPI'

class Authenticate {
    constructor(){
        this.authenticated = false;
    }
    logout(){
        this.authenticated = false;
        localStorage.clear();
    }
    login(){
        const jwt = JSON.parse(localStorage.getItem('token'));
        let a;
        if(jwt){
            callAPI('login', "POST", {}, {
                'authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json'
            }).then((res)=>{
                console.log(res.data.msg);
                a = res.data.msg;
                return a;
            })
            console.log(a)
            return a;
        }
    }
}

export default new Authenticate();