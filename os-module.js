//os module
const os = require('os');
// os.uptime

const user = os.userInfo();
console.log(user)

console.log(os.uptime());

const current = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
};
console.log(current);