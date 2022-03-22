const fs = require('fs');

// module.exports = function(name,address) {
//     const adr = adrlist;
//     adr[name] = address;
//     fs.writeFileSync('./deploy.js', JSON.stringify(adr), 'utf8',  console.error);
// }
module.exports = function(obj,address) {
    // const adr = adrlist;
    // adr[obj] = address;
    const dataStr = fs.readFileSync('./deploy.json', { encoding: 'utf8', flag: 'a+' }, console.error);
    const data = JSON.parse(dataStr || '{}');
    fs.writeFileSync('./deploy.json', JSON.stringify({ ...data, [obj]: address }), { encoding: 'utf8' },  console.error);
}
