//Dummy Data
//Data based on postman query to : http://opentable.herokuapp.com/api/restaurants?city=San+Francisco
//Raw
let rawDataOP = [
        {
            "id": 151612,
            "name": "Perry's Union Street",
            "address": "1944 Union Street",
            "city": "San Francisco",
            "state": "CA",
            "area": "San Francisco Bay Area",
            "postal_code": "94123",
            "country": "US",
            "phone": "4159229022",
            "lat": 37.797904,
            "lng": -122.431332,
            "price": 2,
            "reserve_url": "http://www.opentable.com/single.aspx?rid=151612",
            "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=151612",
            "image_url": "https://www.opentable.com/img/restimages/151612.jpg"
        },
        {
            "id": 141049,
            "name": "Trou Normand",
            "address": "140 New Montgomery Street",
            "city": "San Francisco",
            "state": "CA",
            "area": "San Francisco Bay Area",
            "postal_code": "94103",
            "country": "US",
            "phone": "4159750876",
            "lat": 37.786664,
            "lng": -122.399773,
            "price": 2,
            "reserve_url": "http://www.opentable.com/single.aspx?rid=141049",
            "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=141049",
            "image_url": "https://www.opentable.com/img/restimages/141049.jpg"
        },
        {
            "id": 22792,
            "name": "Fishermen's Grotto #9",
            "address": "2847 Taylor Street",
            "city": "San Francisco",
            "state": "CA",
            "area": "San Francisco Bay Area",
            "postal_code": "94133",
            "country": "US",
            "phone": "4156737025",
            "lat": 37.808407,
            "lng": -122.415845,
            "price": 2,
            "reserve_url": "http://www.opentable.com/single.aspx?rid=22792",
            "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=22792",
            "image_url": "https://www.opentable.com/img/restimages/22792.jpg"
        },
        {
            "id": 50962,
            "name": "Sons & Daughters",
            "address": "708 Bush Street",
            "city": "San Francisco",
            "state": "CA",
            "area": "San Francisco Bay Area",
            "postal_code": "94108",
            "country": "US",
            "phone": "4153918311",
            "lat": 37.790138,
            "lng": -122.40908,
            "price": 4,
            "reserve_url": "http://www.opentable.com/single.aspx?rid=50962",
            "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=50962",
            "image_url": "https://www.opentable.com/img/restimages/50962.jpg"
        },
        {
            "id": 4121,
            "name": "Ristobar",
            "address": "2300 Chestnut St",
            "city": "San Francisco",
            "state": "CA",
            "area": "San Francisco Bay Area",
            "postal_code": "94123",
            "country": "US",
            "phone": "4159236464x",
            "lat": 37.80035,
            "lng": -122.441486,
            "price": 2,
            "reserve_url": "http://www.opentable.com/single.aspx?rid=4121",
            "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=4121",
            "image_url": "https://www.opentable.com/img/restimages/4121.jpg"
        },
        {
            "id": 6001,
            "name": "Mamacita",
            "address": "2317 Chestnut St",
            "city": "San Francisco",
            "state": "CA",
            "area": "San Francisco Bay Area",
            "postal_code": "94123",
            "country": "US",
            "phone": "4153468494",
            "lat": 37.799953,
            "lng": -122.44147,
            "price": 2,
            "reserve_url": "http://www.opentable.com/single.aspx?rid=6001",
            "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=6001",
            "image_url": "https://www.opentable.com/img/restimages/6001.jpg"
        },
        {
            "id": 149539,
            "name": "KUSAKABE",
            "address": "584 Washington Street",
            "city": "San Francisco",
            "state": "CA",
            "area": "San Francisco Bay Area",
            "postal_code": "94111",
            "country": "US",
            "phone": "4157570155",
            "lat": 37.795597,
            "lng": -122.402963,
            "price": 4,
            "reserve_url": "http://www.opentable.com/single.aspx?rid=149539",
            "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=149539",
            "image_url": "https://www.opentable.com/img/restimages/149539.jpg"
        },
        {
            "id": 7742,
            "name": "The Oak Room - The Westin St. Francis",
            "address": "335 Powell St",
            "city": "San Francisco",
            "state": "CA",
            "area": "San Francisco Bay Area",
            "postal_code": "94102",
            "country": "US",
            "phone": "4157740264",
            "lat": 37.787978,
            "lng": -122.408365,
            "price": 2,
            "reserve_url": "http://www.opentable.com/single.aspx?rid=7742",
            "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=7742",
            "image_url": "https://www.opentable.com/img/restimages/7742.jpg"
        }
]

