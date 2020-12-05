// const chai = require('chai');
// const expect = require('chai').expect;
// // const should = require('should');
// const chaiHttp = require('chai-http');
// const helpersProduct = require('./helpers/product');


// chai.use(chaiHttp);
// const base_url = 'localhost:3000';
// // GET Product
// describe('Unit test GET /product ', () => {
//     it(' Verify status OK', async () => {
//         const res = await chai.request(base_url)
//             .get('/product')
//         expect(res).to.have.status('200');
//         expect(res.body.data).be.a('array');
//     });
//     it(' Verify response parameters', async () => {
//         const res = await chai.request(base_url)
//             .get('/product')
//             expect(res.body.data[0]).to.have.property('name');
//             expect(res.body.data[0]).to.have.property('desc');
//             expect(res.body.data[0]).to.have.property('method');
//             expect(res.body.data[0]).to.have.property('price');
//             expect(res.body.data[0]).to.have.property('duration');
//             expect(res.body.data[0]).to.have.property('image');
//     });
// });

// // GET one Product
// describe(' Unit test GET /product/:id ', () => {
//     it(' Verify status OK', async () => {
//         const product = await helpersProduct.createProduct();
//         const res = await chai.request(base_url)
//             .get(`/product/${product.product.id}`);
//             expect(res).to.have.status('200');
//             // expect(res.body.data).be.a('array');
//             expect(res.body.data).to.have.property('name');
//             expect(res.body.data).to.have.property('desc');
//             expect(res.body.data).to.have.property('method');
//             expect(res.body.data).to.have.property('price');
//             expect(res.body.data).to.have.property('duration');
//             expect(res.body.data).to.have.property('image');
//     });
// });

// //POST product
// describe(' Unit test POST /product ', () => {
//     it(' Verify status OK ', async () => {
//         const product = {
//             name: 'testbuku',
//             desc: "testDesc",
//             method: "Point"
//         };
//         const res = await chai.request(base_url)
//             .post('/product')
//             .send(product);
//             expect(res).to.have.status('200');
//             expect(res.body).to.have.status('Success');
//     })
// });

// // PUT product
// describe(' Unit test PUT /product ', () => {
//     it(' Verify status OK ', async () => {
//         const product = {
//             name: 'testbuku',
//             desc: "testDesc",
//             method: "Point"
//         };
//         const productUpdate = await helpersProduct.createProduct();
//         const res = await chai.request(base_url)
//             .put(`/product/${productUpdate.product.id}`)
//             .send(product);
//             expect(res).to.have.status('200');
//             expect(res.body).to.have.status('Success');
//     })
// });

// // DELETE product
// describe(' Unit test DELETE /product ', () => {
//     it(' Verify status OK ', async () =>{
//         const productDelete = await helpersProduct.createProduct(); 
//         const res = await chai.request(base_url)
//             .delete(`/product/${productDelete.product.id}`)
//             expect(res).to.have.status('200');
//             expect(res.body).to.have.status('Success');
//     })
// });

// //GET user product
// describe(' Unit test GET /product-section ', () => {
//     it(' Verify status OK ', async () =>{
//         const res = await chai.request(base_url)
//             .get(`/product-section`)
//             expect(res).to.have.status('200');
//             expect(res.body).to.have.status('Success');
//             expect(res.body.data).be.a('array');
//     })
// });







