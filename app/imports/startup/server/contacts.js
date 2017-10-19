import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactsSeeds = [
  { first: 'John', last: 'Kea', address: '2323 Wili Rd.', telephone: '(808)425-2345', email: 'kea@john.com' },
  { first: 'Weird', last: 'Al', address: '2323 Wili Rd.', telephone: '(808)425-2445', email: 'weird@al.com' },
  { first: 'Shea', last: 'Butter', address: '2323 Wili Rd.', telephone: '(808)425-2545', email: 'shea@butter.com' },
  { first: 'Tyler', last: 'Creator', address: '2323 Wili Rd.', telephone: '(808)425-2645', email: 'tyler@creator.com' },
  { first: 'Lil', last: 'Pizza', address: '2323 Wili Rd.', telephone: '(808)425-2745', email: 'lil@pizza.com' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactsSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
