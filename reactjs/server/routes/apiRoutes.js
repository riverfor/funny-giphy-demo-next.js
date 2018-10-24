const express = require('express');
const router = express.Router();
const request = require('superagent');
const environment = 'development';
const config = require("../../knexfile.js")[environment];
const knex = require("knex")(config);


const async = require('async');

function randNum(min, max, num) {
	var arr = [],
		t;

	function fn(i) {
		for (i; i < num; i++) {
			t = parseInt(Math.random() * (max - min + 1) + min);
			for (var k in arr) {
				if (arr[k] == t) {
					fn(i);
					break;
				}
			}
			arr[i] = t;
		}
	}
	fn(0);
	return arr
}

router.get('/test', (req, res) => {
	res.status(200).json({
		msg: 'success'
	})
})


router.get('/search', (req, res) => {
	const page = req.query.page
	knex('img_object').where('title', 'like', `%${req.query.s}%`).limit(12).offset((page - 1) * 12).then((data) => {
		knex('img_object').where('title', 'like', `%${req.query.s}%`).then((count) => {
			res.status(200).json({
				data,
				count: count.length / 12
			});
		})
	})
});

router.get('/random', (req, res) => {
	knex('img_object').count('tag').then((data) => {
		const count = JSON.parse(JSON.stringify(data))[0].count;
		const ids = randNum(0, count, count <= 12 ? count : 12)
		knex('img_object').where(builder => {
			builder.whereIn('id', ids)
		}).then((data) => {
			res.status(200).json({
				data
			});
		})

	})
});

router.get('/artist/:id', (req, res) => {
	async.auto({
		artist: function(callback) {
			request
				.get('https://api.spotify.com/v1/artists/' + req.params.id)
				.end((err, response) => callback(err, response.body));
		},
		albums: ['artist', (results, callback) => {
			request
				.get('https://api.spotify.com/v1/artists/' + req.params.id + '/albums')
				.query({
					album_type: 'album',
					limit: req.query.limit,
					offset: req.query.offset
				})
				.end((err, response) => {
					callback(err, {
						'items': response.body.items,
						'limit': response.body.limit,
						'offset': response.body.offset,
						'total': response.body.total
					});
				});
		}]
	}, (err, results) => {
		if (err) {
			return res.status(500).json(err);
		}
		res.status(200).json(results);
	});
});

router.get('/album/:id', (req, res) => {
	request
		.get('https://api.spotify.com/v1/albums/' + req.params.id)
		.end((err, response) => {
			if (err) {
				return res.status(500).json(err);
			}
			res.status(200).json(response.body);
		});
});

module.exports = router;
