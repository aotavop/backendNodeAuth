const table = 'user';

module.exports = (injectedStore) => {
  if (!injectedStore) injectedStore = require('../../../store/dummy');

  return {
    list: () => injectedStore.list(table),
    get: (id) => injectedStore.get(table, id),
  };
};
