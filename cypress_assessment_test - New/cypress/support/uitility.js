module.exports = {
  getBaseUrl: function (environment) {
    if (environment == "staging") {
      return "https://rafat.demo.onsinch.com/";
    } else if (environment == "prod") {
      return "https://petstore.octoperf.com/actions/Catalog.action";
    } else {
      return "https://www.saucedemo.com/";
    }
  },
};
