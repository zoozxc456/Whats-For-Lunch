class LogoutService {

    checkLocalStorageIsEmpty=()=>{
        return localStorage.length<=0;
    }

    logout = () => {
       localStorage.clear();
       console.log(this.checkLocalStorageIsEmpty()?'isEmpty':'not Empty');
       return this.checkLocalStorageIsEmpty();
    }

}

export default new LogoutService();