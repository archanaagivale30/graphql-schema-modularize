import DesignationController from '../controllers/Designation';

export const types=`
type Designation {
    id :ID!,
    title : String,
    created : DateTime,
    updatedAt : DateTime
    }`;
export const inputs =`
input DesignationInput {
    title : String
  }
`;
export const queries =`   
Designations: [Designation]
`;

export const mutations= `
createDesignation(input: DesignationInput): Designation
`
export const roots={
    Designations: DesignationController.getAllDesignations,
    createDesignation: DesignationController.create,
}
