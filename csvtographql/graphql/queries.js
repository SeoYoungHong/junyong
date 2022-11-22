/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        pw
        sex
        birth
        dogs {
          nextToken
          startedAt
        }
        reviews {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        pw
        sex
        birth
        dogs {
          nextToken
          startedAt
        }
        reviews {
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
      nextToken
      startedAt
    }
  }
`;
export const getDog = /* GraphQL */ `
  query GetDog($id: ID!) {
    getDog(id: $id) {
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
export const listDogs = /* GraphQL */ `
  query ListDogs(
    $id: ID
    $filter: ModelDogFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDogs(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDogs = /* GraphQL */ `
  query SyncDogs(
    $filter: ModelDogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const dogByUser = /* GraphQL */ `
  query DogByUser(
    $user_id: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dogByUser(
      user_id: $user_id
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCosmetic = /* GraphQL */ `
  query GetCosmetic($id: ID!) {
    getCosmetic(id: $id) {
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
export const listCosmetics = /* GraphQL */ `
  query ListCosmetics(
    $id: ID
    $filter: ModelCosmeticFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCosmetics(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCosmetics = /* GraphQL */ `
  query SyncCosmetics(
    $filter: ModelCosmeticFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCosmetics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const searchCosmetics = /* GraphQL */ `
  query SearchCosmetics(
    $filter: SearchableCosmeticFilterInput
    $sort: [SearchableCosmeticSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCosmeticAggregationInput]
  ) {
    searchCosmetics(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $id: ID
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReviews(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const syncReviews = /* GraphQL */ `
  query SyncReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const reviewByUser = /* GraphQL */ `
  query ReviewByUser(
    $user_id: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewByUser(
      user_id: $user_id
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const reviewByCosmetic = /* GraphQL */ `
  query ReviewByCosmetic(
    $cosmetic_id: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewByCosmetic(
      cosmetic_id: $cosmetic_id
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getIngredientVolum = /* GraphQL */ `
  query GetIngredientVolum($id: ID!) {
    getIngredientVolum(id: $id) {
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
export const listIngredientVolums = /* GraphQL */ `
  query ListIngredientVolums(
    $id: ID
    $filter: ModelIngredientVolumFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listIngredientVolums(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const syncIngredientVolums = /* GraphQL */ `
  query SyncIngredientVolums(
    $filter: ModelIngredientVolumFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncIngredientVolums(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const ingredientVolumByCosmetic = /* GraphQL */ `
  query IngredientVolumByCosmetic(
    $cosmetic_id: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelIngredientVolumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ingredientVolumByCosmetic(
      cosmetic_id: $cosmetic_id
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
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
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $id: ID
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listIngredients(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncIngredients = /* GraphQL */ `
  query SyncIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncIngredients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCosmeticIngredientCount = /* GraphQL */ `
  query GetCosmeticIngredientCount($id: ID!) {
    getCosmeticIngredientCount(id: $id) {
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
export const listCosmeticIngredientCounts = /* GraphQL */ `
  query ListCosmeticIngredientCounts(
    $filter: ModelCosmeticIngredientCountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCosmeticIngredientCounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCosmeticIngredientCounts = /* GraphQL */ `
  query SyncCosmeticIngredientCounts(
    $filter: ModelCosmeticIngredientCountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCosmeticIngredientCounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDCT = /* GraphQL */ `
  query GetDCT($id: ID!) {
    getDCT(id: $id) {
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
export const listDCTS = /* GraphQL */ `
  query ListDCTS(
    $filter: ModelDCTFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDCTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDCTS = /* GraphQL */ `
  query SyncDCTS(
    $filter: ModelDCTFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDCTS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDCTGood = /* GraphQL */ `
  query GetDCTGood($id: ID!) {
    getDCTGood(id: $id) {
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
export const listDCTGoods = /* GraphQL */ `
  query ListDCTGoods(
    $filter: ModelDCTGoodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDCTGoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDCTGoods = /* GraphQL */ `
  query SyncDCTGoods(
    $filter: ModelDCTGoodFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDCTGoods(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEnroll = /* GraphQL */ `
  query GetEnroll($id: ID!) {
    getEnroll(id: $id) {
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
export const listEnrolls = /* GraphQL */ `
  query ListEnrolls(
    $filter: ModelEnrollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnrolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEnrolls = /* GraphQL */ `
  query SyncEnrolls(
    $filter: ModelEnrollFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEnrolls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBanner = /* GraphQL */ `
  query GetBanner($id: ID!) {
    getBanner(id: $id) {
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
export const listBanners = /* GraphQL */ `
  query ListBanners(
    $filter: ModelBannerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBanners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBanners = /* GraphQL */ `
  query SyncBanners(
    $filter: ModelBannerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBanners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDogCosmetic = /* GraphQL */ `
  query GetDogCosmetic($id: ID!) {
    getDogCosmetic(id: $id) {
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
export const listDogCosmetics = /* GraphQL */ `
  query ListDogCosmetics(
    $filter: ModelDogCosmeticFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDogCosmetics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dogID
        cosmeticID
        dog {
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
        cosmetic {
          id
          title
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
      nextToken
      startedAt
    }
  }
`;
export const syncDogCosmetics = /* GraphQL */ `
  query SyncDogCosmetics(
    $filter: ModelDogCosmeticFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDogCosmetics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        dogID
        cosmeticID
        dog {
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
        cosmetic {
          id
          title
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
      nextToken
      startedAt
    }
  }
`;
export const getIngredientCosmetic = /* GraphQL */ `
  query GetIngredientCosmetic($id: ID!) {
    getIngredientCosmetic(id: $id) {
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
export const listIngredientCosmetics = /* GraphQL */ `
  query ListIngredientCosmetics(
    $filter: ModelIngredientCosmeticFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredientCosmetics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cosmeticID
        ingredientID
        cosmetic {
          id
          title
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
      nextToken
      startedAt
    }
  }
`;
export const syncIngredientCosmetics = /* GraphQL */ `
  query SyncIngredientCosmetics(
    $filter: ModelIngredientCosmeticFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncIngredientCosmetics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        cosmeticID
        ingredientID
        cosmetic {
          id
          title
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
      nextToken
      startedAt
    }
  }
`;
