const { customAlphabet } = require('nanoid');
const alphabet =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 12);

export function generateId() {
  return nanoid();
}
