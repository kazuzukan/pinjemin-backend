// const chai = require('chai');
// const expect = require('chai').expect;
// // const should = require('should');
// const chaiHttp = require('chai-http');
// const helpersUser = require('./helpers/user');


// chai.use(chaiHttp);
// const base_url = 'localhost:3000';
// // GET Users
// describe('Unit test GET /user ', () => {
//     it(' Verify status OK', async () => {
//         const res = await chai.request(base_url)
//             .get('/user')
//             expect(res).to.have.status('200');
//             expect(res.body.data).be.a('array');
//     });
//     it(' Verify response parameters', async () => {
//         const res = await chai.request(base_url)
//             .get('/user')
//             expect(res.body.data[0]).to.have.property('lastname');
//             expect(res.body.data[0]).to.have.property('firstname');
//             expect(res.body.data[0]).to.have.property('email');
//             expect(res.body.data[0]).to.have.property('phone');
//             expect(res.body.data[0]).to.have.property('address');
//             expect(res.body.data[0]).to.have.property('gender');
//     });
// });

// // GET one User
// describe(' Unit test GET /user/:id ', () => {
//     it(' Verify status OK', async () => {
//         const user = await helpersUser.createUser();
//         const res = await chai.request(base_url)
//             .get(`/user/${user.user.id}`);
//             expect(res).to.have.status('200');
//             // expect(res.body.data).be.a('array');
//     });
//     it(' Verify response parameters', async () => {
//         const res = await chai.request(base_url)
//             .get('/user')
//             expect(res.body.data[0]).to.have.property('lastname');
//             expect(res.body.data[0]).to.have.property('firstname');
//             expect(res.body.data[0]).to.have.property('email');
//             expect(res.body.data[0]).to.have.property('phone');
//             expect(res.body.data[0]).to.have.property('address');
//             expect(res.body.data[0]).to.have.property('gender');
//     });
// });

// //POST user
// describe(' Unit test POST /user ', () => {
//     it(' Verify status OK ', async () => {
//         const user = {
//             firstname: 'Testuser',
//             email: "testPost@test.com",
//             password: "12345"
//         };
//         const res = await chai.request(base_url)
//             .post('/user')
//             .send(user);
//             expect(res).to.have.status('200');
//             expect(res.body).to.have.status('Success');
//     })
// });

// // PUT user 
// describe(' Unit test PUT /user ', () => {
//     it(' Verify status OK ', async () => {
//         const user = {
//             firstname: 'TestuserUpdated',
//             email: "testPost@test.com",
//             password: "12345"
//         };
//         const userUpdate = await helpersUser.createUser(); 
//         const res = await chai.request(base_url)
//             .put(`/user/${userUpdate.user.id}`)
//             .send(user);
//             expect(res).to.have.status('200');
//             expect(res.body).to.have.status('Success');
//     })
// });

// // DELETE user
// describe(' Unit test DELETE /user ', () => {
//     it(' Verify status OK ', async () =>{
//         const userDelete = await helpersUser.createUser(); 
//         const res = await chai.request(base_url)
//             .delete(`/user/${userDelete.user.id}`)
//             expect(res).to.have.status('200');
//             expect(res.body).to.have.status('Success');
//     })
// });

// //GET user product
// describe(' Unit test GET /userproduct ', () => {
//     it(' Verify status OK ', async () =>{
//         const res = await chai.request(base_url)
//             .get(`/userproduct/1`)
//             expect(res).to.have.status('200');
//             expect(res.body).to.have.status('Success');
//     })
// });

// //GET user order
// describe(' Unit test GET /userorder ', () => {
//     it(' Verify status OK ', async () =>{
//         const res = await chai.request(base_url)
//             .get(`/userorder/1`)
//             expect(res).to.have.status('200');
//             expect(res.body).to.have.status('Success');
//     })
// });







