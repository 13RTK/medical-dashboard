const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const mypw = 'HIS'; // set mypw to the hr schema password

async function run() {
  oracledb.initOracleClient();
  const connection = await oracledb.getConnection({
    user: 'zlhis',
    password: mypw,
    connectString: '192.168.1.199/ORCL',
  });

  const result = await connection.execute('SELECT 1 + 1 FROM dual');

  console.log(result.rows);
  await connection.close();
}

run();
