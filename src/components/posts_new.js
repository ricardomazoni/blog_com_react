import React, { Component } from 'react'
/**
 * Field - Conecta com o Formulario do Redux
 * reduxForm - comunica com Store
 */
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {

    renderField(field) {
        return (
            <div className='form-group'>
                <label>{field.label}</label>
                <input
                    className='form-control'
                    type='text'
                    {...field.input}
                />
                <div className="form-error">{field.meta.error}</div>                
            </div>
        )
    }

    onSubmit(values) {
        console.log(values)
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label='Title for Post'
                    name='title'
                    component={this.renderField}
                />
                <Field
                    label='Categories'
                    name='categories'
                    component={this.renderField}
                />
                <Field
                    label='Post Content'
                    name='content'
                    component={this.renderField}
                />
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>    
        )
    }
}

function validate(values) {
    // console.log(values) -> {title: 'asdf', categories: 'asdf', content: 'asdf'}
    const errors = {}

    // Valida valores de entrada
    if(!values.title) {
        errors.title = 'Enter a title'
    }
    if(!values.categories) {
        errors.categories = 'Enter a categories'
    }
    if(!values.content) {
        errors.content = 'Enter a content'
    }

    return errors
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew)