const DELAY = 1000

export const FAKE_API = {
  get: route => new Promise((resolve, reject) => {
    const data = JSON.parse(localStorage.getItem(route));
    setTimeout(() => resolve({ data }), DELAY);
  }),
  post: (route, item) => {
    const items = JSON.parse(localStorage.getItem(route)) || [];
    items.push(item);
    localStorage.setItem(route, JSON.stringify(items));
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ ok: true }), DELAY);
    })
  },
  put: (route, item) => {
    const items = JSON.parse(localStorage.getItem(route)) || [];
    const index = items.findIndex(({ id }) => id === item.id);
    items[index] = item;    
    localStorage.setItem(route, JSON.stringify(items));
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ ok: true }), DELAY);
    })
  },
  delete: (route, id) => {
    const items = JSON.parse(localStorage.getItem(route)) || [];
    localStorage.setItem(route, JSON.stringify(items.filter(item => item.id !== id)));
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ ok: true }), DELAY);
    })
  }
}