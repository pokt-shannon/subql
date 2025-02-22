// Copyright 2020-2025 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: GPL-3.0

import gql from 'graphql-tag';

export const directives = gql`
  directive @derivedFrom(field: String!) on FIELD_DEFINITION
  directive @entity on OBJECT
  directive @jsonField(indexed: Boolean) on OBJECT
  directive @index(unique: Boolean) on FIELD_DEFINITION
  directive @compositeIndexes(fields: [[String]]!) on OBJECT
  directive @fullText(fields: [String!], language: String) on OBJECT
  directive @dbType(type: String!) on FIELD_DEFINITION
`;
