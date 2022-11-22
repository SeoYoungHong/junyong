import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CosmeticMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IngredientVolumMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReviewMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IngredientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CosmeticIngredientCountMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DCTMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DCTGoodMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EnrollMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BannerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DogCosmeticMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly pw: string;
  readonly sex?: string | null;
  readonly birth?: string | null;
  readonly dogs?: (Dog | null)[] | null;
  readonly reviews?: (Review | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Dog {
  readonly id: string;
  readonly user_id: string;
  readonly name: string;
  readonly cosmetics?: (DogCosmetic | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dog, DogMetaData>);
  static copyOf(source: Dog, mutator: (draft: MutableModel<Dog, DogMetaData>) => MutableModel<Dog, DogMetaData> | void): Dog;
}

export declare class Cosmetic {
  readonly id: string;
  readonly title?: string | null;
  readonly ingredient_ids?: (IngredientVolum | null)[] | null;
  readonly review?: (Review | null)[] | null;
  readonly dogs?: (DogCosmetic | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Cosmetic, CosmeticMetaData>);
  static copyOf(source: Cosmetic, mutator: (draft: MutableModel<Cosmetic, CosmeticMetaData>) => MutableModel<Cosmetic, CosmeticMetaData> | void): Cosmetic;
}

export declare class IngredientVolum {
  readonly id: string;
  readonly volume?: string | null;
  readonly scale?: string | null;
  readonly cosmetic_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<IngredientVolum, IngredientVolumMetaData>);
  static copyOf(source: IngredientVolum, mutator: (draft: MutableModel<IngredientVolum, IngredientVolumMetaData>) => MutableModel<IngredientVolum, IngredientVolumMetaData> | void): IngredientVolum;
}

export declare class Review {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly user_id: string;
  readonly cosmetic_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Review, ReviewMetaData>);
  static copyOf(source: Review, mutator: (draft: MutableModel<Review, ReviewMetaData>) => MutableModel<Review, ReviewMetaData> | void): Review;
}

export declare class Ingredient {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ingredient, IngredientMetaData>);
  static copyOf(source: Ingredient, mutator: (draft: MutableModel<Ingredient, IngredientMetaData>) => MutableModel<Ingredient, IngredientMetaData> | void): Ingredient;
}

export declare class CosmeticIngredientCount {
  readonly id: string;
  readonly cosmetic_id?: string | null;
  readonly Ingredient_id?: string | null;
  readonly count_info?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CosmeticIngredientCount, CosmeticIngredientCountMetaData>);
  static copyOf(source: CosmeticIngredientCount, mutator: (draft: MutableModel<CosmeticIngredientCount, CosmeticIngredientCountMetaData>) => MutableModel<CosmeticIngredientCount, CosmeticIngredientCountMetaData> | void): CosmeticIngredientCount;
}

export declare class DCT {
  readonly id: string;
  readonly title?: string | null;
  readonly contnet?: string | null;
  readonly good_id?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DCT, DCTMetaData>);
  static copyOf(source: DCT, mutator: (draft: MutableModel<DCT, DCTMetaData>) => MutableModel<DCT, DCTMetaData> | void): DCT;
}

export declare class DCTGood {
  readonly id: string;
  readonly content_id?: string | null;
  readonly like?: boolean | null;
  readonly trial?: boolean | null;
  readonly user_name?: string | null;
  readonly user_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DCTGood, DCTGoodMetaData>);
  static copyOf(source: DCTGood, mutator: (draft: MutableModel<DCTGood, DCTGoodMetaData>) => MutableModel<DCTGood, DCTGoodMetaData> | void): DCTGood;
}

export declare class Enroll {
  readonly id: string;
  readonly title?: string | null;
  readonly user_id?: string | null;
  readonly liek?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Enroll, EnrollMetaData>);
  static copyOf(source: Enroll, mutator: (draft: MutableModel<Enroll, EnrollMetaData>) => MutableModel<Enroll, EnrollMetaData> | void): Enroll;
}

export declare class Banner {
  readonly id: string;
  readonly title?: string | null;
  readonly img?: string | null;
  readonly link?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Banner, BannerMetaData>);
  static copyOf(source: Banner, mutator: (draft: MutableModel<Banner, BannerMetaData>) => MutableModel<Banner, BannerMetaData> | void): Banner;
}

export declare class DogCosmetic {
  readonly id: string;
  readonly dog: Dog;
  readonly cosmetic: Cosmetic;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DogCosmetic, DogCosmeticMetaData>);
  static copyOf(source: DogCosmetic, mutator: (draft: MutableModel<DogCosmetic, DogCosmeticMetaData>) => MutableModel<DogCosmetic, DogCosmeticMetaData> | void): DogCosmetic;
}