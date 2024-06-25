import {atom} from "recoil"
const orderPlacedAtom = atom({
    key: 'orderPlacedAtom', 
    default: null, // default value (aka initial value)
  });
export default orderPlacedAtom