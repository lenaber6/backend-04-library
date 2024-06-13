const dotenv = require("dotenv");

dotenv.config();

const {
  PORT, 
  API_URL,
} = process.env;

const loggerReader = (request, response, next) => {
  const{reader_id} = request.params;
  //  reader.findById(reader_id);

    console.log(`Адрес данного читателя: ${API_URL}:${PORT}/readers/${reader_id}`);
    next();
}

module.exports = loggerReader;