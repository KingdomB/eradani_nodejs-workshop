const eradaniConnect = require('eradani-connect-node');

module.exports = new eradaniConnect.run.Sql('SELECT * FROM QIWS.QCUSTCDT WHERE BALDUE >= ?', {
    params: [{
        name: 'minBalDue'
    }]
});