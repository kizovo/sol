import { error } from '@sveltejs/kit';

const base = 'https://api.realworld.io/api';

async function send({ method = '', path = '', data = {}, token = '' }) {
	const opts = {
		method,
		headers: {
			'Content-Type': '',
			Authorization: ''
		},
		body: ''
	};

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Token ${token}`;
	}

	const res = await fetch(`${base}/${path}`, opts);
	if (res.ok || res.status === 422) {
		const text = await res.text();
		return text ? JSON.parse(text) : {};
	}

	throw error(res.status);
}

export function get(path: string, token: string) {
	return send({ method: 'GET', path, token });
}

export function del(path: string, token: string) {
	return send({ method: 'DELETE', path, token });
}

export function post(path: string, data: any, token: string) {
	return send({ method: 'POST', path, data, token });
}

export function put(path: string, data: any, token: string) {
	return send({ method: 'PUT', path, data, token });
}
