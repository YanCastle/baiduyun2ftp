import { FileSystem } from 'ftp-srv';
import PCS, * as bdapi from 'baidupanapi'
let pcs = new PCS(bdapi.create_username_password_jar_creator(process.argv[2], process.argv[2]))
let baiduyun = pcs.init.then()
export default class Baidu extends FileSystem {
    get(fileName: string) {

        // return pcs.download(this.root+this.currentDirectory+fileName,)
    }
}