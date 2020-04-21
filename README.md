# fils-open-source-library

The package which contains all form elements from fils.

# Download

```npm i fils-open-source-library```

# Example use

```
import React from 'react';
import {Formik} from 'formik'
import {TextField, DateField, SubmitButton, RadioField, TermsField, SelectField} from 'fils-open-source-library'
import './App.css';

function App() {
  return (
    <div className="App">
      <Formik
      initialValues={{name: '', add: ''}}
      onSubmit = {values => {
        console.log(values)
      }}
      >
        {props => (
          <form onSubmit={props.handleSubmit} className='container'>
            <TextField
            label='textfield'
            name='name'/>
            <DateField
            label='datefield'
            name='add'/>
            
            <RadioField
            name='radio'
            label='Radio test'
            options={[
              ['0', 'yes'],
              ['1', 'no'],
              ['2', 'else']
            ]}
            />
            <TermsField name='Terms' options={[2, 3, 6, 12, 16]}/>
            <SelectField
                name='select'
                label='select'
                options={[['1', 'name'],['2', 'name2'], ['3', 'name3']]}
              />
            <SubmitButton type='submit'>submit</SubmitButton>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
```
# Available API
| Component    | props                                | Additional info                         |
|--------------|--------------------------------------|-----------------------------------------|
| TextField    | name, label, ...rest                 |                                         |
| RadioField   | name, label, options                 | options{[[value,name], [value1, name1]}  |
| SelectField  | name, label, blank, options, ...rest | options{[[value, key], [value1, key1]]} |
| SubmitButton | children, ...rest                    |                                         |
| TermsField   | name, options                        | options{[ 2, 3, 6, 12, 16 ]}             |
| MaskedField  | name, label, mask, ...rest           |                                         |
| FieldError   | name                                 |                                         |
| FormikErrors | errors                               |                                         |