import DesignationModel from '../models/DesignationModel';
import * as express from 'express';
class DesignationController {
    public getAllDesignations(req: express.Request, res: express.Response, next: express.NextFunction): void {
			DesignationModel
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
        return DesignationModel.update({_id:id},input)
        .then((update) => {
         return  { count: update.nModified|| 0 }
        })
        .catch((error: Error) => {
            return {};
        });
    }
}

export default new DesignationController();
