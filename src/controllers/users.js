const Reader = require('../models/reader');

const getReaders = (request, response) => {
  // Get all readers
 return Reader.find({})
  .then((data) => {
    response.status(200).send(data);
  })
  .catch(e => {
    response.status(500).send(e.message);
  });
};
const getReader = (request, response) => {
  const { reader_id } = request.params;
  return Reader.findById(reader_id)
  .then((user) => {
    response.status(200).send(user);
  })
  .catch(e => {
    response.status(500).send(e.message);
  });
  // response.send(`Reader with id: ${reader_id}`);
};

const createReader = (request, response) => {
  // Create new reader
  // response.status(201);
  // response.send(request.body);
  return Reader.create({...request.body})
  .then((user) => {
    response.status(201).send(user);
  })
  .catch(e => {
    response.status(500).send(e.message);
  });
};
const updateReader = (request, response) => {
  // Update reader
  const {reader_id} = request.params;
  const data = request.body;
 return Reader.findByIdAndUpdate(reader_id, data, {
    new: true,
    runValidators:true
  })
  .then((user) => {
    response.status(200).send(user);
  })
  .catch(e => {
    response.status(500).send(e.message);
  });
};
const deleteReader = (request, response) => {
  // Delete reader
  const {reader_id} = request.params;
return Reader.findByIdAndDelete(reader_id)
.then((user) => {
  response.status(200).send("Deleted");
})
.catch(e => {
  response.status(500).send(e.message);
});
}

module.exports = {
  getReaders,
  getReader,
  createReader,
  updateReader,
  deleteReader,
};
