import axios from "axios";
axios
  .get(
    "https://api.unsplash.com/photos/?client_id=13ab8e477065cb9a6df56f89ad91cc9481238d694f26054c62acd40cb2f5fe3d"
  )
  .then(response => {
    this.items = response.data;
    console.log(response)
  })
  .catch(e => {
    this.erorrs.push(e);
  });
