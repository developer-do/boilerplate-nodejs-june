const axios = require("axios");

const getTestUsers = () => {
  // axios
  const users = Array(10)
    .fill(true)
    .map((x, y) => ({
      id: y,
      name: `user ${y}`,
    }));

  return {
    data: {
      result: 1,
      list: users,
    },
  };
};

module.exports = { getTestUsers };
