export class RandomString {

    characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    randomEmail = () => {

        let result:string = '';
        const charactersLength = this.characters.length;
        for (let i = 0; i < 10; i++) {
            result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;

    }

}