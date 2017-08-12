import wp from './api'
const getTypes = async () => {
  let types = null;
  let get = async () => {
    return await wp.types();
  };
  if (types === null) {
    types = await get();
  }
  return types;
};
export default getTypes;
