const eradaniConnect = require('eradani-connect-node');

module.exports = new eradaniConnect.run.Pgm('LINUX_CALC', {
    lib: 'WORKSHOP',
    params: [{
        name: 'IBMICORES',
        type: new eradaniConnect.dataTypes.PackedDecimal(15, 0)
    }, {
        name: 'LINUXSERVERS',
        type: new eradaniConnect.dataTypes.PackedDecimal(16, 0),
        defaultValue: 0
    }]
});