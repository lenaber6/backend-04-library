const Reader = require("../models/reader");
const readerSchema = require("../models/reader");

const getReaders = (request, response) => {
  // Get all readers
  // if (request.schema === readerSchema) {   // В такой логике некорректно отдаёт читателей/книги, которые на самом деле есть.
    return Reader.find({})
      .then((data) => {
        if (!data) { // Если результат вызова null, то возвращаем статус 404
          response.status(404).send("Читатели не найдены"); 
        }
        response.status(200).send(data);
      })
      .catch((e) => {
        response.status(500).send(e.message);
      });
  // } else {
  //   response.status(404).send("Читатели не найдены");
  // }
};

const getReader = (request, response) => {
  const { reader_id } = request.params;
    return Reader.findById(reader_id)
      .then((user) => {
        if(!user) {
          response.status(404).send("Читатель не найден");
        }
        response.status(200).send(user);
      })
      .catch((e) => {
        response.status(500).send(e.message);
      });
    // response.send(`Reader with id: ${reader_id}`);
};

const createReader = (request, response) => {
  // Create new reader
  // response.status(201);
  // response.send(request.body);
  return Reader.create({ ...request.body })
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const updateReader = (request, response) => {
  // Update reader
  const { reader_id } = request.params;
  const data = request.body;
    return Reader.findByIdAndUpdate(reader_id, data, {
      new: true,
      runValidators: true,
    })
      .then((user) => {
        if (!user) {
          response.status(404).send("Читатель не найден");
        }
        response.status(200).send(user);
      })
      .catch((e) => {
        response.status(500).send(e.message);
      });
};

const deleteReader = (request, response) => {
  // Delete reader
  const { reader_id } = request.params;
    return Reader.findByIdAndDelete(reader_id)
      .then((user) => {
        if (!user) {
          response.status(404).send("Читатель не найден");
        }
        response.status(200).send("Reader deleted");
      })
      .catch((e) => {
        response.status(500).send(e.message);
      });
};

module.exports = {
  getReaders,
  getReader,
  createReader,
  updateReader,
  deleteReader,
};
