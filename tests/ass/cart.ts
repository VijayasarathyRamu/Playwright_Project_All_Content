export class cart{
 
    constructor(private page: any) { }
   
    async checkout(firstName:string,lastName:string,postalCode:number) {
        await this.page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        await this.page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
        await this.page.getByRole('link', { name: '2' }).click();
        await this.page.getByRole('link', { name: 'CHECKOUT' }).click();
        await this.page.locator('[data-test="firstName"]').click();
        await this.page.locator('[data-test="firstName"]').fill(firstName);
        await this.page.locator('[data-test="lastName"]').click();
        await this.page.locator('[data-test="lastName"]').fill(lastName);
        await this.page.locator('[data-test="postalCode"]').click();
        await this.page.locator('[data-test="postalCode"]').fill(postalCode);
        await this.page.getByRole('button', { name: 'CONTINUE' }).click();
        await this.page.getByRole('link', { name: 'FINISH' }).click();
    }
 
}



 
