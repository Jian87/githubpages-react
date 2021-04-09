import React from 'react'

export const Book = ({ img, title, author }) => {

  const complexExample = (author) => {
    alert(author);
  };


  return (

    <article className="book">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h4>{author}</h4>
      <button type="button" className="btn" onClick={() => complexExample(author)}>more details</button>
    </article>
  );
};


