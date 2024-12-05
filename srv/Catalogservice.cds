using db as db from '../db/schema';
service Catalogservice {
    entity Users as projection on db.Users;
}