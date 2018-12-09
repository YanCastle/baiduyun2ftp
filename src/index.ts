const FtpSrv: any = require('ftp-srv');
const ftpServer = new FtpSrv({})
ftpServer.on('login', (data, resolve, reject) => {

})