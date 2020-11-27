import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

/**
 * @export
 * @interface IDesignationModel
 * @extends {Document}
 */
export interface IDesignationModel extends Document {
    createdAt ? : Date;
    updatedAt ? : Date;
    title: string;
}

const DesignationSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
}, {
    collection: 'Designation',
    versionKey: false,
    timestamps: true
});

export default connections.db.model < IDesignationModel >('DesignationModel', DesignationSchema);
