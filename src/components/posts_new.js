import React, { Component } from 'react'
/**
 * Field - Conecta com o Formulario do Redux
 * reduxForm - comunica com Store
 */
import { Field, reduxForm } from 'redux-form'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '../actions'

class PostsNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field
        // const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger': ''}`
        const className = `form-group ${touched && error ? 'has-danger': ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className='form-control'
                    type='text'
                    {...field.input}
                                                />
                {/* <div className="form-error">{field.meta.error}</div>                 */}
                <div className='text-help'>
                    {touched ? error : ''}
                </div>    
                
            </div>
        )
    }

    onSubmit(values) {
        /**
         * redirecionando para tela inicial
         */
        // this.props.history.push('/')
        this.props.createPost(values, () => {
            this.props.history.push('/')
        })
        // console.log(values)
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
                <Link to='/' className='btn btn-danger'>Calcel</Link>
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
    form: 'PostsNewForm' //aqui não esta passsando para o novo form e identificando que essa exportação refere-se a um ID
})(
    connect(null, {createPost})(PostsNew)
)