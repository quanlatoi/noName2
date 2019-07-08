class Authenticate {
    constructor(){
        this.authenticated = true;
    }
    login(){
        this.authenticated = true;
    }
    logout(){
        this.authenticated = false;
        localStorage.clear();
    }
    isAuthenticated(){
        // console.log(this.authenticated)
        return this.authenticated;
    }
}

export default new Authenticate();