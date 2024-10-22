
import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = constants => writeFile(PATH_DB, JSON.stringify(constants, null, 2));
