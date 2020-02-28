import React from "react";

const Imagen = ({ imagen }) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagen;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top"></img>
      </div>
      <div className="card-body row">
        <p className="card-text text-left">
          {likes}
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABEElEQVRIie2Vv0rDUBSHP6JZDBScrF2KT2ApFh3qu4gv0LG0k+Cz+AS2D9AugiB0FjLp0jS2SxYRqkPuLcnl5uYPN+CQD37Lycn5TrghgYb/zpHh2jFwBfSAUyAA9kqPq/SsNT1GwQT4An4TCUXdFZmKmtozznmAw4Yz5WY1cxFTz7NYOJPHnAFl8pAl8YDIoigCTuRwJyG6FTJbeMBQJzqzKJG0daJNDaJAJ3qvQZQ5c4W9l+HNtMG9RdGdSeQArxYkL6SPRUuX+BCrSkLgIk8iuQZ2FSRbYFBUIukDnyUkH8BlWYmkAywLSBbAeVWJxAFGwLdG8EP88cz9LZThBvATEl/UaqEFPIm06pI0pPgDeQbEn4Xbo90AAAAASUVORK5CYII=" />
        </p>
        &nbsp; &nbsp;
        <p className="card-text text-rigth">
          {views}
          <img src="https://img.icons8.com/metro/26/000000/visible.png" />
        </p>
      </div>
      <div className="card-footer">
        <a
          href={largeImageURL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark btn-block "
        >
          Ver Imagen
        </a>
      </div>
    </div>
  );
};

export default Imagen;
