class Authenticate {
    constructor(){
        this.authenticated = true;
    }
    login(){
        this.authenticated = true;
    }
    logout(){
        this.authenticated = false;
        // this.isAuthenticated();
    }
    isAuthenticated(){
        // console.log(this.authenticated)
        return this.authenticated;
    }
}

export default new Authenticate();