import {atom} from "recoil"
const userLoginAtom = atom({
    key: 'userLoginAtom', 
    default: null, // default value (aka initial value)
  });
export default userLoginAtom