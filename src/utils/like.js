import { KEY_LIKES, getLocalStorage } from "./localStorage";

/* -------------------- UTILS -------------------- */

const START_LIKES = 7;

const didItLike = () => getLocalStorage(KEY_LIKES) == 1;

const didItDislike = () => getLocalStorage(KEY_LIKES) == -1;

export { START_LIKES, didItLike, didItDislike };
