/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNonProfit = /* GraphQL */ `
  mutation CreateNonProfit(
    $input: CreateNonProfitInput!
    $condition: ModelNonProfitConditionInput
  ) {
    createNonProfit(input: $input, condition: $condition) {
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
export const updateNonProfit = /* GraphQL */ `
  mutation UpdateNonProfit(
    $input: UpdateNonProfitInput!
    $condition: ModelNonProfitConditionInput
  ) {
    updateNonProfit(input: $input, condition: $condition) {
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
export const deleteNonProfit = /* GraphQL */ `
  mutation DeleteNonProfit(
    $input: DeleteNonProfitInput!
    $condition: ModelNonProfitConditionInput
  ) {
    deleteNonProfit(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createAdministrator = /* GraphQL */ `
  mutation CreateAdministrator(
    $input: CreateAdministratorInput!
    $condition: ModelAdministratorConditionInput
  ) {
    createAdministrator(input: $input, condition: $condition) {
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
export const updateAdministrator = /* GraphQL */ `
  mutation UpdateAdministrator(
    $input: UpdateAdministratorInput!
    $condition: ModelAdministratorConditionInput
  ) {
    updateAdministrator(input: $input, condition: $condition) {
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
export const deleteAdministrator = /* GraphQL */ `
  mutation DeleteAdministrator(
    $input: DeleteAdministratorInput!
    $condition: ModelAdministratorConditionInput
  ) {
    deleteAdministrator(input: $input, condition: $condition) {
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
