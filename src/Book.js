import React from 'react'

export const Book = ({img, title, author}) => {
  

  const clickHandler = () =>{
    alert('hello world');
  };

  const complexExample = (author) =>{
    alert(author);
  };


  return (

    <article className ="book">
      <img src = {img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>click</button>
      <button type="button" onClick ={() =>complexExample(author)}>more example</button>
    </article>
  );
};


