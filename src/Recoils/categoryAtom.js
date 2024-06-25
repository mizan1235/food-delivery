import {atom} from "recoil"
const categoryAtom = atom({
    key: 'categoryAtom', 
    default: "all", // default value (aka initial value)
  });
export default categoryAtom