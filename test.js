import test from 'ava';
import btoa from './index.js';

test('main', t => {
	t.is(btoa('Hello World'), 'SGVsbG8gV29ybGQ=');
});
