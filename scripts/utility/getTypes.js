import wp from './api'
const getTypes = async () => {
  //cache data.
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
