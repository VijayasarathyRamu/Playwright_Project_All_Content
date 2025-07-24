export class login{
    constructor(private page: any) { }
    async goto() {
        await this.page.goto("https://ess.changepond.com/#/login")
    }
    async login(username: string, password: string) {
        await this.page.getByRole('textbox', { name: 'User Id' }).click();
        await this.page.getByRole('textbox', { name: 'User Id' }).fill(username);
        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Submit' }).click();
        }
}