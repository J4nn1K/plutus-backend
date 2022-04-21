module.exports = (sequelize, Sequelize) => {
  const Key = sequelize.define("key", {
    name: {
      type: Sequelize.STRING
    },
    key: {
      type: Sequelize.TEXT
    }
  });
  return Key;
};