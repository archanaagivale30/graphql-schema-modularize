import { Router } from 'express';
import * as Designation from './Designation';
import * as Employee from './Employee';
//import * as User from '../schema/User';

var { buildSchema } = require('graphql');

/**
 * @export
 * @class GraphQLIndex
 */
const types=[];
const queries=[];
const mutations=[];
const inputs=[];
const roots=[];

const schemas=[Designation,Employee];

schemas.forEach(s=>{
    types.push(s.types);
    queries.push(s.queries)
    mutations.push(s.mutations)
    inputs.push(s.inputs)
    roots.push(s.roots);
})
export default class Schema {
    public router: Router;
    public schema: Object;
    public root: Object;
    // Root resolver
    constructor() {
        
        this.schema = buildSchema(`
            ${inputs.join("\n")}     
         type Query {
            ${queries.join("\n")}
         },
         type Mutation {
            ${mutations.join("\n")}
          }
          ${types.join("\n")}     
     `);
        this.root=Object.assign({},...roots)
        this.router = Router();
    }

    /**
     * @memberof Schema
     */
}