//Massaged to include reservations array of reservation objects. Each reservation object has a time and people number
let massagedDataOP = [
    {
        "id": 151612,
        "name": "Perry's Union Street",
        "address": "1944 Union Street",
        "city": "San Francisco",
        "state": "CA",
        "area": "San Francisco Bay Area",
        "postal_code": "94123",
        "country": "US",
        "phone": "4159229022",
        "lat": 37.797904,
        "lng": -122.431332,
        "price": 2,
        "reserve_url": "http://www.opentable.com/single.aspx?rid=151612",
        "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=151612",
        "image_url": "https://www.opentable.com/img/restimages/151612.jpg",
        "reservations": [{
            "time":"2017-11-20T19:30:00Z",
            "people": 6},{
            "time":"2017-11-20T20:00:00Z",
            "people": 4}]
    },
    {
        "id": 141049,
        "name": "Trou Normand",
        "address": "140 New Montgomery Street",
        "city": "San Francisco",
        "state": "CA",
        "area": "San Francisco Bay Area",
        "postal_code": "94103",
        "country": "US",
        "phone": "4159750876",
        "lat": 37.786664,
        "lng": -122.399773,
        "price": 2,
        "reserve_url": "http://www.opentable.com/single.aspx?rid=141049",
        "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=141049",
        "image_url": "https://www.opentable.com/img/restimages/141049.jpg",
        "reservations": [{
            "time":"2017-11-20T19:30:00Z",
            "people": 6},{
            "time":"2017-11-20T20:00:00Z",
            "people": 4}]
    },
    {
        "id": 22792,
        "name": "Fishermen's Grotto #9",
        "address": "2847 Taylor Street",
        "city": "San Francisco",
        "state": "CA",
        "area": "San Francisco Bay Area",
        "postal_code": "94133",
        "country": "US",
        "phone": "4156737025",
        "lat": 37.808407,
        "lng": -122.415845,
        "price": 2,
        "reserve_url": "http://www.opentable.com/single.aspx?rid=22792",
        "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=22792",
        "image_url": "https://www.opentable.com/img/restimages/22792.jpg",
        "reservations": [{
            "time":"2017-11-20T19:30:00Z",
            "people": 6},{
            "time":"2017-11-20T20:00:00Z",
            "people": 4}]
    },
    {
        "id": 50962,
        "name": "Sons & Daughters",
        "address": "708 Bush Street",
        "city": "San Francisco",
        "state": "CA",
        "area": "San Francisco Bay Area",
        "postal_code": "94108",
        "country": "US",
        "phone": "4153918311",
        "lat": 37.790138,
        "lng": -122.40908,
        "price": 4,
        "reserve_url": "http://www.opentable.com/single.aspx?rid=50962",
        "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=50962",
        "image_url": "https://www.opentable.com/img/restimages/50962.jpg",
        "reservations": [{
            "time":"2017-11-20T19:30:00Z",
            "people": 6},{
            "time":"2017-11-20T20:00:00Z",
            "people": 4}]
    },
    {
        "id": 4121,
        "name": "Ristobar",
        "address": "2300 Chestnut St",
        "city": "San Francisco",
        "state": "CA",
        "area": "San Francisco Bay Area",
        "postal_code": "94123",
        "country": "US",
        "phone": "4159236464x",
        "lat": 37.80035,
        "lng": -122.441486,
        "price": 2,
        "reserve_url": "http://www.opentable.com/single.aspx?rid=4121",
        "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=4121",
        "image_url": "https://www.opentable.com/img/restimages/4121.jpg",
        "reservations": [{
            "time":"2017-11-20T19:30:00Z",
            "people": 6},{
            "time":"2017-11-20T20:00:00Z",
            "people": 4}]
    },
    {
        "id": 6001,
        "name": "Mamacita",
        "address": "2317 Chestnut St",
        "city": "San Francisco",
        "state": "CA",
        "area": "San Francisco Bay Area",
        "postal_code": "94123",
        "country": "US",
        "phone": "4153468494",
        "lat": 37.799953,
        "lng": -122.44147,
        "price": 2,
        "reserve_url": "http://www.opentable.com/single.aspx?rid=6001",
        "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=6001",
        "image_url": "https://www.opentable.com/img/restimages/6001.jpg",
        "reservations": [{
            "time":"2017-11-20T19:30:00Z",
            "people": 6},{
            "time":"2017-11-20T20:00:00Z",
            "people": 4}]
    },
    {
        "id": 149539,
        "name": "KUSAKABE",
        "address": "584 Washington Street",
        "city": "San Francisco",
        "state": "CA",
        "area": "San Francisco Bay Area",
        "postal_code": "94111",
        "country": "US",
        "phone": "4157570155",
        "lat": 37.795597,
        "lng": -122.402963,
        "price": 4,
        "reserve_url": "http://www.opentable.com/single.aspx?rid=149539",
        "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=149539",
        "image_url": "https://www.opentable.com/img/restimages/149539.jpg",
        "reservations": [{
            "time":"2017-11-20T19:30:00Z",
            "people": 6},{
            "time":"2017-11-20T20:00:00Z",
            "people": 4}]
    },
    {
        "id": 7742,
        "name": "The Oak Room - The Westin St. Francis",
        "address": "335 Powell St",
        "city": "San Francisco",
        "state": "CA",
        "area": "San Francisco Bay Area",
        "postal_code": "94102",
        "country": "US",
        "phone": "4157740264",
        "lat": 37.787978,
        "lng": -122.408365,
        "price": 2,
        "reserve_url": "http://www.opentable.com/single.aspx?rid=7742",
        "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=7742",
        "image_url": "https://www.opentable.com/img/restimages/7742.jpg",
        "reservations": [{
            "time":"2017-11-20T19:30:00Z",
            "people": 6},{
            "time":"2017-11-20T20:00:00Z",
            "people": 4}]
    }
]

