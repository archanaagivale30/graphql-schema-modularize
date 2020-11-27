import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

/**
 * @export
 * @interface IEmployeeModel
 * @extends {Document}
 */
export interface IEmployeeModel extends Document {
    createdAt ? : Date;
    updatedAt ? : Date;
    name: string;
    email: string;
}

const EmployeeSchema: Schema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
}, {
    collection: 'Employee',
    versionKey: false,
    timestamps: true
});

export default connections.db.model < IEmployeeModel >('EmployeeModel', EmployeeSchema);
