module.exports = {
    "dbConnectionString" : "mongodb://localhost/regisapp",
    "port": process.env.PORT || 3000,
    "secretKey" : "MySecretKey",
    "sendFile" : __dirname + "/public/views/index.html",
}
