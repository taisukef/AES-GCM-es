import { AESGCM } from "./AESGCM.js";

const someBytes = new TextEncoder().encode("hello!!");

const key = new Uint8Array(32);
for (let i = 0; i < key.length; i++) {
  key[i] = i * 2;
}

const iv = AESGCM.createIV();
console.log(iv);
{
  const [data, tag] = AESGCM.encrypt(key, iv, someBytes);
  console.log(data);

  const dec = AESGCM.decrypt(key, iv, data, tag);
  console.log(new TextDecoder().decode(dec));
}
AESGCM.incrementIV(iv); // must not use iv again
console.log(iv);
{
  const [data, tag] = AESGCM.encrypt(key, iv, someBytes);
  console.log(data);

  const dec = AESGCM.decrypt(key, iv, data, tag);
  console.log(new TextDecoder().decode(dec));
}

// generate a random key and IV
// Note: a key size of 16 bytes will use AES-128, 24 => AES-192, 32 => AES-256

/*
import { sleep } from "https://js.sabae.cc/sleep.js";

const iv1 = AESGCM.createIV();
for (;;) {
  console.log(iv1);
  AESGCM.incrementIV(iv1);
  sleep(100);
}
*/
