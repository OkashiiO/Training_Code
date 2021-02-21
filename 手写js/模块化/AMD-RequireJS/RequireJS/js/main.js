(function(){

    requirejs.config({
        // baseUrl:'js/lib',//基本路径
        paths :{
            //dataService: './modules/dataService',
            alerter: './modules/alerter'
        }
    })

    requirejs(['alerter'],function(alerter){
        alerter.showMsg();
    })
    console.log('kjyfh');
})