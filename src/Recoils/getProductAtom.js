import {atom} from "recoil"
const getProductAtom = atom({
    key: 'getProductAtom', 
    default: null, // default value (aka initial value)
  });
export default getProductAtom