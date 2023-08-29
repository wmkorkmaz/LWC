public with sharing class AccountController {
    @AuraEnable(cacheable=true)
    public static List<Account> getAccounts(String filter){
       String keyName = '%' + filter + '%';

       List<Account> accounList = [SELECT Id, Name, Phone FROM Account WHERE Name LIKE: keyName WITH SECURITY_ENFORCED];
       return accounList;



    }
    
}