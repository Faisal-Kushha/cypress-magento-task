/// <reference types= "cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

// describe("template spec", () => {
//   it("passes", () => {
//     cy.visit("https://magento.softwaretestingboard.com/");

//     let itemsToSelect = ["Women", "Men", "Gear"];

//     let RandomIndex = Math.floor(Math.random() * itemsToSelect.length);
//     cy.contains(itemsToSelect[RandomIndex]).click({ force: true });

//     let RandomItem = Math.floor(Math.random() * 4);
//     cy.get(".product-items").find(".product-item").eq(RandomItem).click();

//     let RandomSize = Math.floor(Math.random() * 2);
//     let RandomColor = Math.floor(Math.random() * 2);

//     if (RandomIndex == 0) {
//       cy.get(".swatch-attribute-options")
//         .find("div.swatch-option.text")
//         .eq(RandomSize)
//         .click();

//       cy.get(".swatch-attribute-options")
//         .find("div.swatch-option.color")
//         .eq(RandomColor)
//         .click();

//       cy.wait(2000);

//       cy.get("#product-addtocart-button").click();

//       cy.wait(1000);
//     } else {
//       cy.get(".stock > span")
//         .invoke("text")
//         .then((theText) => {
//           if (theText == "In stock") {
//             cy.get("#product-addtocart-button").click();
//           } else {
//             alert("This item is not in the stock");
//           }
//         });
//     }
//   });
// });
Cypress.Commands.add("Add_items", () => {
  let RandomItem = Math.floor(Math.random() * 4);
  cy.get(".product-items").find(".product-item").eq(RandomItem).click();

  let RandomSize = Math.floor(Math.random() * 2);

  cy.get(".swatch-attribute-options")
    .find("div.swatch-option.text")
    .eq(RandomSize)
    .click();

  let RandomColor = Math.floor(Math.random() * 2);

  cy.get(".swatch-attribute-options")
    .find("div.swatch-option.color")
    .eq(RandomColor)
    .click();

  cy.wait(2000);

  cy.get(".stock > span")
    .invoke("text")
    .then((theText) => {
      if (theText == "In stock") {
        cy.get("#product-addtocart-button").click();
      } else {
        alert("This item is not in the stock");
      }
    });
  cy.wait(4000);
});

describe.skip("Add a random item to the cart", () => {
  it("Add a random item from Women to the cart", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get("#ui-id-4").click();

    cy.Add_items();
  });
  it("Add a random item from Men to the cart", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get("#ui-id-5").click();

    cy.Add_items();
  });
  it("Add a random item from Gear to the cart", () => {
    cy.visit("https://magento.softwaretestingboard.com/");

    cy.get("#ui-id-6").click();

    let RandomItem = Math.floor(Math.random() * 4);
    cy.get(".product-items").find(".product-item").eq(RandomItem).click();

    cy.wait(2000);

    cy.get(".stock > span")
      .invoke("text")
      .then((theText) => {
        if (theText == "In stock") {
          cy.get("#product-addtocart-button").click();
        } else {
          alert("This item is not in the stock");
        }
      });
    cy.get(".page.messages")
      .invoke("text")
      .then((text) => {
        if ((text = "The requested qty is not available")) {
          cy.log("++++++++++++++++++++++++++++++");
        }
      });
    cy.wait(4000);
  });
});

describe("Login page", () => {
  it("Login with the correct Email and password", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9kZWlyZHJlLXJlbGF4ZWQtZml0LWNhcHJpLmh0bWw%2C/"
    );

    cy.get("#email").type("faisal.kushha@gmail.com");
    cy.get("#pass").type("abc123???");
    cy.get("#send2").click();
  });

  it("login with incorrect Email and password", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9kZWlyZHJlLXJlbGF4ZWQtZml0LWNhcHJpLmh0bWw%2C/"
    );

    cy.get("#email").type("abc@gmail.com");
    cy.get("#pass").type("abc124");
    cy.get("#send2").click();
  });
});
