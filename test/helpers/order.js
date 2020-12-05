const db = require('../../models');
const Order = db.order;

module.exports = {
  createOrder: async () => {
    const payload = {
        name: "nameTest",
        addres: "jalan kenangan",
        startDate: "2020-11-10 14:38:00.000",
        endDate: "2020-11-10 14:38:00.000",
        point: "9000",
        status: "Confirmed"
    }
    let order = await Order.findOne({
      where: { name: payload.name }
    });
    if (!order) {
      order = await Order.create(payload);
      await order.save();
    }
    // const token = user.generateAuthToken(user);
    return { order };
  }
}