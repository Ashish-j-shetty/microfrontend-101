import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

/**
 * ? Context / Situation 1 :
 * ? while running the app in insolution we are running the local index.html file so we want to to run it in ELEMENT with id "dev-products".
 * ? WE WANT TO IMMEDIATELY RENDER THAT APP INTO THAT ELEMENT
 */

if (process.env.NODE_ENV === "development") {
  //? if the app is running isolation : assumption the container doesnt not have the element with this id.

  const el = document.querySelector("#dev-products");

  if (el) {
    //? passing this if means we are probably running in isolation.
    mount(el);
  }
}

//document.querySelector("#dev-products").innerHTML = products; //? NOW USING MOUNT INSTED OF THIS.

/**
 * ? Context / Situation 2 :
 * ? while running the app in DEVELOPMENT or  PRODUCTION MODE  thourgh CONTAINER APP.
 * ? there is no gaurantee that the element with id "dev-products" be present in the container app.
 * ? WE DO NOT WANT  TO IMMEDIATELY RENDER THE APP.
 */

export { mount };
