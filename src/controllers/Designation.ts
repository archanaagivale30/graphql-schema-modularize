import DesignationModel, { IDesignationModel } from '../models/DesignationModel';
import * as express from 'express';
class DesignationController {

  public getAllDesignations({filter}, req): Array<IDesignationModel> | Object {
       
    return DesignationModel
      .find(filter)
      .then((data) => {
        return data;
      })
      .catch((error: Error) => {
        var err = new Error("INTERNALSERVER");
        err.stack = error.message;
        throw err;
      });
  }
    
  public create({ id, input }): any {
    return DesignationModel.update({ _id: id }, input)
      .then((update) => {
        return { count: update.nModified || 0 }
      })
      .catch((error: Error) => {
        return {};
      });
  }
}

export default new DesignationController();
