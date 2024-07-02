import crypto from "crypto"

export const saltAndHashPassword = (password) => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, "salt", 1000, 64, 'sha512', (err, derivedKey) => {
            if (err) reject(err);
            resolve({ hashedPassword: derivedKey.toString('hex') });
        });
    });
};