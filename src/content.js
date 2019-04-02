
export default  class content {
    constructor() {
        this.injectScript();
    }

    injectScript(){
        let script = document.createElement('script');
        script.src = chrome.extension.getURL('inject.js');
        (document.head||document.documentElement).appendChild(script);
        script.onload = () => script.remove();
    }
}
new content()
