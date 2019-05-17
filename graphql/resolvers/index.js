const itemResolver = {
  items: async () => {
    try {
      const items = [{ _id: "IJ98E0", upc: 890843 }];
      return items;
    } catch (err) {
      throw err;
    }
  }
};

const rootResolver = {
  ...itemResolver
};

module.exports = rootResolver;
