import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();
// Blog Section

const Blog = () => {
    return (
        <div className='Blog text-center py-4'>
       <Pdf targetRef={ref}  filename="code-example.pdf">
        {({ toPdf }) =>
        <button className='bg-indigo-600 rounded-lg text-white text-center px-7 py-2' onClick={toPdf}>Download Pdf</button>}

      </Pdf>
        <div ref={ref} className='md:mx-20  bg-gray-300 mt-6 p-6 rounded-lg mx-4'>
            <h2 className='font-bold md:text-2xl mb-2 text-pink-600'>1. Tell us the differences between uncontrolled and controlled components.</h2>
            <p className='font-semibold mb-6'><span className='text-purple-500 font-bold'>Answer:</span> In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>

            <h2 className='font-bold md:text-2xl mb-2 text-pink-600'>2. How to validate React props using PropTypes</h2>
            <p className='font-semibold mb-6'><span className='text-purple-500 font-bold'>Answer:</span> To validate React props using PropTypes, you first need to import the PropTypes module from the prop-types package. Then, you can define the PropTypes for each of your component's props using PropTypes, where is the type of the prop you want to validate.</p>


            <h2 className='font-bold md:text-2xl mb-2 text-pink-600'>3. Tell us the difference between nodejs and express js.</h2>
            <p className='font-semibold mb-6'><span className='text-purple-500 font-bold'>Answer:</span> Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server-side. <br />

                Express.js is a web framework built on top of Node.js that provides a set of features and tools that make it easier to build web applications and APIs.</p>

            <h2 className='font-bold md:text-2xl mb-2 text-pink-600'>4. What is a custom hook, and why will you create a custom hook?</h2>
            <p className='font-semibold mb-6'><span className='text-purple-500 font-bold'>Answer:</span> A custom hook is a function in React that allows you to reuse stateful logic across multiple components. Custom hooks are a way to extract and share functionality that is common across different components, making it easier to write reusable and maintainable code. <br />
            You might create a custom hook to encapsulate logic that is shared across multiple components, such as fetching data from an API or managing a form's state..
            </p>
        </div>
        </div>
    );
};

export default Blog;