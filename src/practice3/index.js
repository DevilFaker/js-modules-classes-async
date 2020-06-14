export const getPoetry1 = async function () {
  const result = fetch("https://v1.jinrishici.com/all.json", {
    method: "GET",
    headers: {
      accept: "text/html",
    },
    credentials: "same-origin",
  })
    .then((response) => {
      return response.json();
    })
    .then((text) => {
      const re = [];
      re.push(text.origin);
      re.push(text.author);
      re.push(text.content);
      return re;
    })
    .catch((err) => console.log(err));

  return result;
};

export const getPoetry2 = function () {
  // eslint-disable-next-line consistent-return
  const promise = new Promise((resolve, reject) => {
    fetch("https://v1.jinrishici.com/all.json", {
      method: "GET",
      headers: {
        accept: "text/html",
      },
      credentials: "same-origin",
    })
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        const re = [];
        re.push(text.origin);
        re.push(text.author);
        re.push(text.content);
        resolve(re);
      })
      .catch((err) => reject(err));
  });
  return promise;
};
