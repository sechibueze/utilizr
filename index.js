/*** Package Entry Point */

function sayHello(username) {
  return `Hello ${username || 'World'}`;
}
module.exports = {
  sayHello,
};
