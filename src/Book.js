import React from 'react'

const Book = (props) => {
  // console.log(props);
  // const {book: {imgPath, title, autor} } = props;
  const { imgPath, title, autor } = props;

  const onClick = (params) => {
    console.log(params);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        onClick(autor);
      }}
    >
      <img src={imgPath} alt={title} />
      <h1>{title}</h1>
      <h4>{autor}</h4>
      <button
        type="button"
        onClick={() => {
          console.log(title);
        }}
      >
        exsample btn
      </button>
      <button
        type="button"
        onClick={() => {
          onClick(autor);
        }}
      >
        exsample btn
      </button>
    </article>
  );
};

export default Book
