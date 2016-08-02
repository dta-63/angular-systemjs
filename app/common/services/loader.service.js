/**
 * Service to lazy load files with module ocLazyLoad
 * Container module for the lazySystem service hosting our .load method. 
 * Runs System.import with the passed in source file and passes its response to $ocLazyLoad.load()
 */
class LazyLoader {

    constructor(ocLazyLoad){
        this.ocLazyLoad = ocLazyLoad;
    }

    load(src, key) {
        var loader = this.ocLazyLoad;
        return System.import(src).then(function (loadedFile) {
            return loader.load(loadedFile[key || 'default']);
        });
    }
}

LazyLoader.$inject = ['$ocLazyLoad'];

export default LazyLoader;
