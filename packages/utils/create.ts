const NAMESPACE = "st";

function _bem(
  prefix: string,
  block: string,
  element: string,
  modefier: string
) {
  let str = prefix;
  if (block) {
    str += `-${block}`;
  }
  if (element) {
    str += `__${element}`;
  }
  if (modefier) {
    str += `--${modefier}`;
  }
  return str;
}

function createBEM(prefix: string) {
  const b = (block: string) => _bem(prefix, block, "", "");
  const e = (element: string) => (element ? _bem(prefix, "", element, "") : "");
  const m = (modefier: string) =>
    modefier ? _bem(prefix, "", "", modefier) : "";

  const be = (block: string, element: string) =>
    _bem(prefix, block, element, "");
  const bm = (block: string, modefier: string) =>
    _bem(prefix, block, "", modefier);
  const em = (element: string, modefier: string) =>
    element && modefier ? _bem(prefix, "", element, modefier) : "";

  const bem = (block: string, element: string = "", modefier: string = "") =>
    block && element && modefier ? _bem(prefix, block, element, modefier) : "";

  const is = (name: string, state) => (state ? `is-${name}` : "");

  return { b, e, m, be, bm, em, bem, is };
}

function createNameSpace(name: string) {
  const prefix = `${NAMESPACE}-${name}`;
  return createBEM(prefix);
}

const bem = createNameSpace("icon");

console.log(bem.b('box'))
console.log(bem.e('box'))
console.log(bem.m('box'))