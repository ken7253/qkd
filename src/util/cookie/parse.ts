type CookieList = { [key: string]: string };

const parse = (rawCookie: string): CookieList => {
  const list = rawCookie.split(';');
  const nestedList = list.map((v) => v.split('='));
  const cookieList = Object.fromEntries(nestedList) as CookieList;

  return cookieList;
};

export default parse;
