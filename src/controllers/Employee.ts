import EmployeeModel from '../models/EmployeeModel';
import * as express from 'express';
class EmployeeController {
    public getAllEmployees(req: express.Request, res: express.Response, next: express.NextFunction): void {
			EmployeeModel
				.find({})
				.then((data)=> {
					res.status(200).json({data});
				})
				.catch((error: Error) => {
					res.status(500).json({
						error: error.message,
						errorStack: error.stack
					});
					next(error);
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
