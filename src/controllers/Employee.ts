import EmployeeModel, { IEmployeeModel } from '../models/EmployeeModel';
import * as express from 'express';
class EmployeeController {

    public getAllEmployees({filter}, req): Array<IEmployeeModel> | Object {
       
      return EmployeeModel
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
    public create({id,input}): any {
        return EmployeeModel.update({_id:id},input)
        .then((update) => {
         return  { count: update.nModified|| 0 }
        })
        .catch((error: Error) => {
            return {};
        });
    }
}

export default new EmployeeController();
