describe("Query Oracle database", () => {
    const SQL_NOT_ON_STORE_STATUS = "SELECT * FROM APPQOSSYS.books WHERE STATUS='NOT_ON_STORE'";
  
    it("Query the books with NOT_ON_STORE status", () => {
      cy.task("sqlQuery", SQL_NOT_ON_STORE_STATUS).then((resolvedValue) => {
        resolvedValue["rows"].forEach((item) => {
          console.log("result==>" + item);
        });
      });
    });
  });