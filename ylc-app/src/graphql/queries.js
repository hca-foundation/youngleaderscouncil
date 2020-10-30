/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNonProfit = /* GraphQL */ `
  query GetNonProfit($id: ID!) {
    getNonProfit(id: $id) {
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
export const listNonProfits = /* GraphQL */ `
  query ListNonProfits(
    $filter: ModelNonProfitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonProfits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getWishlist = /* GraphQL */ `
  query GetWishlist($id: ID!) {
    getWishlist(id: $id) {
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
export const listWishlists = /* GraphQL */ `
  query ListWishlists(
    $filter: ModelWishlistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWishlists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nonProfitID
        createDate
        firstName
        lastName
        email
        phoneNumber
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
