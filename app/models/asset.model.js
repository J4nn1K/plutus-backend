module.exports = (sequelize, Sequelize) => {
    const Asset = sequelize.define("asset", {
      name: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.FLOAT
      },
      institution: {
        type: Sequelize.STRING
      },
      portfolio: {
        type: Sequelize.STRING
      }
    });
    return Asset;
  };