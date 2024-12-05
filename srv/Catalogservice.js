const cds= require('@sap/cds') 

module.exports = (srv) => {
    const { Users } = cds.entities;

    srv.on('READ', 'Users', async (req, res) => {
        const users = await cds.run(SELECT.from(Users));
        return users;
    });

    // Alternatively, simply use:
    srv.on('READ', 'Users', (req) => SELECT.from(Users));
};