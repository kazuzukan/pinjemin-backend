const chai = require('chai');
const expect = require('chai').expect;
// const should = require('should');
const chaiHttp = require('chai-http');
const order = require('./helpers/order');
const helpersOrder = require('./helpers/order');


chai.use(chaiHttp);
const base_url = 'localhost:3000';
// GET Product
describe('Unit test GET /order ', () => {
    it(' Verify status OK', async () => {
        const res = await chai.request(base_url)
            .get('/order')
        expect(res).to.have.status('200');
        expect(res.body.data).be.a('array');
    });
    it(' Verify response parameters', async () => {
        const res = await chai.request(base_url)
            .get('/order')
        expect(res.body.data[0]).to.have.property('name');
        expect(res.body.data[0]).to.have.property('address');
        expect(res.body.data[0]).to.have.property('startDate');
        expect(res.body.data[0]).to.have.property('endDate');
        expect(res.body.data[0]).to.have.property('point');
        expect(res.body.data[0]).to.have.property('status');
    });
});

// GET one Product
describe(' Unit test GET /order/:id ', () => {
    it(' Verify status OK', async () => {
        const order = await helpersOrder.createOrder();
        const res = await chai.request(base_url)
            .get(`/order/${order.order.id}`);
        expect(res).to.have.status('200');
        expect(res.body.data).to.have.property('name');
        expect(res.body.data).to.have.property('address');
        expect(res.body.data).to.have.property('startDate');
        expect(res.body.data).to.have.property('endDate');
        expect(res.body.data).to.have.property('point');
        expect(res.body.data).to.have.property('status');
    });
});

//POST section
describe(' Unit test POST /order ', () => {
    it(' Verify status OK ', async () => {
        const order = {
            name: "nameTest",
            addres: "jalan kenangan",
            startDate: "2020-11-10 14:38:00.000",
            endDate: "2020-11-10 14:38:00.000",
            point: "9000",
            status: "Confirmed"
        };
        const res = await chai.request(base_url)
            .post('/order')
            .send(order);
        expect(res).to.have.status('200');
        expect(res.body).to.have.status('Success');
    })
});

// PUT product
describe(' Unit test PUT /order ', () => {
    it(' Verify status OK ', async () => {
        const section = {
            name: "nameTest",
            addres: "jalan kenangan",
            startDate: "2020-11-10 14:38:00.000",
            endDate: "2020-11-10 14:38:00.000",
            point: "9000",
            status: "Confirmed"
        };
        const orderUpdate = await helpersOrder.createOrder();
        const res = await chai.request(base_url)
            .put(`/order/${orderUpdate.order.id}`)
            .send(order);
        expect(res).to.have.status('200');
        expect(res.body).to.have.status('Success');
    })
});

// DELETE product
describe(' Unit test DELETE /order ', () => {
    it(' Verify status OK ', async () => {
        const orderUpdate = await helpersOrder.createOrder();
        const res = await chai.request(base_url)
            .delete(`/order/${orderUpdate.order.id}`)
        expect(res).to.have.status('200');
        expect(res.body).to.have.status('Success');
    })
});