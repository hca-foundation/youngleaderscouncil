/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNonProfit = /* GraphQL */ `
  query GetNonProfit($id: ID!) {
    getNonProfit(id: $id) {
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
export const listNonProfits = /* GraphQL */ `
  query ListNonProfits(
    $filter: ModelNonProfitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonProfits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cid
        name
        email
        premium
        cartID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAdministrator = /* GraphQL */ `
  query GetAdministrator($id: ID!) {
    getAdministrator(id: $id) {
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
export const listAdministrators = /* GraphQL */ `
  query ListAdministrators(
    $filter: ModelAdministratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdministrators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cid
        name
        email
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
