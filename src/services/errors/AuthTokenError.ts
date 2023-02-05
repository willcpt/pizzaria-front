export class authTokenError extends Error{
    constructor(){
        super('Error com a autenticacao do tokenToString.')
    }
}