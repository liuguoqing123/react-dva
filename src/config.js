
const API ="/api-b";
const config = {
    name:"三维",
    prefix:"bim",
    footerText:"三维",
    logo:'logo.png',
    openPages: ['/'],
    apiPrefix: '/api',
    PAGE_SIZE: 10,
    PAGE :1,
    api:{
        getListData:`${API}/list`,
        saveData:`${API}/save`,
        deleteData:`${API}/delete`,
        batchDelete:`${API}/delete`,
        updateDate:`${API}/update`
    }
};

export default config;