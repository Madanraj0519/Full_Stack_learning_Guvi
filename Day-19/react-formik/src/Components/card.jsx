import React from "react";

function Cards({ book, onUpdate, onDelete }) {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px", minHeight: "320px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={book.website}
            className="img-fluid rounded-start"
            alt="Book Cover"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p
              className="card-text overflow-hidden"
              style={{ maxHeight: "3.6em" }}
            >
              {book.description}
            </p>
            <p className="card-text">
              <small className="text-muted">
                Published:{" "}
                {new Date(book.published).toLocaleDateString()}
              </small>
            </p>
            <p className="card-isbn-number">
            <small className="text-muted">
            ISBN.NO : {book.isbn}
              </small>
              
            </p>
            
            <div>
              <button
                className="btn btn-primary me-2"
                onClick={() => onUpdate(book.id)}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(book.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;