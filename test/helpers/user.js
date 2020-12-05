const db = require('../../models');
const User = db.users;

module.exports = {
  createUser: async () => {
    const payload = {
      firstname: 'TestUser',
      email: 'testUser@gmail.com',
      password: 'secret'
    }
    let user = await User.findOne({
      where: { email: payload.email }
    });
    if (!user) {
      user = await User.create(payload);
      await user.save();
    }
    // const token = user.generateAuthToken(user);
    return { user };
  }
}