let massagedDataYelp = {
    "businesses": [
        {
            "id": "fog-harbor-fish-house-san-francisco-2",
            "name": "Fog Harbor Fish House",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/DemnQQ9M05jXzjD_cxF81A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/fog-harbor-fish-house-san-francisco-2?adjust_creative=rvexlWGWfhIn-9lICYTnNA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rvexlWGWfhIn-9lICYTnNA",
            "review_count": 3667,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "bars",
                    "title": "Bars"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.80873,
                "longitude": -122.410428
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Pier 39",
                "address2": "Ste A-202",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94133",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "Pier 39",
                    "Ste A-202",
                    "San Francisco, CA 94133"
                ]
            },
            "phone": "+14154212442",
            "display_phone": "(415) 421-2442",
            "distance": 5789.203322139542,
            "reservations": [{
                "time":"2017-11-20T19:30:00Z",
                "people": 7},{
                "time":"2017-11-20T20:00:00Z",
                "people": 4}]
        },
        {
            "id": "the-house-san-francisco",
            "name": "The House",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/K48sSeIuHURatMBrSTfOTg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-house-san-francisco?adjust_creative=rvexlWGWfhIn-9lICYTnNA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rvexlWGWfhIn-9lICYTnNA",
            "review_count": 4132,
            "categories": [
                {
                    "alias": "asianfusion",
                    "title": "Asian Fusion"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7986203,
                "longitude": -122.4070251
            },
            "transactions": [
                "restaurant_reservation"
            ],
            "price": "$$$",
            "location": {
                "address1": "1230 Grant Ave",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94133",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1230 Grant Ave",
                    "San Francisco, CA 94133"
                ]
            },
            "phone": "+14159868612",
            "display_phone": "(415) 986-8612",
            "distance": 4911.92893166815,
            "reservations": [{
                "time":"2017-11-20T19:30:00Z",
                "people": 6},{
                "time":"2017-11-20T20:00:00Z",
                "people": 3}]
        },
        {
            "id": "brendas-french-soul-food-san-francisco",
            "name": "Brenda's French Soul Food",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/YT8ho02lCT6Ubu3vx8uCaw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/brendas-french-soul-food-san-francisco?adjust_creative=rvexlWGWfhIn-9lICYTnNA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rvexlWGWfhIn-9lICYTnNA",
            "review_count": 8471,
            "categories": [
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                },
                {
                    "alias": "french",
                    "title": "French"
                },
                {
                    "alias": "soulfood",
                    "title": "Soul Food"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7829016035273,
                "longitude": -122.419043442957
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "652 Polk St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94102",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "652 Polk St",
                    "San Francisco, CA 94102"
                ]
            },
            "phone": "+14153458100",
            "display_phone": "(415) 345-8100",
            "distance": 2885.389130953204,
            "reservations": [{
                "time":"2017-11-20T19:30:00Z",
                "people": 5},{
                "time":"2017-11-20T20:00:00Z",
                "people": 2}]
        },
        {
            "id": "hog-island-oyster-co-san-francisco",
            "name": "Hog Island Oyster Co",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/lm8OpdFI1UrHrI0bN074iA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hog-island-oyster-co-san-francisco?adjust_creative=rvexlWGWfhIn-9lICYTnNA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rvexlWGWfhIn-9lICYTnNA",
            "review_count": 4628,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "seafoodmarkets",
                    "title": "Seafood Markets"
                },
                {
                    "alias": "raw_food",
                    "title": "Live/Raw Food"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.795831,
                "longitude": -122.393303
            },
            "transactions": [
                "restaurant_reservation"
            ],
            "price": "$$",
            "location": {
                "address1": "1 Ferry Bldg",
                "address2": "",
                "address3": "Shop 11",
                "city": "San Francisco",
                "zip_code": "94111",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1 Ferry Bldg",
                    "Shop 11",
                    "San Francisco, CA 94111"
                ]
            },
            "phone": "+14153917117",
            "display_phone": "(415) 391-7117",
            "distance": 5428.156706690052,
            "reservations": [{
                "time":"2017-11-20T19:30:00Z",
                "people": 6},{
                "time":"2017-11-20T20:00:00Z",
                "people": 4}]
        }
    ]
}


