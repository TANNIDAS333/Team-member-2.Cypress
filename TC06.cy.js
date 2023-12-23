describe('Leave Management Tests', () => {
    it('should apply for leave and check leave balance', () => {
      // Visit the OrangeHRM login page
      cy.visit("http://localhost/orangehrm/web/index.php/login");
  
      // Log in with valid credentials
      cy.get("input[placeholder='Username']").type('Admin');
      cy.get("input[placeholder='Password']").type('admin123');
      cy.get("button[type='submit']").click();
  
      // Navigate to the "Apply Leave" page
      cy.contains('Leave').click();
      cy.contains('Apply').click();
  
      // Fill in leave details
      cy.get("input[name='applyleave[txtLeaveType]']").select('Vacation');
      cy.get("input[name='applyleave[txtFromDate]']").type('2023-12-01');
      cy.get("input[name='applyleave[txtToDate]']").type('2023-12-05');
      cy.get("textarea[name='applyleave[txtComment]']").type('Vacation Leave Request');
  
      // Click the "Apply" button
      cy.contains('Apply').click();
  
      // Assertion: Check if the leave is applied successfully
      cy.get('.message.success').should('contain', 'Leave applied successfully');
  
      // Navigate to the "My Leave" page to check leave balance
      cy.contains('My Leave').click();
  
      // Assertion: Check if the leave balance is displayed
      cy.get('.leavebalance').should('contain', 'Balance: 5 days'); // Replace 'X' with the expected leave balance
  
      // Optionally, you can perform additional tests based on your requirements
    });
});