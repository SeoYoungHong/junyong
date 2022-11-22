// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, User, Dog, Cosmetic, IngredientVolum, Review, Ingredient, CosmeticIngredientCount, DCT, DCTGood, Enroll, Banner, DogCosmetic } = initSchema(schema);

export {
  Todo,
  User,
  Dog,
  Cosmetic,
  IngredientVolum,
  Review,
  Ingredient,
  CosmeticIngredientCount,
  DCT,
  DCTGood,
  Enroll,
  Banner,
  DogCosmetic
};