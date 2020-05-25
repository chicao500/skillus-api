import connection from "../../config/connection";
import { userModel } from "../../models/UserModel";

export const userResolver = {
  Query: {
    users() {
      return userModel.UserModel.all();
    },
    user(_, args) {
      return userModel.UserModel.get(args.id);
     },
  },
  User: {
    skill(parent) {
      return new Promise((resolve, reject) => {
        connection.query(
          `SELECT US.id, US.skill_id, S.name 
          from user_skill US
          inner join skill S on S.id = US.skill_id 
          where user_id = ${parent.user_status_id}`,
          
            (error, result) => {
              if (error) {
                reject(error);
              } else {
                console.log(result);
                resolve(result);
              }
            }
          );
        });
      },
    },
  };
        
