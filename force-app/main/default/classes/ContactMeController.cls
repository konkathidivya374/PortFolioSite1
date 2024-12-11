global with sharing class ContactMeController {
    @AuraEnabled
    public static void createLead(String firstName, String lastName,
                                    String company, String email, String description) {

        Lead leadObj = new Lead();
        leadObj.FirstName = firstName;
        leadObj.LastName = lastName;
        leadObj.Company = company;
        leadObj.Email = email;
        leadObj.Description= description;

        insert leadObj;

    }
}