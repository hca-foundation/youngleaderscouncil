/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNonProfit = /* GraphQL */ `
  subscription OnCreateNonProfit {
    onCreateNonProfit {
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
export const onUpdateNonProfit = /* GraphQL */ `
  subscription OnUpdateNonProfit {
    onUpdateNonProfit {
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
export const onDeleteNonProfit = /* GraphQL */ `
  subscription OnDeleteNonProfit {
    onDeleteNonProfit {
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
export const onCreateWishlist = /* GraphQL */ `
  subscription OnCreateWishlist($owner: String!) {
    onCreateWishlist(owner: $owner) {
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
export const onUpdateWishlist = /* GraphQL */ `
  subscription OnUpdateWishlist($owner: String!) {
    onUpdateWishlist(owner: $owner) {
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
export const onDeleteWishlist = /* GraphQL */ `
  subscription OnDeleteWishlist($owner: String!) {
    onDeleteWishlist(owner: $owner) {
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
