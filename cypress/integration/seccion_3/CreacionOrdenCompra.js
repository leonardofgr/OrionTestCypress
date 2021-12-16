/// <reference types='cypress-xpath' />

describe("Informe QA en Orion Web", ()=>{
    it ("El usuario crea una orden de compra",()=>{
        cy.visit('http://oriontest.mitrebol.cl/login')
        cy.get('#email').type('vortiz@helpcom.cl')
        cy.get('#password').type('123456')
        //click en boton entrar
        cy.xpath("//body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/button[1]").click({force:true})
        cy.wait(3000)
        //click en Gestion Comercial
        cy.get(':nth-child(4) > .text-center > p').click({force:true})
        //click en gestion compras
        cy.get(':nth-child(1) > .text-success > img').click({force:true})
        //tiempo de espera pantalla de carga
        cy.wait(15000)
        //click en logo azul(orden de compra)
        cy.xpath("/html[1]/body[1]/div[4]/div[2]/div[1]/nav[1]/form[1]/a[1]/button[1]").click({force:true})
        //tiempo de espera para carga de pantalla ordenes de compra existentes
        cy.wait(250000)
        //click en boton nueva orden de compra
        cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/a[1]").click({force:true})
        cy.wait(5000)
        //Seleccionar razon social
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/select[1]").select('COMERCIAL AMAR HERMANOS Y COMPANIA LIMITADA')
        //Seleccionar tipo recepto
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/select[1]").select('Centro de Distribución')
        //Seleccionar razon social de empresa proveedora
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/select[1]").select('AGROINDUSTRIAL Y COMERCIAL LOS CIPRESES LIMITADA')
        //Seleccionar sucursal proveedor
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[5]/div[1]/select[1]").select('CASA MASA MATRIZ')
        //Seleccionar division
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[6]/div[1]/select[1]").contains('CASA MASA')
        //Seleccionar sucural empresa emisor
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/input[1]").click()
        cy.xpath("/html[1]/body[1]/div[6]/div[1]/div[1]/ul[1]/li[2]").contains('BARROS ARANA').click()
        cy.xpath("/html[1]/body[1]/nav[1]/div[1]").click()
      
        //click en lugar vacio para saltar focus
        cy.wait(5000)
        //cypress.xpath("//body/div[@id='wrapper']/div[@id='page-content-wrapper']/div[@id='app']/div[@id='app']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]")

        //seccion de condiciones globales
        //seleccione solicitud de ...
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[1]/select[1]").select('OC de mercadería')
        //Seleccione lista de costo
        cy.xpath("//html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[3]/div[1]/select[1]").select('2021-03-30 2021-03-30 lista costo casa masa 26-11 P3')
        //Ingresar una observacion de orden compra
        cy.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[7]/div[1]/textarea[1]").type('Esto es un texto de prueba para una orden de compra ˙ ‥ ‧ ‵ ❛ ❜ ❝ ❞ 、 。 〃 「 」 『 』 〝 〞 ︰ ﹁ ﹂ ﹃ ﹄ ﹐ ﹒ ﹔ ﹕ ！ ＃ ＄ ％ ＆ ＊ ， ． ： ； ？ ＠ ～ • … ¿ “ ‘ · ′ ” ’ ‐ ‑ ‒ – — ― ‗ ‚ ‛ „ ‟ ‣ ․ ″ ‴ ‶ ‷ ʹ ʺ ʻ ʼ ʽ ʾ ʿ ˀ ˁ ˂ ˃ ˄ ˅ ˆ ˇ ˈ ˉ ˊ ˋ ˌ ˍ ˎ ˏ ː ˑ ˒ ˓ ˔ ˕ ˖ ˗ ˘ ˚ ˛ ˜ ˝ ˞ ˠ ˡ ⁘ ⁙ ⁚ ⁛ ⁜ ⁜ ⁝ ⁞₮ ৲ ৳ ௹ ฿ ៛ ₠ ₡ ₢ ₣ ₤ ₥ ₦ ₧ ₨ ₩ ₪ ₫ ₭ ₯ ₰ ₱ ₲ ₳ ₴ ₵ ≋ ￥ ﷼ ¢ ¤ € ƒ £ ¥ Ұ $ 元 ރ 円 z ł K č र ૱ ₶ ₷ ₹ ㍐ 圆 圎 圓 圜 ＄ ￠ ￡ ￦↕ ↖ ↗ ↘ ↙ ↚ ↛ ↜ ↝ ↞ ↟ ↠ ↡ ↢ ↣ ↤ ↥ ↦ ↧ ↨ ↩ ↪ ↫ ↬ ↭ ↮ ↯ ↰ ↱ ↲ ↳ ↴ ↶ ↷ ↸ ↹ ↺ ↻ ↼ ↽ ↾ ↿ ⇀ ⇁ ⇂ ⇃ ⇄ ⇅ ⇆ ⇇ ⇈ ⇉ ⇊ ⇋ ⇌ ⇍ ⇎ ⇏ ⇕ ⇖ ⇗ ⇘ ⇙ ⇚ ⇛ ⇜ ⇝ ⇞ ⇟ ⇠ ⇡ ⇢ ⇣ ⇤ ⇥ ⇦ ⇧ ⇨ ⇩ ⇪ ⌅ ⌆ ⌤ ⏎ ▶ ☇ ☈ ☊ ☋ ☌ ☍ ➔ ➘ ➙ ➚ ➛ ➜ ➝ ➞ ➟ ➠ ➡ ➢ ➣ ➤ ➥ ➦ ➧ ➨ ➩ ➪ ➫ ➬ ➭ ➮ ➯ ➱ ➲ ➳ ➴ ➵ ➶ ➷ ➸ ➹ ➺ ➻ ➼ ➽ ➾ ⤴ ⤵ ↵ ↓ ↔ ← → ↑→ ↑  ⇐ ⇑ ⇒ ⇓ ⇔ ⌦ ⌧ ⌫ ⇰ ⇫ ⇬ ⇭ ⇳ ⇮ ⇯ ⇱ ⇲ ⇴ ⇵ ⇶ ⇷ ⇸ ⇹ ⇺ ⟵ ⟶ ⟷ ⬄ ⬀ ⬁ ⬂ ⬃ ⬅ ⮕ ⬆ ⬇ ⬈ ⬉ ⬊ ⬋ ⬌ ⬍ ⇽ ⇾ ⇿ ⬳ ⟿ ⤉ ⤈ ⇻ ⇼ ⬴ ⤀ ⬵ ⤁ ⬹ ⤔ ⬺ ⤕ ⬶ ⤅ ⬻ ⤖ ⬷ ⤐ ⬼ ⤗ ⬽ ⤘ ⤝ ⤞ ⤟ ⤠ ⤡ ⤢ ⤣ ⤤ ⤥ ⤦ ⤪ ⤨ ⤧ ⤩ ⤭ ⤮ ⤯ ⤰ ⤱ ⤲ ⤫ ⤬ ⬐ ⬎ ⬑ ⬏ ⤶ ⤷ ⥂ ⥃ ⥄ ⭀ ⥱ ⥶ ⥸ ⭂ ⭈ ⭊ ⥵ ⭁ ⭇ ⭉ ⥲ ⭋ ⭌ ⥳ ⥴ ⥆ ⥅ ⥹ ⥻ ⬰ ⥈ ⬾ ⥇ ⬲ ⟴ ⥷ ⭃ ⥺ ⭄ ⥉ ⥰ ⬿ ⤳ ⥊ ⥋ ⥌ ⥍ ⥎ ⥏ ⥐ ⥑ ⥒ ⥓ ⥔ ⥕ ⥖ ⥗ ⥘ ⥙ ⥚ ⥛ ⥜ ⥝ ⥞ ⥟ ⥠ ⥡ ⥢ ⥤ ⥣ ⥥ ⥦ ⥨ ⥧ ⥩ ⥮ ⥯ ⥪ ⥬ ⥫ ⥭ ⤌ ⤍ ⤎ ⤏ ⬸ ⤑ ⬱ ⟸ ⟹ ⟺ ⤂ ⤃ ⤄ ⤆ ⤇ ⤊ ⤋ ⭅ ⭆ ⟰ ⟱ ⟻ ⟼ ⤒ ⤓ ⤙ ⤚ ⤛ ⤜ ⥼ ⥽ ⥾ ⥿ ⤼ ⤽ ⤾ ⤿ ⤸ ⤺ ⤹ ⤻ ⥀ ⥁ ⟲ ⟳ ⮍ ⮌ ⮏ ⮎ ⮔ ◄ ► ◅ ▻ ◀ ▲ ▼ ⌃ ⌄ ⮹')
        




      




        



    })
  
})
