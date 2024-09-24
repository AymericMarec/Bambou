import {openDatabase } from 'react-native-sqlite-storage';
import SQLite from 'react-native-sqlite-storage';


// export const OpenDB = () => {
//     console.log(1)
//     SQLite.openDatabase({name: 'bankboo.db',location: 'default'})
//     .then((db)=> {
//         console.log('Database opened successfully');
//         createTableUser(db)
//         addUser("aymeric",18,db)
//         return db
//     })
//     .catch((error) => {
//         console.log(db)
//         console.log(error)
//       })
// }
export const OpenDB = () => {
    console.log(1);
    SQLite.openDatabase({ name: 'bankboo.db', location: 'default' })
        .then((db) => {
            console.log('Database opened successfully');
            createTableUser(db);
            addUser("aymeric", 18, db);
            return db;
        })
        .catch((error) => {
            console.log(db)
            console.error('Error opening database:', error); // Message d'erreur
            // Ne pas imprimer db ici car il est undefined
        });
}


export const getDBConnection = async () => {
    return openDatabase({name: 'pute.db', location: 'default'});
};

export const createTableUser = async (db) => {
    const tableName = "users"
    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
          name TEXT NOT NULL,
          age INTEGER
      );`;
  
    await db.executeSql(query);
};

export const addUser = (name, age,db) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO users (name, age) VALUES (?, ?)`,
        [name, age],
        (tx, result) => {
          console.log('User added successfully');
        },
        error => {
          console.log('Error while inserting: ', error);
        }
      );
    });
};
  
// addUser('John Doe', 30);
