sed -i 's/%DB_HOST%/$DB_HOST/g' ecosystem.config.js
echo $DB_HOST
sed -i 's/%DB_PORT%/$DB_PORT/g' ecosystem.config.js
echo $DB_PORT
sed -i 's/%DB_NAME%/$DB_NAME/g' ecosystem.config.js
echo $DB_NAME
sed -i 's/%DB_USER%/$DB_USER/g' ecosystem.config.js
echo $DB_USER
sed -i 's/%DB_PASSWORD%/$DB_PASSWORD/g' ecosystem.config.js
echo $DB_PASSWORD
