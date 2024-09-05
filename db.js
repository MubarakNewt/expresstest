import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: 'postgres.vlvbvstnucsmeuixgshr', // 'postgres',  // process.env.DB_USER,      
    host: 'aws-0-eu-central-1.pooler.supabase.com', // 'localhost', // process.env.DB_HOST,     
    database: 'postgres', // 'taskman',  // process.env.DB_NAME,  
    password: 'K!Yh9AZidvb5UY9',  // 'abcd',  // process.env.DB_PASSWORD,
    port: 6543 // // process.env.DB_PORT
});


export default pool;