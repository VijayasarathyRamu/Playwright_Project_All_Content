export class logout{
 
    constructor(private page: any) { }
    async logout(){
        await this.page.getByRole('button', { name: 'Sign out' }).click();
    }
}