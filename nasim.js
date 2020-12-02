let fs = require('fs');

try {
    let data = fs.readFileSync('app.js', 'utf8');
    let processed_data = data.toString().replace(/%/g, '/ 100 *')
    eval( processed_data );
} catch(e) {
    console.log('Error:', e.stack);
}