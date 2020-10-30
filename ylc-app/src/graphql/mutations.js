/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNonProfit = /* GraphQL */ `
  mutation CreateNonProfit(
    $input: CreateNonProfitInput!
    $condition: ModelNonProfitConditionInput
  ) {
    createNonProfit(input: $input, condition: $condition) {
      id
      IsPartner
      RequiresApproval
      OrganizationLegalName
      County
      MissionStatement
      ImpactArea
      Website
      CurrentFYEndDate
      CEOFirstName
      CEOLastName
      CEOEmail
      BoardChairFirstName
      BoardChairLastName
      BoardChairEmail
      BoardTermLengths
      BoardTermLimits
      WhatMakesYourBoardUnique
      PercentOfBoardMakingMonetaryContributions
      PercentOfBoardMakingInKindContributions
      WrittenBoardSelectionCriteria
      WrittenConflictOfInterestPolicy
      BoardDemographicsAfricanAmericanBlack
      BoardDemographicsAsian
      BoardDemographicsWhite
      BoardDemographicsHispanicLatinx
      BoardDemographicsMultiracial
      BoardDemographicsNativeAmerican
      BoardDemographicsPacificIslander
      BoardDemographicsOtherEthnicity
      BoardDemographicsMale
      BoardDemographicsFemale
      BoardDemographicsSelfDescribe
      BoardDemographicsPreferNotToSay
      UniqueOrganizationURLLink
      DonorEdgeStatus
      createdAt
      updatedAt
    }
  }
`;
export const updateNonProfit = /* GraphQL */ `
  mutation UpdateNonProfit(
    $input: UpdateNonProfitInput!
    $condition: ModelNonProfitConditionInput
  ) {
    updateNonProfit(input: $input, condition: $condition) {
      id
      IsPartner
      RequiresApproval
      OrganizationLegalName
      County
      MissionStatement
      ImpactArea
      Website
      CurrentFYEndDate
      CEOFirstName
      CEOLastName
      CEOEmail
      BoardChairFirstName
      BoardChairLastName
      BoardChairEmail
      BoardTermLengths
      BoardTermLimits
      WhatMakesYourBoardUnique
      PercentOfBoardMakingMonetaryContributions
      PercentOfBoardMakingInKindContributions
      WrittenBoardSelectionCriteria
      WrittenConflictOfInterestPolicy
      BoardDemographicsAfricanAmericanBlack
      BoardDemographicsAsian
      BoardDemographicsWhite
      BoardDemographicsHispanicLatinx
      BoardDemographicsMultiracial
      BoardDemographicsNativeAmerican
      BoardDemographicsPacificIslander
      BoardDemographicsOtherEthnicity
      BoardDemographicsMale
      BoardDemographicsFemale
      BoardDemographicsSelfDescribe
      BoardDemographicsPreferNotToSay
      UniqueOrganizationURLLink
      DonorEdgeStatus
      createdAt
      updatedAt
    }
  }
`;
export const deleteNonProfit = /* GraphQL */ `
  mutation DeleteNonProfit(
    $input: DeleteNonProfitInput!
    $condition: ModelNonProfitConditionInput
  ) {
    deleteNonProfit(input: $input, condition: $condition) {
      id
      IsPartner
      RequiresApproval
      OrganizationLegalName
      County
      MissionStatement
      ImpactArea
      Website
      CurrentFYEndDate
      CEOFirstName
      CEOLastName
      CEOEmail
      BoardChairFirstName
      BoardChairLastName
      BoardChairEmail
      BoardTermLengths
      BoardTermLimits
      WhatMakesYourBoardUnique
      PercentOfBoardMakingMonetaryContributions
      PercentOfBoardMakingInKindContributions
      WrittenBoardSelectionCriteria
      WrittenConflictOfInterestPolicy
      BoardDemographicsAfricanAmericanBlack
      BoardDemographicsAsian
      BoardDemographicsWhite
      BoardDemographicsHispanicLatinx
      BoardDemographicsMultiracial
      BoardDemographicsNativeAmerican
      BoardDemographicsPacificIslander
      BoardDemographicsOtherEthnicity
      BoardDemographicsMale
      BoardDemographicsFemale
      BoardDemographicsSelfDescribe
      BoardDemographicsPreferNotToSay
      UniqueOrganizationURLLink
      DonorEdgeStatus
      createdAt
      updatedAt
    }
  }
`;
export const createWishlist = /* GraphQL */ `
  mutation CreateWishlist(
    $input: CreateWishlistInput!
    $condition: ModelWishlistConditionInput
  ) {
    createWishlist(input: $input, condition: $condition) {
      id
      nonProfitID
      nonProfit {
        nextToken
      }
      createDate
      firstName
      lastName
      email
      phoneNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateWishlist = /* GraphQL */ `
  mutation UpdateWishlist(
    $input: UpdateWishlistInput!
    $condition: ModelWishlistConditionInput
  ) {
    updateWishlist(input: $input, condition: $condition) {
      id
      nonProfitID
      nonProfit {
        nextToken
      }
      createDate
      firstName
      lastName
      email
      phoneNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteWishlist = /* GraphQL */ `
  mutation DeleteWishlist(
    $input: DeleteWishlistInput!
    $condition: ModelWishlistConditionInput
  ) {
    deleteWishlist(input: $input, condition: $condition) {
      id
      nonProfitID
      nonProfit {
        nextToken
      }
      createDate
      firstName
      lastName
      email
      phoneNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
