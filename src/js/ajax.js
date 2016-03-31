class PokeApi {
    constructor () {
        console.log('[PokeApi] Constructor');
    }



    getList (url) {
        console.log(url);
        return new Promise(
            function(resolve, reject) {
                var i = 123;
                // This is only an example to create asynchronism
                window.setTimeout(
                    function() {
                        console.log('Timer 3000');
                        resolve(i);
                    }, 3000);
            }

        ); // promise
    }
}

export default new PokeApi();
