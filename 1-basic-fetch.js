//the simplest fetch you can use and still have error handling
const url = 'https://jsonplaceholder.typicode.com/users';

export function getData() {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch!");
        return res.json();
      })
      .then(dataObj => {
        console.log(dataObj);
      })
      .catch(err => {
        console.warn(err);
      }) 

}

