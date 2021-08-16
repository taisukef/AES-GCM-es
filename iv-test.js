import { AESGCM } from "./AESGCM.js";
import { sleep } from "https://js.sabae.cc/sleep.js";

const iv1 = AESGCM.createIV();
for (;;) {
  console.log(iv1);
  AESGCM.incrementIV(iv1);
  sleep(100);
}
