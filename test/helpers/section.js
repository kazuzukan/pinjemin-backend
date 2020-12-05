const db = require('../../models');
const Section = db.section;

module.exports = {
  createSection: async () => {
    const payload = {
        startDate: "2020-11-10 14:38:00.000",
        endDate: "2020-11-10 14:38:00.000",
        type: "1"
    }
    let section = await Section.findOne({
      where: { startDate: "2020-11-10 14:38:00.000"}
    });
    if (!section) {
      section = await Section.create(payload);
      await section.save();
    }
    return { section };
  }
}