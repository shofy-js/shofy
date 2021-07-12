import fs from 'fs';
import { join } from 'path';

export interface CreateIfNotExistsConfig {
	val: boolean;
	contents: string;
}

export default <T>(
	name: string,
	create_if_not_exists?: CreateIfNotExistsConfig
): null | T => {
	const cache_dir = join(__dirname, '..', '.cache');
	const cache_file = join(cache_dir, name + '.json');

	if (!fs.existsSync(cache_dir)) {
		if (create_if_not_exists?.val) fs.mkdirSync(cache_dir, { recursive: true });
		else return null;
	}

	if (!fs.existsSync(cache_file)) {
		if (create_if_not_exists?.val) {
			fs.writeFileSync(cache_file, create_if_not_exists.contents);
			return JSON.parse(create_if_not_exists.contents) as T;
		}

		return null;
	}

	return JSON.parse(fs.readFileSync(cache_file).toString()) as T;
};
