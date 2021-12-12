const myModule = require("@ca-priv-repo-01/private-npm-package");

(async()=>{
    console.log(await myModule.getMyIP())
})();