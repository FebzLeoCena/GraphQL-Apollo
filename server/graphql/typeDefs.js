import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Recipe {
    name: String
    description: String
    createdAt: String
    thumbsUp: Int
    thumbsDown: Int
  }
  input RecipeInput {
    name: String
    description: String
  }
  input EditRecipeInput {
    name: String
    description: String
  }
  type Query {
    recipe(ID: ID!): Recipe!
    getRecipes(amount: Int): [Recipe]
  }
  type Mutation {
    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(ID: ID!): Boolean
    editRecipe(ID: ID!, editRecipeInput: EditRecipeInput): Boolean
  }
`;
//Field Definitions(recipe(ID: ID!): Recipe! ): When you define fields in a GraphQL type, you can specify whether they can return null values or not. Adding an exclamation mark after a type indicates that the field is non-nullable, meaning it must always have a value and cannot be null. For example:recipe(ID: ID!): Recipe!: Here, ID! indicates that the ID argument for the recipe query must be a non-null ID, and Recipe! indicates that the return type of the recipe query must be a non-null Recipe.
//List Type(getRecipes(amount: Int): [Recipe]): In GraphQL, lists can contain multiple values of a specified type. Adding an exclamation mark after a list type indicates that the list itself cannot be null, but it can contain null values. For example:getRecipes(amount: Int): [Recipe]: Here, [Recipe] indicates that getRecipes returns a list of Recipe objects, which can be null. If you want to ensure that the list itself is never null, you would add an exclamation mark after the list type: [Recipe]!.
