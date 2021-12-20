/// <reference types="Cypress"/>

const { should } = require("chai");

//import 'cypress-file-upload';
//require ('@4tw/cypress-drag-drop')
require("cypress-xpath");
require("cypress-plugin-tab");

describe("Api consulta GET", () => {
  let datos;

  it("test api get metodo 1 ", () => {
    datos = cy.request("http://localhost:3000/posts");
    datos.its("status").should("equal", 200);
  });
  it("test api resto metodo 2 ", () => {
    datos = cy.request("http://localhost:3000/posts").should((Response) => {
      expect(Response.status).to.equal(200);
    });
  });

  it("metodo 3 GET ", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let datos;
      datos = JSON.parse(JSON.stringify(response.body));

      expect(datos[0]).has.property("title", "Cypres");
      expect(datos[0]).has.property("author", "Leonardo");
    });
  });

  it("metodo 4 POST ", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        id: 4,
        title: "Javascript",
        author: "Armando Casas",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
  
  
 it("Insertar multiples valores a la api", () => {
    for(let x=1;x<=10;x++)
    {
        let randomString =Math.random().toString(10)
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        id: 16+x,
        title: randomString,
        author: "Sacarias flores del campo",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
    }   
  });
  
});
