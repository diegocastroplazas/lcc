/**
 * ItemController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getItems: function (req, res){

        var https = require('https');
        var responseData = '';
        var parsed = '';
        var responseString = '';
        var obj = new Object();

        var options = {

            hostname: 'global.api.pvp.net',
            port: '443',
            path: '/api/lol/static-data/na/v1.2/item?itemListData=all&api_key=0883a181-f4ba-4ead-94a6-aa1afd94a912',
            method: 'GET',

        };

        callback = function (response) {

            response.on('data', function (chunk) {
                responseData += chunk;
            })

            response.on('end', function ( ) {

                parsed = JSON.parse(responseData);
                responseString = parsed

                res.send(parsed);


            });
        }

        https.request(options, callback).end();

    }

};
