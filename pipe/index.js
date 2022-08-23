// index.ts
var apply1 = (a, fn) => fn(a);
var pipe = (a, ...fns) => fns.reduce(apply1, a);
export {
  apply1,
  pipe
};
//# sourceMappingURL=index.js.map