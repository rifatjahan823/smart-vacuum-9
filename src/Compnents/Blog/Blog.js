import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container mt-5'>
 <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>what is context api?</Accordion.Header>
    <Accordion.Body>
      React context API allows each component of React to use data without manual props.
      It generally creates a global variable that goes through the React app.The advantage here is that you can work without using any extra middle component.It keeps it in the store and then acts as a parent where it needs to be use.It works using Usestate 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>what is semantic tag?</Accordion.Header>
    <Accordion.Body>
    Semantic tags clearly describe the subject matter.This means that semantic tags make it easier to understand the subject matter of a webpage's tag.Some other examples of semantic tags are: section,Article,Nav,aside,Footer.... It is easy to see which one is for which work.Semantic tags make search engines quick and easy to find information.The semantic tag serves as the title of the documentation.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>what's the difference between block and inline and inline block?</Accordion.Header>
    <Accordion.Body>
    Inlline:
   <p> 1.The inline element does not block the whole space, it takes up as much space as it needs</p>
   <p>2.Example of some inlline element:strong,em,b,i ,q,mark</p>
    Inline-block:
    <p>1.Inline-block works similar to inline element but it can set width height.</p>
    <p>2. inline-block more suitable for creating layouts</p>
    Block:
    <p>1.The block element always starts from the new line. It blogs the whole place.</p>
    <p>2.Example some of block element:p,ul,ol,hr </p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Blog;