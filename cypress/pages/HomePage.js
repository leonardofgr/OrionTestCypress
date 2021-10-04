class homePage {


    elemets = {
        userMail : () => cy.get('#email'),
        userPasswoord: () => cy.get('#password'),
        loginBtn : () => cy.xpath("//body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/button[1]")
    }
    typeUserMail (user){
        this.elemets.userMail().type(user)
    }
    typeUserPasswoord (passwoord){
        this.elemets.userPasswoord().type(passwoord)
    }
    pressLoginBtn(){
        this.elemets.loginBtn().click()
    }
}
module.exports= new homePage()