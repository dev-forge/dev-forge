const { Pool } = require('pg');

const myURI = 'postgres://jcyjcpnl:TbvziujKIRrCGgOoJTOTwKJiTONR6h6k@kashin.db.elephantsql.com/jcyjcpnl';

const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('Query Executed', text);
    return pool.query(text, params, callback);
  }
}; 