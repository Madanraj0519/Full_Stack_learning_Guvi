import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BookData from './data';
import Cards from './card';

const Products = () => {
  const [books, setBooks] = useState(BookData.books);

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      description: '',
      isbn: '',
      published: '', 
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      author: Yup.string().required('Author is required'),
      description: Yup.string().required('Description is required'),
      isbn: Yup.string().required('ISBN is required'),
      published: Yup.string().required('Published date is required'), 
    }),
    onSubmit: (values, { resetForm }) => {
      const newBook = { ...values };
      setBooks([...books, newBook]);
      resetForm();
    },
  });

  const updateBook = (index, updatedBook) => {
    setBooks((prevBooks) => {
      const updatedBooks = [...prevBooks];
      updatedBooks[index] = updatedBook;
      return updatedBooks;
    });
  };

  const deleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <>
      <div>
        <h1>Books List</h1>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.title && formik.errors.title ? (
                <div>{formik.errors.title}</div>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                placeholder="Author"
                name="author"
                value={formik.values.author}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.author && formik.errors.author ? (
                <div>{formik.errors.author}</div>
              ) : null}
            </div>
            <div>
              <textarea
                placeholder="Description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched.description && formik.errors.description ? (
                <div>{formik.errors.description}</div>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                placeholder="ISBN"
                name="isbn"
                value={formik.values.isbn}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.isbn && formik.errors.isbn ? (
                <div>{formik.errors.isbn}</div>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                placeholder="Published Date"
                name="published"
                value={formik.values.published}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.published && formik.errors.published ? (
                <div>{formik.errors.published}</div>
              ) : null}
            </div>
            <button type="submit">Add Book</button>
          </form>
        </div>

        <div className="container mt-5">
          <h1 className="mb-4">Books List</h1>
          <div className="row">
            {books.map((book, index) => (
              <div key={index} className="col-md-4 col-lg-3 col-sm-12 mb-3">
                <Cards
                  book={book}
                  onUpdate={(updatedBook) => updateBook(index, updatedBook)}
                  onDelete={() => deleteBook(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;