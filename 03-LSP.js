function makeRequest(url, errorHandler) {
  fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      errorHandler.handle(error);
    });
}

//las subclases o sub funciones pueden ser asignadas a la funcion mayoe, llamadas

const consoleErrorHandler = {
  handle: function (error) {
    console.log(error);
  },
};

const externalErrorHandler = {
  handle: function (error) {
    sendErrorExternalService(error);
  },
};

makeRequest("https://my-api.com/data", consoleErrorHandler);
makeRequest("https://my-api.com/data", externalErrorHandler);
