const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
      me: User  
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!) Auth
        removeBook(bookId: Int!) User
    }

    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: Int!
        savedBooks: [Book]
    }

    type Book {
        bookId: ID!
        authors: [Strings]!
        description: String!
        title: String!
        image: 
        link: String!
    }

    type Auth {
        token: ID!
        user: User
    }
    `;

module.exports = typeDefs;