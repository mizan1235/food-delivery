import {atom} from "recoil"
const addressAtom = atom({
    key: 'addressAtom', 
    default: null, // default value (aka initial value)
  });
export default addressAtom