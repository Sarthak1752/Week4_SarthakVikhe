import { Sequelize } from "sequelize";
import credentials from '../common/common'

const sequelize = new Sequelize({
    host:credentials.postgres.HOST,
    username: credentials.postgres.USERNAME,
    password:credentials.postgres.PASSWORD,
    database:credentials.postgres.DATABASE,
    dialect:credentials.postgres.DIALECT as 'postgres',
    port:credentials.postgres.PORT
})


sequelize.authenticate().then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.log("Error connecting database",error)
})


sequelize.sync().then(()=>{
    console.log("Database synchronized")
}).catch((error)=>{
    console.log("Error synchronizing database",error);
})


export default sequelize;