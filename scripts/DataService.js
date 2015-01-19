var Wellit = Wellit || {};

Wellit.DataService = (function(){
    var data = {
        tableClass : "table",
        headers : [
            'Id', 'Name', 'Port', 'Company', 'Responsible', 'Email', 'Duration'
        ],
        rows : [
            {
                "id": 43,
                "name": "Gazak",
                "port": "Wallabout Street 33",
                "company": "UNDERTAP",
                "email": "isabelmiles@undertap.com",
                "responsible": "Jeri Little",
                "from": "2014-05-05T22:42:13",
                "to": "2014-10-03T14:55:28"
            },
            {
                "id": 89,
                "name": "Exozent",
                "port": "Wyckoff Street 69",
                "company": "GEEKNET",
                "email": "jerilittle@geeknet.com",
                "responsible": "Ilene Carter",
                "from": "2014-06-12T03:42:11",
                "to": "2014-02-06T11:33:20"
            },
            {
                "id": 63,
                "name": "Ecolight",
                "port": "Victor Road 12",
                "company": "ANARCO",
                "email": "ilenecarter@anarco.com",
                "responsible": "Gina Harmon",
                "from": "2014-07-29T17:39:54",
                "to": "2014-11-28T11:22:16"
            },
            {
                "id": 48,
                "name": "Eplode",
                "port": "Quincy Street 85",
                "company": "TRI@TRIBALOG",
                "email": "ginaharmon@tri@tribalog.com",
                "responsible": "Dillon Rosales",
                "from": "2014-09-26T10:27:23",
                "to": "2014-01-08T08:31:50"
            },
            {
                "id": 83,
                "name": "Zaphire",
                "port": "Howard Alley 42",
                "company": "TERRAGEN",
                "email": "dillonrosales@terragen.com",
                "responsible": "Marilyn Workman",
                "from": "2014-12-15T07:17:30",
                "to": "2014-07-21T22:17:35"
            },
            {
                "id": 99,
                "name": "Exoplode",
                "port": "Prince Street 91",
                "company": "STRALOY",
                "email": "marilynworkman@straloy.com",
                "responsible": "Phelps Haley",
                "from": "2014-04-29T22:02:11",
                "to": "2014-07-18T21:23:28"
            },
            {
                "id": 98,
                "name": "Vortexaco",
                "port": "Stone Avenue 73",
                "company": "PLAYCE",
                "email": "phelpshaley@playce.com",
                "responsible": "Angelia Bryan",
                "from": "2014-08-27T00:38:05",
                "to": "2014-01-12T02:51:17"
            },
            {
                "id": 24,
                "name": "Songlines",
                "port": "Bushwick Court 81",
                "company": "KYAGURU",
                "email": "angeliabryan@kyaguru.com",
                "responsible": "Mays Foster",
                "from": "2014-01-13T01:41:17",
                "to": "2014-07-29T14:44:07"
            },
            {
                "id": 42,
                "name": "Surelogic",
                "port": "Bevy Court 41",
                "company": "ROTODYNE",
                "email": "maysfoster@rotodyne.com",
                "responsible": "Nixon Stein",
                "from": "2014-07-09T04:36:58",
                "to": "2014-06-21T00:14:05"
            },
            {
                "id": 61,
                "name": "Zidant",
                "port": "Arion Place 87",
                "company": "AQUASURE",
                "email": "nixonstein@aquasure.com",
                "responsible": "Jo Dickerson",
                "from": "2014-11-18T03:15:17",
                "to": "2014-03-04T10:53:22"
            },
            {
                "id": 37,
                "name": "Netility",
                "port": "Williams Court 51",
                "company": "AMRIL",
                "email": "jodickerson@amril.com",
                "responsible": "Rocha Atkinson",
                "from": "2014-03-04T10:05:30",
                "to": "2014-01-06T15:47:02"
            },
            {
                "id": 44,
                "name": "Irack",
                "port": "Holly Street 24",
                "company": "MUSIX",
                "email": "rochaatkinson@musix.com",
                "responsible": "Parker Summers",
                "from": "2014-03-05T03:44:30",
                "to": "2014-06-10T13:19:06"
            },
            {
                "id": 59,
                "name": "Pasturia",
                "port": "Rapelye Street 40",
                "company": "MARVANE",
                "email": "parkersummers@marvane.com",
                "responsible": "Fannie Cain",
                "from": "2015-01-12T17:07:25",
                "to": "2014-07-19T19:15:32"
            },
            {
                "id": 12,
                "name": "Paprikut",
                "port": "Irvington Place 17",
                "company": "TALAE",
                "email": "fanniecain@talae.com",
                "responsible": "David Jones",
                "from": "2014-08-27T16:26:23",
                "to": "2014-09-19T18:21:01"
            },
            {
                "id": 42,
                "name": "Turnling",
                "port": "Hamilton Walk 84",
                "company": "EXOBLUE",
                "email": "davidjones@exoblue.com",
                "responsible": "Butler Miranda",
                "from": "2014-07-19T14:54:54",
                "to": "2014-03-24T09:14:11"
            },
            {
                "id": 51,
                "name": "Housedown",
                "port": "Dorchester Road 73",
                "company": "KIGGLE",
                "email": "butlermiranda@kiggle.com",
                "responsible": "Gladys Sherman",
                "from": "2014-10-09T21:36:14",
                "to": "2014-06-24T02:26:48"
            },
            {
                "id": 89,
                "name": "Hopeli",
                "port": "Stuyvesant Avenue 35",
                "company": "GOLISTIC",
                "email": "gladyssherman@golistic.com",
                "responsible": "Shari Byrd",
                "from": "2014-03-03T15:53:10",
                "to": "2014-05-09T09:54:56"
            },
            {
                "id": 85,
                "name": "Zounds",
                "port": "Bridgewater Street 69",
                "company": "EPLOSION",
                "email": "sharibyrd@eplosion.com",
                "responsible": "Mari Molina",
                "from": "2014-06-04T18:12:54",
                "to": "2014-03-08T01:17:16"
            },
            {
                "id": 59,
                "name": "Mediot",
                "port": "Gelston Avenue 63",
                "company": "EXOSPACE",
                "email": "marimolina@exospace.com",
                "responsible": "Holden Leon",
                "from": "2014-11-23T12:03:03",
                "to": "2014-12-09T21:23:39"
            },
            {
                "id": 25,
                "name": "Vixo",
                "port": "Dahlgreen Place 78",
                "company": "CUBICIDE",
                "email": "holdenleon@cubicide.com",
                "responsible": "Santos Orr",
                "from": "2014-10-15T20:43:38",
                "to": "2015-01-07T10:51:51"
            },
            {
                "id": 94,
                "name": "Fangold",
                "port": "Oriental Court 55",
                "company": "FARMEX",
                "email": "santosorr@farmex.com",
                "responsible": "Sherman Mathews",
                "from": "2014-09-18T17:24:00",
                "to": "2014-11-17T03:16:41"
            },
            {
                "id": 68,
                "name": "Kengen",
                "port": "Homecrest Court 41",
                "company": "ZIORE",
                "email": "shermanmathews@ziore.com",
                "responsible": "Fox Clay",
                "from": "2014-09-14T05:15:06",
                "to": "2014-10-14T11:04:40"
            },
            {
                "id": 55,
                "name": "Xth",
                "port": "Vine Street 57",
                "company": "PLEXIA",
                "email": "foxclay@plexia.com",
                "responsible": "Mckinney Sanchez",
                "from": "2014-08-08T20:55:19",
                "to": "2014-06-25T00:12:57"
            },
            {
                "id": 49,
                "name": "Furnitech",
                "port": "Ross Street 93",
                "company": "MOBILDATA",
                "email": "mckinneysanchez@mobildata.com",
                "responsible": "Parsons Armstrong",
                "from": "2014-01-03T15:17:39",
                "to": "2014-10-28T19:40:54"
            },
            {
                "id": 28,
                "name": "Accusage",
                "port": "Elm Avenue 14",
                "company": "ACCRUEX",
                "email": "parsonsarmstrong@accruex.com",
                "responsible": "Moran Dudley",
                "from": "2014-09-23T17:52:21",
                "to": "2014-12-30T12:44:38"
            },
            {
                "id": 34,
                "name": "Zolarity",
                "port": "Bushwick Avenue 2",
                "company": "PROVIDCO",
                "email": "morandudley@providco.com",
                "responsible": "Randall Shelton",
                "from": "2014-03-26T18:54:17",
                "to": "2014-09-25T06:41:03"
            },
            {
                "id": 62,
                "name": "Acrodance",
                "port": "Beverly Road 3",
                "company": "PYRAMIA",
                "email": "randallshelton@pyramia.com",
                "responsible": "Carlson Knapp",
                "from": "2014-11-03T13:44:50",
                "to": "2015-01-06T11:37:13"
            },
            {
                "id": 54,
                "name": "Suremax",
                "port": "Taylor Street 14",
                "company": "ISOSWITCH",
                "email": "carlsonknapp@isoswitch.com",
                "responsible": "Acosta Burt",
                "from": "2014-06-16T06:13:10",
                "to": "2014-05-22T03:18:41"
            },
            {
                "id": 86,
                "name": "Viocular",
                "port": "Brighton Avenue 4",
                "company": "FISHLAND",
                "email": "acostaburt@fishland.com",
                "responsible": "Vera Gaines",
                "from": "2014-08-09T01:11:10",
                "to": "2014-11-02T14:02:28"
            },
            {
                "id": 47,
                "name": "Vetron",
                "port": "Hubbard Place 52",
                "company": "EMTRAC",
                "email": "veragaines@emtrac.com",
                "responsible": "Tisha Pitts",
                "from": "2014-07-22T08:36:02",
                "to": "2014-07-06T02:43:39"
            },
            {
                "id": 40,
                "name": "Ceprene",
                "port": "Dekoven Court 52",
                "company": "BRAINCLIP",
                "email": "tishapitts@brainclip.com",
                "responsible": "Flowers Russell",
                "from": "2014-10-14T00:16:24",
                "to": "2014-01-25T10:26:29"
            },
            {
                "id": 80,
                "name": "Skyplex",
                "port": "Montgomery Street 59",
                "company": "BUGSALL",
                "email": "flowersrussell@bugsall.com",
                "responsible": "Sally Clements",
                "from": "2014-10-25T16:37:13",
                "to": "2014-08-21T02:50:46"
            },
            {
                "id": 48,
                "name": "Acium",
                "port": "Coventry Road 82",
                "company": "SULTRAX",
                "email": "sallyclements@sultrax.com",
                "responsible": "Ryan Frederick",
                "from": "2014-12-08T18:45:58",
                "to": "2014-07-28T13:33:44"
            },
            {
                "id": 37,
                "name": "Rocklogic",
                "port": "Lafayette Walk 51",
                "company": "FITCORE",
                "email": "ryanfrederick@fitcore.com",
                "responsible": "Louise Parks",
                "from": "2014-06-13T08:02:22",
                "to": "2015-01-10T10:30:13"
            },
            {
                "id": 74,
                "name": "Thredz",
                "port": "Cranberry Street 87",
                "company": "ZILLA",
                "email": "louiseparks@zilla.com",
                "responsible": "Ramsey Middleton",
                "from": "2014-06-09T22:42:14",
                "to": "2014-04-22T13:37:43"
            },
            {
                "id": 42,
                "name": "Biotica",
                "port": "Indiana Place 94",
                "company": "COREPAN",
                "email": "ramseymiddleton@corepan.com",
                "responsible": "Annmarie Byers",
                "from": "2014-10-12T23:39:58",
                "to": "2014-08-27T03:08:39"
            },
            {
                "id": 86,
                "name": "Canopoly",
                "port": "Times Placez 20",
                "company": "DIGINETIC",
                "email": "annmariebyers@diginetic.com",
                "responsible": "Garner Day",
                "from": "2014-05-05T22:52:11",
                "to": "2014-03-12T23:53:34"
            },
            {
                "id": 61,
                "name": "Comdom",
                "port": "Cambridge Place 66",
                "company": "DELPHIDE",
                "email": "garnerday@delphide.com",
                "responsible": "Christensen Farley",
                "from": "2014-07-08T08:55:40",
                "to": "2014-03-09T00:39:07"
            },
            {
                "id": 96,
                "name": "Quilch",
                "port": "Stockholm Street 2",
                "company": "XURBAN",
                "email": "christensenfarley@xurban.com",
                "responsible": "Odom King",
                "from": "2014-06-24T07:05:57",
                "to": "2014-05-16T21:14:00"
            },
            {
                "id": 91,
                "name": "Marketoid",
                "port": "Johnson Avenue 43",
                "company": "GLUID",
                "email": "odomking@gluid.com",
                "responsible": "Spears Robbins",
                "from": "2014-09-22T23:41:04",
                "to": "2014-06-04T18:19:17"
            },
            {
                "id": 44,
                "name": "Zensus",
                "port": "Morton Street 23",
                "company": "COMTRAK",
                "email": "spearsrobbins@comtrak.com",
                "responsible": "Blevins Sanders",
                "from": "2014-10-25T07:59:53",
                "to": "2014-06-24T06:25:30"
            },
            {
                "id": 16,
                "name": "Xinware",
                "port": "Windsor Place 50",
                "company": "IMANT",
                "email": "blevinssanders@imant.com",
                "responsible": "Maude Blake",
                "from": "2014-12-05T21:32:21",
                "to": "2014-11-20T14:50:39"
            },
            {
                "id": 37,
                "name": "Extrawear",
                "port": "Ridgewood Place 35",
                "company": "INSECTUS",
                "email": "maudeblake@insectus.com",
                "responsible": "Myrna Underwood",
                "from": "2014-08-11T19:21:13",
                "to": "2014-03-26T03:31:57"
            },
            {
                "id": 96,
                "name": "Phormula",
                "port": "Oceanic Avenue 39",
                "company": "ENDIPINE",
                "email": "myrnaunderwood@endipine.com",
                "responsible": "Rebecca Oneal",
                "from": "2014-11-05T16:14:57",
                "to": "2014-01-25T03:07:58"
            },
            {
                "id": 34,
                "name": "Ecratic",
                "port": "Campus Place 20",
                "company": "BLUEGRAIN",
                "email": "rebeccaoneal@bluegrain.com",
                "responsible": "Trudy Gray",
                "from": "2014-11-30T16:58:30",
                "to": "2014-11-25T14:21:55"
            },
            {
                "id": 41,
                "name": "Exospeed",
                "port": "Bridge Street 58",
                "company": "ELITA",
                "email": "trudygray@elita.com",
                "responsible": "Camille Dalton",
                "from": "2014-04-28T10:35:25",
                "to": "2014-08-01T06:34:55"
            },
            {
                "id": 37,
                "name": "Daido",
                "port": "Raleigh Place 67",
                "company": "EZENT",
                "email": "camilledalton@ezent.com",
                "responsible": "Hoffman Arnold",
                "from": "2014-02-12T08:16:03",
                "to": "2014-03-03T11:31:49"
            },
            {
                "id": 41,
                "name": "Geekwagon",
                "port": "Hudson Avenue 15",
                "company": "TERAPRENE",
                "email": "hoffmanarnold@teraprene.com",
                "responsible": "Phillips Cochran",
                "from": "2014-01-06T07:56:59",
                "to": "2014-03-15T10:11:25"
            },
            {
                "id": 84,
                "name": "Pivitol",
                "port": "Nichols Avenue 25",
                "company": "IPLAX",
                "email": "phillipscochran@iplax.com",
                "responsible": "Dollie Wall",
                "from": "2014-10-18T04:03:19",
                "to": "2014-08-03T22:11:00"
            },
            {
                "id": 13,
                "name": "Wazzu",
                "port": "Meserole Avenue 37",
                "company": "SLOFAST",
                "email": "dolliewall@slofast.com",
                "responsible": "Tamara Dotson",
                "from": "2014-01-22T02:30:09",
                "to": "2014-04-15T01:05:07"
            }
        ]
    };

    var loadData = function(){
        data = localStorage.getItem('handlebarsTable');
    };

    var saveData = function(){
        localStorage.setItem('handlebarsTable', JSON.stringify(data));
    };

    return {
        getData : function(){
            return data;
        }
    };
})();