const fs = require('fs');
const path = require('path');

class Provider {
    constructor(){
        this._cache = null;
        this.dataFile = path.join(__dirname,'..','..','data','item.json')
    }

    async getItems() {
        if(this._cache){
            return this._cache;
        }

        try {
            fs.accessSync(this.dataFile);
        } catch {
            this._cache = [];
            return this._cache;
        }

        const files$ = fs.createReadStream(this.dataFile, {encoding: 'utf-8'});
        const data = await new Promise((res,rej) => {
            let result = '';
            files$.on('data', data => {
                result += data;
            });

            files$.on('end', () => {
                res(result);
            });

            files$.on('error', rej);
        });
        this._cache = JSON.parse(data);
        return this._cache;
    }

    async setItem(item) {
        if(!this._cache){
            this._cache = await this.getItems();
        }
        this._cache.push(item);
        const files$ = fs.createWriteStream(this.dataFile, {encoding: 'utf-8'});

        files$.end(JSON.stringify(this._cache));
        return this._cache;
    }
}
const itemsData = new Provider();
module.exports = itemsData;