/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      pw
      sex
      birth
      dogs {
        items {
          user_id
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      reviews {
        items {
          id
          title
          content
          user_id
          cosmetic_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      pw
      sex
      birth
      dogs {
        items {
          user_id
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      reviews {
        items {
          id
          title
          content
          user_id
          cosmetic_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      pw
      sex
      birth
      dogs {
        items {
          user_id
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      reviews {
        items {
          id
          title
          content
          user_id
          cosmetic_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createDog = /* GraphQL */ `
  mutation CreateDog(
    $input: CreateDogInput!
    $condition: ModelDogConditionInput
  ) {
    createDog(input: $input, condition: $condition) {
      user_id
      id
      name
      cosmetics {
        items {
          id
          dogID
          cosmeticID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateDog = /* GraphQL */ `
  mutation UpdateDog(
    $input: UpdateDogInput!
    $condition: ModelDogConditionInput
  ) {
    updateDog(input: $input, condition: $condition) {
      user_id
      id
      name
      cosmetics {
        items {
          id
          dogID
          cosmeticID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteDog = /* GraphQL */ `
  mutation DeleteDog(
    $input: DeleteDogInput!
    $condition: ModelDogConditionInput
  ) {
    deleteDog(input: $input, condition: $condition) {
      user_id
      id
      name
      cosmetics {
        items {
          id
          dogID
          cosmeticID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createCosmetic = /* GraphQL */ `
  mutation CreateCosmetic(
    $input: CreateCosmeticInput!
    $condition: ModelCosmeticConditionInput
  ) {
    createCosmetic(input: $input, condition: $condition) {
      id
      title
      ingredient_ids {
        items {
          id
          volume
          scale
          cosmetic_id
          ingredient_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      reviews {
        items {
          id
          title
          content
          user_id
          cosmetic_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      dogs {
        items {
          id
          dogID
          cosmeticID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      ingredients {
        items {
          id
          cosmeticID
          ingredientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateCosmetic = /* GraphQL */ `
  mutation UpdateCosmetic(
    $input: UpdateCosmeticInput!
    $condition: ModelCosmeticConditionInput
  ) {
    updateCosmetic(input: $input, condition: $condition) {
      id
      title
      ingredient_ids {
        items {
          id
          volume
          scale
          cosmetic_id
          ingredient_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      reviews {
        items {
          id
          title
          content
          user_id
          cosmetic_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      dogs {
        items {
          id
          dogID
          cosmeticID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      ingredients {
        items {
          id
          cosmeticID
          ingredientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteCosmetic = /* GraphQL */ `
  mutation DeleteCosmetic(
    $input: DeleteCosmeticInput!
    $condition: ModelCosmeticConditionInput
  ) {
    deleteCosmetic(input: $input, condition: $condition) {
      id
      title
      ingredient_ids {
        items {
          id
          volume
          scale
          cosmetic_id
          ingredient_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      reviews {
        items {
          id
          title
          content
          user_id
          cosmetic_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      dogs {
        items {
          id
          dogID
          cosmeticID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      ingredients {
        items {
          id
          cosmeticID
          ingredientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      title
      content
      user_id
      cosmetic_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      title
      content
      user_id
      cosmetic_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      title
      content
      user_id
      cosmetic_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createIngredientVolum = /* GraphQL */ `
  mutation CreateIngredientVolum(
    $input: CreateIngredientVolumInput!
    $condition: ModelIngredientVolumConditionInput
  ) {
    createIngredientVolum(input: $input, condition: $condition) {
      id
      volume
      scale
      cosmetic_id
      ingredient_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateIngredientVolum = /* GraphQL */ `
  mutation UpdateIngredientVolum(
    $input: UpdateIngredientVolumInput!
    $condition: ModelIngredientVolumConditionInput
  ) {
    updateIngredientVolum(input: $input, condition: $condition) {
      id
      volume
      scale
      cosmetic_id
      ingredient_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteIngredientVolum = /* GraphQL */ `
  mutation DeleteIngredientVolum(
    $input: DeleteIngredientVolumInput!
    $condition: ModelIngredientVolumConditionInput
  ) {
    deleteIngredientVolum(input: $input, condition: $condition) {
      id
      volume
      scale
      cosmetic_id
      ingredient_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
      id
      name
      cosmetics {
        items {
          id
          cosmeticID
          ingredientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
      id
      name
      cosmetics {
        items {
          id
          cosmeticID
          ingredientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
      id
      name
      cosmetics {
        items {
          id
          cosmeticID
          ingredientID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createCosmeticIngredientCount = /* GraphQL */ `
  mutation CreateCosmeticIngredientCount(
    $input: CreateCosmeticIngredientCountInput!
    $condition: ModelCosmeticIngredientCountConditionInput
  ) {
    createCosmeticIngredientCount(input: $input, condition: $condition) {
      id
      cosmetic_id
      Ingredient_id
      count_info
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateCosmeticIngredientCount = /* GraphQL */ `
  mutation UpdateCosmeticIngredientCount(
    $input: UpdateCosmeticIngredientCountInput!
    $condition: ModelCosmeticIngredientCountConditionInput
  ) {
    updateCosmeticIngredientCount(input: $input, condition: $condition) {
      id
      cosmetic_id
      Ingredient_id
      count_info
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteCosmeticIngredientCount = /* GraphQL */ `
  mutation DeleteCosmeticIngredientCount(
    $input: DeleteCosmeticIngredientCountInput!
    $condition: ModelCosmeticIngredientCountConditionInput
  ) {
    deleteCosmeticIngredientCount(input: $input, condition: $condition) {
      id
      cosmetic_id
      Ingredient_id
      count_info
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createDCT = /* GraphQL */ `
  mutation CreateDCT(
    $input: CreateDCTInput!
    $condition: ModelDCTConditionInput
  ) {
    createDCT(input: $input, condition: $condition) {
      id
      title
      contnet
      good_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateDCT = /* GraphQL */ `
  mutation UpdateDCT(
    $input: UpdateDCTInput!
    $condition: ModelDCTConditionInput
  ) {
    updateDCT(input: $input, condition: $condition) {
      id
      title
      contnet
      good_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteDCT = /* GraphQL */ `
  mutation DeleteDCT(
    $input: DeleteDCTInput!
    $condition: ModelDCTConditionInput
  ) {
    deleteDCT(input: $input, condition: $condition) {
      id
      title
      contnet
      good_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createDCTGood = /* GraphQL */ `
  mutation CreateDCTGood(
    $input: CreateDCTGoodInput!
    $condition: ModelDCTGoodConditionInput
  ) {
    createDCTGood(input: $input, condition: $condition) {
      id
      content_id
      like
      trial
      user_name
      user_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateDCTGood = /* GraphQL */ `
  mutation UpdateDCTGood(
    $input: UpdateDCTGoodInput!
    $condition: ModelDCTGoodConditionInput
  ) {
    updateDCTGood(input: $input, condition: $condition) {
      id
      content_id
      like
      trial
      user_name
      user_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteDCTGood = /* GraphQL */ `
  mutation DeleteDCTGood(
    $input: DeleteDCTGoodInput!
    $condition: ModelDCTGoodConditionInput
  ) {
    deleteDCTGood(input: $input, condition: $condition) {
      id
      content_id
      like
      trial
      user_name
      user_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createEnroll = /* GraphQL */ `
  mutation CreateEnroll(
    $input: CreateEnrollInput!
    $condition: ModelEnrollConditionInput
  ) {
    createEnroll(input: $input, condition: $condition) {
      id
      title
      user_id
      liek
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateEnroll = /* GraphQL */ `
  mutation UpdateEnroll(
    $input: UpdateEnrollInput!
    $condition: ModelEnrollConditionInput
  ) {
    updateEnroll(input: $input, condition: $condition) {
      id
      title
      user_id
      liek
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteEnroll = /* GraphQL */ `
  mutation DeleteEnroll(
    $input: DeleteEnrollInput!
    $condition: ModelEnrollConditionInput
  ) {
    deleteEnroll(input: $input, condition: $condition) {
      id
      title
      user_id
      liek
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createBanner = /* GraphQL */ `
  mutation CreateBanner(
    $input: CreateBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    createBanner(input: $input, condition: $condition) {
      id
      title
      img
      link
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateBanner = /* GraphQL */ `
  mutation UpdateBanner(
    $input: UpdateBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    updateBanner(input: $input, condition: $condition) {
      id
      title
      img
      link
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteBanner = /* GraphQL */ `
  mutation DeleteBanner(
    $input: DeleteBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    deleteBanner(input: $input, condition: $condition) {
      id
      title
      img
      link
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createDogCosmetic = /* GraphQL */ `
  mutation CreateDogCosmetic(
    $input: CreateDogCosmeticInput!
    $condition: ModelDogCosmeticConditionInput
  ) {
    createDogCosmetic(input: $input, condition: $condition) {
      id
      dogID
      cosmeticID
      dog {
        user_id
        id
        name
        cosmetics {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      cosmetic {
        id
        title
        ingredient_ids {
          nextToken
          startedAt
        }
        reviews {
          nextToken
          startedAt
        }
        dogs {
          nextToken
          startedAt
        }
        ingredients {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateDogCosmetic = /* GraphQL */ `
  mutation UpdateDogCosmetic(
    $input: UpdateDogCosmeticInput!
    $condition: ModelDogCosmeticConditionInput
  ) {
    updateDogCosmetic(input: $input, condition: $condition) {
      id
      dogID
      cosmeticID
      dog {
        user_id
        id
        name
        cosmetics {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      cosmetic {
        id
        title
        ingredient_ids {
          nextToken
          startedAt
        }
        reviews {
          nextToken
          startedAt
        }
        dogs {
          nextToken
          startedAt
        }
        ingredients {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteDogCosmetic = /* GraphQL */ `
  mutation DeleteDogCosmetic(
    $input: DeleteDogCosmeticInput!
    $condition: ModelDogCosmeticConditionInput
  ) {
    deleteDogCosmetic(input: $input, condition: $condition) {
      id
      dogID
      cosmeticID
      dog {
        user_id
        id
        name
        cosmetics {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      cosmetic {
        id
        title
        ingredient_ids {
          nextToken
          startedAt
        }
        reviews {
          nextToken
          startedAt
        }
        dogs {
          nextToken
          startedAt
        }
        ingredients {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createIngredientCosmetic = /* GraphQL */ `
  mutation CreateIngredientCosmetic(
    $input: CreateIngredientCosmeticInput!
    $condition: ModelIngredientCosmeticConditionInput
  ) {
    createIngredientCosmetic(input: $input, condition: $condition) {
      id
      cosmeticID
      ingredientID
      cosmetic {
        id
        title
        ingredient_ids {
          nextToken
          startedAt
        }
        reviews {
          nextToken
          startedAt
        }
        dogs {
          nextToken
          startedAt
        }
        ingredients {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      ingredient {
        id
        name
        cosmetics {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateIngredientCosmetic = /* GraphQL */ `
  mutation UpdateIngredientCosmetic(
    $input: UpdateIngredientCosmeticInput!
    $condition: ModelIngredientCosmeticConditionInput
  ) {
    updateIngredientCosmetic(input: $input, condition: $condition) {
      id
      cosmeticID
      ingredientID
      cosmetic {
        id
        title
        ingredient_ids {
          nextToken
          startedAt
        }
        reviews {
          nextToken
          startedAt
        }
        dogs {
          nextToken
          startedAt
        }
        ingredients {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      ingredient {
        id
        name
        cosmetics {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteIngredientCosmetic = /* GraphQL */ `
  mutation DeleteIngredientCosmetic(
    $input: DeleteIngredientCosmeticInput!
    $condition: ModelIngredientCosmeticConditionInput
  ) {
    deleteIngredientCosmetic(input: $input, condition: $condition) {
      id
      cosmeticID
      ingredientID
      cosmetic {
        id
        title
        ingredient_ids {
          nextToken
          startedAt
        }
        reviews {
          nextToken
          startedAt
        }
        dogs {
          nextToken
          startedAt
        }
        ingredients {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      ingredient {
        id
        name
        cosmetics {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
