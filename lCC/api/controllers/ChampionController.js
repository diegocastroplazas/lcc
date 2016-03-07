/**
 * ChampionController
 *
 * @description :: Server-side logic for managing champions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getChampionInfo: function (req, res) {

        var https = require('https');
        var responseData = '';
        var parsed = '';
        var obj = new Object();
        var champion = new Object();



        var options = {

            hostname: 'global.api.pvp.net',
            port: '443',
            path: '/api/lol/static-data/na/v1.2/champion?dataById=false&champData=all&api_key=0883a181-f4ba-4ead-94a6-aa1afd94a912',
            method: 'GET'

        };

        callback = function (response) {

            response.on('data', function (chunk) {
                responseData += chunk;
            })

            response.on('end', function ( ) {

                parsed = JSON.parse(responseData);

                obj.version = parsed.version;
                obj.data = [];
                var i = 1;
                for (var key in parsed.data) {
                    //console.log(' name=' + key + ' value=' + parsed.data[key]);
                    //console.log(parsed.data[key].name);
                    var obj2 = {
                        id: parsed.data[key].id,
                        name: parsed.data[key].name,
                        imageURL: 'http://ddragon.leagueoflegends.com/cdn/'+obj.version+'/img/champion/'+parsed.data[key].image.full,
                        tags : parsed.data[key].tags,
                        stats : parsed.data[key].stats
                    }
                    obj.data.push(obj2);
                }

                var jsonString = JSON.stringify(obj);
                res.set({
                    'Origin': 'http://192.168.0.1.17:1337'
                })
                res.send(jsonString);
            });
        }

        https.request(options, callback).end();


    }

};
