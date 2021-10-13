import { ProjectSchema } from "../../schemaTypes";

export const projects = [
  {
    name: 'Social insurance',
    description: 'My social insurance documents',
    documents: [1, 2, 3, 4],
  },
  {
    name: 'Laptop - 2019',
    description: 'Documents for my new laptop from 2019',
    documents: [5],
  }
] as ProjectSchema[];

export const archiverProjects = [
  {
    name: 'Social insurance - SK',
    description: 'My social insurance documents from Slovakia',
    documents: [6, 7],
  },
  {
    name: 'Phone - 2013',
    description: 'Documents for my new phone from 2013',
    documents: [8],
  }
] as ProjectSchema[];