const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports.getMyIP = async ()=>{
    const x = await fetch("https://ipinfo.io/ip")
    return await x.text()
}