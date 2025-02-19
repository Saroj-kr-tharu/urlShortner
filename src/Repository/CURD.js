const { Op } = require("sequelize");

class CURDRepo {

    constructor(model) {
        this.Task = model;
    }

    async create(data) {
        try {
            console.log('data in repo => ',data);
            
            const res = await this.Task.create(data);
            return res;
        } catch (error) {
            console.log("Something Went Wrong in REPOSITORY level (create) ");
            throw error;
        }
    }

    async delete(idData) {
        try {
            // Fetch the data to be deleted
            const dataToDelete = await this.Task.findOne({
                where: {
                    id: idData,
                },
            });

            if (!dataToDelete) {
                return null; // Return null if no data found
            }

            // Perform the deletion
            await this.Task.destroy({
                where: {
                    id: idData,
                },
            });

            // Return the deleted data
            return dataToDelete;
          
        } catch (error) {
            console.log("Something Went Wrong in REPOSITORY level (delete) ");
            throw error;
        }
    }

    async getAll() {
        try {
            console.log('in repo get all ');

            const res = await this.Task.findAll();
            return res;
        } catch (error) {
            console.log("Something Went Wrong in REPOSITORY level (getAll) ");
            throw error;
        }
    }

    async getById(id) {
        try {
            const res = await this.Task.findOne({
                where: {
                    id,

                },
            });


            return res;
        } catch (error) {
            console.log("Something Went Wrong in REPOSITORY level (getById) ");
            throw error;
        }
    }

    async update(dataId, data) {
        try {
            const res = await this.Task.update(data, {
                where: {
                    id: dataId,

                },
            });
            return res;
        } catch (error) {
            console.log("Something Went Wrong in REPOSITORY level (getById) ");
            throw error;
        }
    }


}

module.exports = CURDRepo;
