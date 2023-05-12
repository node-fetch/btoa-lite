import {Buffer} from 'node:buffer';

export default function btoa(data) {
	return Buffer.from(data).toString('base64');
}
