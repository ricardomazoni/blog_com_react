import _ from 'lodash'
import { FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST } from '../actions'

export default function(state={}, action) {
    switch(action.type) {
        case DELETE_POST:
            /**
             * Esse método cria um objeto composto dos próprios caminhos de propriedade enumeráveis ​​herdados e objectque não são omitidos. 
             */
            return _.omit(state, action.payload)
        case FETCH_POSTS:
            // console.log(action.payload.data) // [post1, post2]
            return _.mapKeys(action.payload.data, 'id')
        case FETCH_POST:
            // pegamos todas as postagens que já buscamos e incluí-las aqui, iremos dizer ponto ponto ponto como assim.
            // Então, pegue todas as postagens existentes, tirá-los de todo        
            // esse objeto de estado e colocá-los neste novo objeto que estamos prestes a retornar.        
            // E então, em cima disso, vamos adicionar um novo
            /**
             * Forma antiga de se utilizar
             */
            // const post = action.payload.data
            // const newState = {...state}
            // newState[post.id] = post
            // return newState

            /**
             * direcionando o dado consultado para o action.payload.data.id
             */
            return {...state, [action.payload.data.id]: action.payload.data }


        default:
            return state
    }
}