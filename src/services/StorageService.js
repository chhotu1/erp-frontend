const StorageService ={
    setAccessToken:(value) =>{
        localStorage.setItem('AccessToken',value);
    },
    getAccessToken:() =>{
        return localStorage.getItem('AccessToken');
    },
    removeAccessToken:() =>{
        localStorage.removeItem('AccessToken');
    },
    setUserRole:(value) =>{
        localStorage.setItem('UserRole',value);
    },
    getUserRole:() =>{
        return localStorage.getItem('UserRole');
    },
    removeUserRole:() =>{
        localStorage.removeItem('UserRole');
    },

}

export default StorageService;