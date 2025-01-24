import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {


    static load() {

        return read()
            .then((data) => {
                return json(data)
            }).then((value) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(value);
                    }, 500);
                });
            }); 
    }
}
