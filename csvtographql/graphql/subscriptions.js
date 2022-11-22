/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String) {
    onCreateTodo(owner: $owner) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String) {
    onUpdateTodo(owner: $owner) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String) {
    onDeleteTodo(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateDog = /* GraphQL */ `
  subscription OnCreateDog($owner: String) {
    onCreateDog(owner: $owner) {
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
export const onUpdateDog = /* GraphQL */ `
  subscription OnUpdateDog($owner: String) {
    onUpdateDog(owner: $owner) {
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
export const onDeleteDog = /* GraphQL */ `
  subscription OnDeleteDog($owner: String) {
    onDeleteDog(owner: $owner) {
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
export const onCreateCosmetic = /* GraphQL */ `
  subscription OnCreateCosmetic($owner: String) {
    onCreateCosmetic(owner: $owner) {
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
export const onUpdateCosmetic = /* GraphQL */ `
  subscription OnUpdateCosmetic($owner: String) {
    onUpdateCosmetic(owner: $owner) {
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
export const onDeleteCosmetic = /* GraphQL */ `
  subscription OnDeleteCosmetic($owner: String) {
    onDeleteCosmetic(owner: $owner) {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($owner: String) {
    onCreateReview(owner: $owner) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($owner: String) {
    onUpdateReview(owner: $owner) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($owner: String) {
    onDeleteReview(owner: $owner) {
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
export const onCreateIngredientVolum = /* GraphQL */ `
  subscription OnCreateIngredientVolum($owner: String) {
    onCreateIngredientVolum(owner: $owner) {
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
export const onUpdateIngredientVolum = /* GraphQL */ `
  subscription OnUpdateIngredientVolum($owner: String) {
    onUpdateIngredientVolum(owner: $owner) {
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
export const onDeleteIngredientVolum = /* GraphQL */ `
  subscription OnDeleteIngredientVolum($owner: String) {
    onDeleteIngredientVolum(owner: $owner) {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient($owner: String) {
    onCreateIngredient(owner: $owner) {
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
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient($owner: String) {
    onUpdateIngredient(owner: $owner) {
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
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient($owner: String) {
    onDeleteIngredient(owner: $owner) {
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
export const onCreateCosmeticIngredientCount = /* GraphQL */ `
  subscription OnCreateCosmeticIngredientCount($owner: String) {
    onCreateCosmeticIngredientCount(owner: $owner) {
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
export const onUpdateCosmeticIngredientCount = /* GraphQL */ `
  subscription OnUpdateCosmeticIngredientCount($owner: String) {
    onUpdateCosmeticIngredientCount(owner: $owner) {
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
export const onDeleteCosmeticIngredientCount = /* GraphQL */ `
  subscription OnDeleteCosmeticIngredientCount($owner: String) {
    onDeleteCosmeticIngredientCount(owner: $owner) {
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
export const onCreateDCT = /* GraphQL */ `
  subscription OnCreateDCT($owner: String) {
    onCreateDCT(owner: $owner) {
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
export const onUpdateDCT = /* GraphQL */ `
  subscription OnUpdateDCT($owner: String) {
    onUpdateDCT(owner: $owner) {
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
export const onDeleteDCT = /* GraphQL */ `
  subscription OnDeleteDCT($owner: String) {
    onDeleteDCT(owner: $owner) {
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
export const onCreateDCTGood = /* GraphQL */ `
  subscription OnCreateDCTGood($owner: String) {
    onCreateDCTGood(owner: $owner) {
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
export const onUpdateDCTGood = /* GraphQL */ `
  subscription OnUpdateDCTGood($owner: String) {
    onUpdateDCTGood(owner: $owner) {
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
export const onDeleteDCTGood = /* GraphQL */ `
  subscription OnDeleteDCTGood($owner: String) {
    onDeleteDCTGood(owner: $owner) {
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
export const onCreateEnroll = /* GraphQL */ `
  subscription OnCreateEnroll($owner: String) {
    onCreateEnroll(owner: $owner) {
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
export const onUpdateEnroll = /* GraphQL */ `
  subscription OnUpdateEnroll($owner: String) {
    onUpdateEnroll(owner: $owner) {
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
export const onDeleteEnroll = /* GraphQL */ `
  subscription OnDeleteEnroll($owner: String) {
    onDeleteEnroll(owner: $owner) {
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
export const onCreateBanner = /* GraphQL */ `
  subscription OnCreateBanner($owner: String) {
    onCreateBanner(owner: $owner) {
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
export const onUpdateBanner = /* GraphQL */ `
  subscription OnUpdateBanner($owner: String) {
    onUpdateBanner(owner: $owner) {
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
export const onDeleteBanner = /* GraphQL */ `
  subscription OnDeleteBanner($owner: String) {
    onDeleteBanner(owner: $owner) {
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
export const onCreateDogCosmetic = /* GraphQL */ `
  subscription OnCreateDogCosmetic($owner: String) {
    onCreateDogCosmetic(owner: $owner) {
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
export const onUpdateDogCosmetic = /* GraphQL */ `
  subscription OnUpdateDogCosmetic($owner: String) {
    onUpdateDogCosmetic(owner: $owner) {
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
export const onDeleteDogCosmetic = /* GraphQL */ `
  subscription OnDeleteDogCosmetic($owner: String) {
    onDeleteDogCosmetic(owner: $owner) {
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
export const onCreateIngredientCosmetic = /* GraphQL */ `
  subscription OnCreateIngredientCosmetic($owner: String) {
    onCreateIngredientCosmetic(owner: $owner) {
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
export const onUpdateIngredientCosmetic = /* GraphQL */ `
  subscription OnUpdateIngredientCosmetic($owner: String) {
    onUpdateIngredientCosmetic(owner: $owner) {
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
export const onDeleteIngredientCosmetic = /* GraphQL */ `
  subscription OnDeleteIngredientCosmetic($owner: String) {
    onDeleteIngredientCosmetic(owner: $owner) {
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
