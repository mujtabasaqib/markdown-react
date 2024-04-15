import React from 'react';
import './App.css';
import {marked} from 'marked';
import DOMPurify from 'dompurify';
import 'bootstrap/dist/css/bootstrap.min.css';

const introText = `
# Welcome to My Markdown Preview

This document showcases Markdown elements for HTML rendering:

## Sub Heading

**Bolded** text.

### Link and Inline Code

[Markdown Guide](https://www.markdownguide.org/) and \`inline code\`.

### Code Block

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")
\`\`\`

### List Item

- Item 1
- Item 2
- Item 3

### Blockquote

> Markdown is a lightweight markup language with plain-text formatting syntax.

Explore Markdown syntax and its HTML output!
`;

class App extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      userInput: introText
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      userInput: event.target.value
    })
  }

  render(){

  return (
    <div id="wrapper">
      <div id="edit-container" className='shadow'>
        <textarea id="editor" value={this.state.userInput} 
      onChange={this.handleChange} className=''></textarea>
      </div>
      <div id="preview" className='shadow'>
        <div id="prev-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(this.state.userInput))}}/>
      </div>
    </div>
  );
  }
}

export default App;