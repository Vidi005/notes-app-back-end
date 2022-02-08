const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler')

const routes = [
  // Tambah (CREATE)
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler
    // With Happy (CORS yang dipilih)
    // options: {
    //   cors: {
    //     origin: ['*']
    //   }
    // }
  },
  // Lihat Semua ListCatatan (READ)
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler
  },
  // Liat Detail (READ)
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler
  },
  // Edit Detail (UPDATE)
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler
  },
  // Delete Detail (DELETE)
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler
  }
]
module.exports = routes
