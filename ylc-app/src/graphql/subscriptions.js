/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNonProfit = /* GraphQL */ `
  subscription OnCreateNonProfit {
    onCreateNonProfit {
      id
      partnered
      premium
      occupiedID
      occupied {
        nextToken
      }
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
      partnered
      premium
      occupiedID
      occupied {
        nextToken
      }
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
      partnered
      premium
      occupiedID
      occupied {
        nextToken
      }
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
      UniqueOrganizationURLLink
      DonorEdgeStatus
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($owner: String) {
    onCreateStudent(owner: $owner) {
      id
      cid
      name
      email
      premium
      cartID
      cart {
        id
        partnered
        premium
        occupiedID
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
        UniqueOrganizationURLLink
        DonorEdgeStatus
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($owner: String) {
    onUpdateStudent(owner: $owner) {
      id
      cid
      name
      email
      premium
      cartID
      cart {
        id
        partnered
        premium
        occupiedID
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
        UniqueOrganizationURLLink
        DonorEdgeStatus
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($owner: String) {
    onDeleteStudent(owner: $owner) {
      id
      cid
      name
      email
      premium
      cartID
      cart {
        id
        partnered
        premium
        occupiedID
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
        UniqueOrganizationURLLink
        DonorEdgeStatus
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAdministrator = /* GraphQL */ `
  subscription OnCreateAdministrator($owner: String!) {
    onCreateAdministrator(owner: $owner) {
      id
      cid
      name
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAdministrator = /* GraphQL */ `
  subscription OnUpdateAdministrator($owner: String!) {
    onUpdateAdministrator(owner: $owner) {
      id
      cid
      name
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAdministrator = /* GraphQL */ `
  subscription OnDeleteAdministrator($owner: String!) {
    onDeleteAdministrator(owner: $owner) {
      id
      cid
      name
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
