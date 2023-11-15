describe("Landing Page to /hospital", () => {
    it("should have videos with full functionality and able to redirect to /hospital", () => {
      // Visit landing page
      cy.visit("/");
  
      // get the video element which is not paused
      cy.wait(2000);
      cy.get("video").should("exist");
      expect(cy.get("video").should("have.prop", "paused", false));
  
      // click the video element
      cy.wait(5000);
      cy.get("button").contains("Pause").click();
      expect(cy.get("video").should("have.prop", "paused", true));
  
      // redirect to /hospital
      cy.get("button").contains("Select The Hospital").click();
      cy.get("img").should("have.length.gte", 3);
    });
  });