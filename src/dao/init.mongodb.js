const mongoose = require('mongoose');
const { db: { host, name, port } } = require('../configs/config.mongdb');
const connectString = `mongodb://${host}:${port}/${name}`;
class Database {

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    constructor() {
        this.connect();
    }
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug',
                {
                    color: true
                }
            )
        }
        console.log(connectString);
        mongoose.connect(connectString,
            {
                connectTimeoutMS: 5000
            }
        ).then(_ => {
            console.log("Mongo connected!")
        }
        ).catch(err => {
            console.error(`Mongo error connect, please check connection`, err);
        })
    }

}

const instanceMongoDB = Database.getInstance();

module.exports = instanceMongoDB;