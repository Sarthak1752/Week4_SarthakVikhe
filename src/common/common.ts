import * as dotenv from 'dotenv'

dotenv.config();

const credentials={
    postgres:{
        DATABASE:process.env.DB_DATABASE || "",
        PORT: Number(process.env.DB_PORT) || 5432,
        PASSWORD:process.env.DB_PASSWORD || "",
        HOST:process.env.DB_HOST || "",
        USERNAME:process.env.DB_USERNAME || "",
        DIALECT:process.env.DB_DIALECT || ""
    }
};

export default credentials;