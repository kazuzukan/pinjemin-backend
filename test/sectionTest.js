// const chai = require('chai');
// const expect = require('chai').expect;
// // const should = require('should');
// const chaiHttp = require('chai-http');
// const helpersSection = require('./helpers/section');


// chai.use(chaiHttp);
// const base_url = 'localhost:3000';
// // GET Product
// describe('Unit test GET /section ', () => {
//     it(' Verify status OK', async () => {
//         const res = await chai.request(base_url)
//             .get('/section')
//         expect(res).to.have.status('200');
//         expect(res.body.data).be.a('array');
//     });
//     it(' Verify response parameters', async () => {
//         const res = await chai.request(base_url)
//             .get('/section')
//         expect(res.body.data[0]).to.have.property('startDate');
//         expect(res.body.data[0]).to.have.property('endDate');
//         expect(res.body.data[0]).to.have.property('type');
//     });
// });

// // GET one Product
// describe(' Unit test GET /section/:id ', () => {
//     it(' Verify status OK', async () => {
//         const section = await helpersSection.createSection();
//         const res = await chai.request(base_url)
//             .get(`/section/${section.section.id}`);
//         expect(res).to.have.status('200');
//         expect(res.body.data).to.have.property('startDate');
//         expect(res.body.data).to.have.property('endDate');
//         expect(res.body.data).to.have.property('type');
//     });
// });

// //POST section
// describe(' Unit test POST /section ', () => {
//     it(' Verify status OK ', async () => {
//         const section = {
//             startDate: "2020-09-10 14:38:00.000",
//             endDate: "2020-09-10 14:38:00.000",
//             type: "0"
//         };
//         const res = await chai.request(base_url)
//             .post('/section')
//             .send(section);
//         expect(res).to.have.status('200');
//         expect(res.body).to.have.status('Success');
//     })
// });

// // PUT product
// describe(' Unit test PUT /section ', () => {
//     it(' Verify status OK ', async () => {
//         const section = {
//             startDate: "2020-09-10 14:38:00.000",
//             endDate: "2020-09-10 14:38:00.000",
//             type: "0"
//         };
//         const sectionUpdate = await helpersSection.createSection();
//         const res = await chai.request(base_url)
//             .put(`/section/${sectionUpdate.section.id}`)
//             .send(section);
//         expect(res).to.have.status('200');
//         expect(res.body).to.have.status('Success');
//     })
// });

// // DELETE product
// describe(' Unit test DELETE /section ', () => {
//     it(' Verify status OK ', async () => {
//         const sectionUpdate = await helpersSection.createSection();
//         const res = await chai.request(base_url)
//             .delete(`/section/${sectionUpdate.section.id}`)
//         expect(res).to.have.status('200');
//         expect(res.body).to.have.status('Success');
//     })
// });

// //GET produt section
// describe(' Unit test GET /product-section ', () => {
//     it(' Verify status OK ', async () => {
//         const res = await chai.request(base_url)
//             .get('/product-section')
//         expect(res).to.have.status('200');
//         expect(res.body).to.have.status('Success');
//         expect(res.body.data).be.a('array');
//     })
// });

// //GET produt section
// describe(' Unit test GET /offer-section ', () => {
//     it(' Verify status OK ', async () => {
//         const res = await chai.request(base_url)
//             .get('/offer-section')
//         expect(res).to.have.status('200');
//         expect(res.body).to.have.status('Success');
//         expect(res.body.data).be.a('array');
//     })
// });