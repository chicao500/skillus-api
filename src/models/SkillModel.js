import connection from "../config/connection";

export const skillModel = {
    SkillModel: {

        all() {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM skill`, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
            });
        });
        },

        get(id) {
        return new Promise((resolve, reject) => {
            connection.query(
            `SELECT * FROM skill WHERE id = ${id}`,
            (error, result) => {
                if (error) {
                reject(error);
                } else {
                resolve(result[0]);
                }
            }
            );
        });
        },
    },
};
