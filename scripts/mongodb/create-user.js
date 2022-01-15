var FgGreen = '\x1b[32m';
var FgClear = '\x1b[0m';

var conn = new Mongo('mongodb://localhost:27017');
var db = conn.getDB('admin');

// example user config
db.createUser({
	user: 'superuser',
	pwd: 'PassForSuperUser',
	roles: ['root'],
});

db.createUser({
	user: 'appuser',
	pwd: 'PassForAppUser',
	roles: [{ role: 'dbOwner', db: 'app' }],
});

function printInfo() {
	print(FgGreen, ...arguments, FgClear);
}