let rawDataYelp = [
        {
            "id": "fog-harbor-fish-house-san-francisco-2",
            "name": "Fog Harbor Fish House",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/DemnQQ9M05jXzjD_cxF81A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/fog-harbor-fish-house-san-francisco-2?adjust_creative=rvexlWGWfhIn-9lICYTnNA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rvexlWGWfhIn-9lICYTnNA",
            "review_count": 3667,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "bars",
                    "title": "Bars"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.80873,
                "longitude": -122.410428
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Pier 39",
                "address2": "Ste A-202",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94133",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "Pier 39",
                    "Ste A-202",
                    "San Francisco, CA 94133"
                ]
            },
            "phone": "+14154212442",
            "display_phone": "(415) 421-2442",
            "distance": 5789.203322139542,

        },
        {
            "id": "the-house-san-francisco",
            "name": "The House",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/K48sSeIuHURatMBrSTfOTg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-house-san-francisco?adjust_creative=rvexlWGWfhIn-9lICYTnNA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rvexlWGWfhIn-9lICYTnNA",
            "review_count": 4132,
            "categories": [
                {
                    "alias": "asianfusion",
                    "title": "Asian Fusion"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7986203,
                "longitude": -122.4070251
            },
            "transactions": [
                "restaurant_reservation"
            ],
            "price": "$$$",
            "location": {
                "address1": "1230 Grant Ave",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94133",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1230 Grant Ave",
                    "San Francisco, CA 94133"
                ]
            },
            "phone": "+14159868612",
            "display_phone": "(415) 986-8612",
            "distance": 4911.92893166815
        },
        {
            "id": "brendas-french-soul-food-san-francisco",
            "name": "Brenda's French Soul Food",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/YT8ho02lCT6Ubu3vx8uCaw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/brendas-french-soul-food-san-francisco?adjust_creative=rvexlWGWfhIn-9lICYTnNA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rvexlWGWfhIn-9lICYTnNA",
            "review_count": 8471,
            "categories": [
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                },
                {
                    "alias": "french",
                    "title": "French"
                },
                {
                    "alias": "soulfood",
                    "title": "Soul Food"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7829016035273,
                "longitude": -122.419043442957
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "652 Polk St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94102",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "652 Polk St",
                    "San Francisco, CA 94102"
                ]
            },
            "phone": "+14153458100",
            "display_phone": "(415) 345-8100",
            "distance": 2885.389130953204
        },
        {
            "id": "hog-island-oyster-co-san-francisco",
            "name": "Hog Island Oyster Co",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/lm8OpdFI1UrHrI0bN074iA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hog-island-oyster-co-san-francisco?adjust_creative=rvexlWGWfhIn-9lICYTnNA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=rvexlWGWfhIn-9lICYTnNA",
            "review_count": 4628,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "seafoodmarkets",
                    "title": "Seafood Markets"
                },
                {
                    "alias": "raw_food",
                    "title": "Live/Raw Food"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.795831,
                "longitude": -122.393303
            },
            "transactions": [
                "restaurant_reservation"
            ],
            "price": "$$",
            "location": {
                "address1": "1 Ferry Bldg",
                "address2": "",
                "address3": "Shop 11",
                "city": "San Francisco",
                "zip_code": "94111",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1 Ferry Bldg",
                    "Shop 11",
                    "San Francisco, CA 94111"
                ]
            },
            "phone": "+14153917117",
            "display_phone": "(415) 391-7117",
            "distance": 5428.156706690052
        }
    ]





module.exports = {
    rawDataOP: rawDataOP,
    massagedDataOP:massagedDataOP,
    rawDataYelp:rawDataYelp,
    massagedDataYelp:massagedDataYelp
}